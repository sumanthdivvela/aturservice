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
         

            <el-table
                :data="selectedProfessionalDetails.comments"
                height="250"
                style="width: 100%">

                 <el-table-column
                     type="index"
                    width="50">
                </el-table-column>
                
                <el-table-column
                prop="username"
                label="Username"
                width="120">
                </el-table-column>

                <el-table-column
                prop="date"
                label="Date"
                width="100">
                </el-table-column>

                <el-table-column
                prop="text"
                label="Comment">
                </el-table-column>

            </el-table>

        </div>
         
   </section>     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Back</el-button>
        <el-button type="primary" @click="handleNext()">Next</el-button>
    </span>
</el-dialog>

<jobdetails />


 </div>
</template>

<script src="./professionaldetails.model.js" />
<style scoped src="./professionaldetails.css" />
