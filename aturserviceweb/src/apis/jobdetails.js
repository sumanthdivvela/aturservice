import dbservice from './dbservice.js'
import professionals from './professionals.js'
import proServices from './proservices.js'


const JOB_STATUS = {
    REQUEST: "REQUEST",
    CREATED: "CREATED",
    CANCELED: "CANCELED",
    ACCEPTED: "ACCEPTED",
    INPROGRESS: "INPROGRESS",
    COMPLETED: "COMPLETED",
    HOLD: "HOLD"

}


function createJobRequest(job) {
    if (!job)
        return;


    let record = {
        professionalName: job.professional.name,
        serviceKey: job.service.key_name,
        location: job.location,
        userdetails: job.userdetails,
        requestdate: job.requestedDate,
        status: job.status
    }

    dbservice.addJobRecord(record);

}

/*

jobRequest =  {
            professional: rootState.professionals.selectedProfessionalDetails,
            service: rootState.proServices.selectedServiceDetails,
            location: state.address,
            userdetails: rootState.userDetails.userinfo,
            requestedDate: state.jobDate,
            status:"REQUEST"
        }

*/

function registerForJobChanges({
    username,
    isProfessional,
    callback
}) {
    dbservice.registerForJobChanges({
        username,
        isProfessional,
        callback: function (job) {
            processJob(job).then(result => callback(result));
        }
    });

}

function unRegisterForJobChange() {
    dbservice.unRegisterForJobChange();
}


function processJob(job) {

    return new Promise((resolve, reject) => {
        let promises = [];
        let record = {};

        promises.push(professionals.getProfessionalDetailsByName(job.professionalName))
        promises.push(proServices.getServiceDetails(job.serviceKey))

        Promise.all(promises).then((results) => {

            record.id = job.id;
            record.professional = results[0];
            record.service = results[1];
            record.location = job.location;
            record.requestedDate = job.requestdate;
            record.status = job.status;
            record.userdetails = job.userdetails;

            resolve(record);

        }).catch(reject);
    })



}

function processRecordsFromDb(resultSet, callback) {
    let jobs = [];

    resultSet.each(job => {
        processJob(job).then(result => jobs.push(result));
    }).then(() => {
        callback(jobs);
    })
}

function getJobsByProfessional(username, status) {
    return new Promise((resolve, reject) => {
        try {
            dbservice.getJobsByProfessional(username, status).then(result => {

                processRecordsFromDb(result, resolve);


            }).catch(e => console.log(e));
        } catch (e) {
            reject(e);
        }
    });
}

function updateJobStatus(job, status) {
    dbservice.setJobStatus(job, status);
}

function getJobsByUser(username, status) {
    return new Promise((resolve, reject) => {
        try {
            dbservice.getJobsByUser(username, status).then(result => {

                processRecordsFromDb(result, resolve);

            }).catch(e => console.log(e))

            //let result =  jobdetails.filter(job => job.userdetails.username ==  username && (!status || (status && job.status == status)))
            //resolve(result);
        } catch (e) {
            reject(e);
        }
    });
}


export default {
    createJobRequest,
    getJobsByProfessional,
    updateJobStatus,
    getJobsByUser,
    JOB_STATUS,
    registerForJobChanges,
    unRegisterForJobChange

}