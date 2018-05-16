import Dexie from 'dexie';
import 'dexie-observable';


var db = new Dexie('@urservice');


db.version(1).stores({
    jobdetails: '++id,professionalName,serviceKey,location,userdetails,requestdate,status'
});


function registerForJobChanges({username, isProfessional, callback}){
    db.on('changes', function (changes) {

        changes.forEach(function (change) {
    
            let job = change.obj;
            
            if( username == (isProfessional ? job.professionalName: job.userdetails.username)){
                callback(job);
            }
          })
    });
}

function unRegisterForJobChange(){
    db.on('changes', null);
}


//db.open();

function addJobRecord ( record){
    db.jobdetails.add(record);
} 


function setJobStatus(job, status){

    db.jobdetails.where("id").equals(job.id).modify(function(value) {
        value.status = status;
        });

}

function  getJobsByProfessional  (username, status) {
  return new Promise( (resolve, reject) => {
    try{
        resolve ( db.jobdetails.filter( job => job.professionalName ==  username && (!status || (status && job.status == status))) );
    }catch(e){
        reject(e);
    }
  }) 
}

function getJobsByUser(username, status){
    return new Promise( (resolve, reject) => {
        try{
            resolve ( db.jobdetails.filter(job => job.userdetails.username ==  username && (!status || (status && job.status == status))) );
        }catch(e){
            reject(e);
        }
      }) 

}

export default {
    addJobRecord,
    getJobsByProfessional,
    getJobsByUser,
    setJobStatus,
    registerForJobChanges,
    unRegisterForJobChange
}

