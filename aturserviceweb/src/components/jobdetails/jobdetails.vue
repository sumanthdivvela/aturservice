<template>
 <div  v-if="selectedProfessionalDetails">
    <el-dialog
    title=" Final Job details "
    :visible.sync="displayJobDetails"
    width="80%"
    :before-close="handleCancel">
    
    <section > 
        <div>
        

            <header> <h2> Service selected : {{selectedServiceDetails.display_name}} </h2> </header>
            <p> Service description : {{selectedServiceDetails.display_name}} </p>


            <p > {{selectedProfessionalDetails.detailedDesc}} </p>

            <br/>

            <div>
            <h2> Address: </h2>
                <div> House No : {{locationDetails.houseno }}</div>
                <div> Street : {{locationDetails.street1 }}</div>
                <div> Colony : {{locationDetails.street2 }}</div>
                <div> City : {{cityName}}</div>
                <div> Pincode : {{locationDetails.pincode }}</div>
            </div>
            <br/>

            <div>
                <h2> Professional Details </h2>
                <div> Name : {{selectedProfessionalDetails.name}} </div>
                <div> Rating : {{selectedProfessionalDetails.avg_rating}}</div>
            </div>
            <br/>

            <div><b> Job Date : </b> {{ jobdate|datefilter}}</div>

       
        </div>
         
   </section>     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Back</el-button>
        <el-button type="primary" @click="handleConfirm()">Confirm</el-button>
    </span>



</el-dialog>

 </div>
</template>



<script src="./jobdetails.model.js" />
<style scoped src="./jobdetails.css" />
