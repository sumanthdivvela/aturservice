<template>
 <div  v-if="selectedProfessionalDetails">
    <el-dialog
    title=" Professional details "
    :visible.sync="displayProfessionalDetails"
    width="80%"
    :before-close="handleCancel">
    
    <section v-if="displayProfessionalDetails" > 
        <div>

        <header> <h2> {{selectedProfessionalDetails.name}} </h2> </header>

        <p > {{selectedProfessionalDetails.desc}} </p>

        <h3>Rating : {{selectedProfessionalDetails.avg_rating}}</h3> 

        <h3>Comments: </h3>
         
             <section >


         <div class="flexContainer"   v-for="comment in selectedProfessionalDetails.comments" 
            v-bind:key="comment.id" style="width:100%" > 
            <div class="flexItem namecell" >
                    <div>{{comment.username }} : </div>
            </div>
            <div class="flexItem textcell" >
                    <div>{{comment.text }} </div>
            </div>
            <div class="flexItem datecell" >
                    <div>  {{comment.date }} </div>
            </div>
        </div>

        <div v-if="!selectedProfessionalDetails.comments" > No comments available at this time. </div>

    </section>

        </div>
         
   </section>     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Back</el-button>
        <el-button type="primary" @click="handleNext()">Next</el-button>
    </span>
</el-dialog>


 </div>
</template>

<script src="./professionaldetails.model.js" />
<style scoped src="./professionaldetails.css" />
