
let jobdetails = [];

const JOB_STATUS = {
    REQUEST:"REQUEST",
    CREATED : "CREATED",
    CANCELED : "CANCELED",
    ACCEPTED: "ACCEPTED",
    INPROGRESS : "INPROGRESS",
    COMPLETED : "COMPLETED",
    HOLD : "HOLD"

}
 

function createJobRequest ( job){
    jobdetails.push(job);
}

function getJobsByProfessional(username, status){
    return new Promise((resolve, reject) => {
        try{
            let result = jobdetails.filter(job => job.professional.name ==  username && (!status || (status && job.status == status)));
            resolve(result);
        }catch(e){
            reject(e);
        }
    });
}

function acceptJobRequest(profId, job){
    job.status = JOB_STATUS.ACCEPTED;
}

function getJobsByUser(username, status) {
    return new Promise((resolve, reject) => {
        try{
            let result =  jobdetails.filter(job => job.userdetails.username ==  username && (!status || (status && job.status == status)))
            resolve(result);
        }catch(e){
            reject(e);
        }
    });
}


export default {
    createJobRequest,
    getJobsByProfessional,
    acceptJobRequest,
    getJobsByUser,
    JOB_STATUS

}