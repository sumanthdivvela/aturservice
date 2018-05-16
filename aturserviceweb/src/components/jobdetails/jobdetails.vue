<template>
 <div  v-if="selectedJob != null" >

    <el-dialog
    title=" Job details "
    visible
    width="80%"
    :before-close="handleCancel">
    
    <section > 
        <div>
        

            <header> <h2> Service selected : {{selectedJob.service.display_name}} </h2> </header>
            <p> Service description : {{selectedJob.service.display_name}} </p>


            <p > {{selectedJob.service.detailedDesc}} </p>

            <br/>

            <div>
            <h2> Address: </h2>
                <div> House No : {{selectedJob.location.houseno }}</div>
                <div> Street : {{selectedJob.location.street1 }}</div>
                <div> Colony : {{selectedJob.location.street2 }}</div>
                <div> City : {{selectedJob.location.city}}</div>
                <div> Pincode : {{selectedJob.location.pincode }}</div>
            </div>
            <br/>

            <div>
                <h2> Professional Details </h2>
                <div> Name : {{selectedJob.professional.name}} </div>
                <div> Rating : {{selectedJob.professional.avg_rating}}</div>
            </div>
            <br/>

            <div><b> Job Date : </b> {{ selectedJob.requestedDate|datefilter}}</div>
            <div><b> Job Status : </b> {{ selectedJob.status.toLowerCase() }}</div>
       
        </div>
         
   </section>     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Back</el-button>
        <el-button v-if="displayConfirm"
        type="primary" @click="handleConfirm()">Confirm</el-button>
        <el-button v-if="selectedJob.status == 'CREATED'"
        type="danger" @click="handleJobCancel()">Cancel Job</el-button>
        <el-button v-if="selectedJob.status == 'CREATED' && isProfessional"
        type="success" @click="handleJobAccepted()">Accept Job</el-button>
        <el-button v-if="selectedJob.status == 'ACCEPTED' && !isProfessional"
        type="success" @click="handleJobCompleted()">Completed Job</el-button>

    </span>



</el-dialog>

 </div>
</template>



<script src="./jobdetails.model.js" />
<style scoped src="./jobdetails.css" />
