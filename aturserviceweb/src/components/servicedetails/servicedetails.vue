<template>
 <div>
    <el-dialog
    title=" Service details "
    :visible.sync="displayServiceDetails"
    width="80%"
    :before-close="handleCancel">
    
    <section v-if="displayServiceDetails" > 
        <header> <h2> {{serviceDetails.display_name}} </h2> </header>
        

            <h3> {{serviceDetails.detailedDesc}} </h3>
            
           <div>
            <el-table
                :data="serviceDetails.tasks"
                height="250"
                style="width: 100%">
                 <el-table-column
                     type="index"
                    width="50">
                </el-table-column>
                
                <el-table-column
                prop="desc"
                label="Task"
                width="180">
                </el-table-column>

                <el-table-column
                prop="details"
                label="Other details">
                </el-table-column>

            </el-table>
   
            </div>

            <div >

                 <el-table
                :data="serviceDetails.rateCard.rateList"
                height="250"
                style="width: 100%">
                 <el-table-column
                     type="index"
                    width="50">
                </el-table-column>
                
                <el-table-column
                prop="desc"
                label=" Item "
                width="180">
                </el-table-column>

                 <el-table-column
                prop="amount"
                label="Rate"
                width="100">
                </el-table-column>

                <el-table-column
                prop="billingType"
                label="Billing Type"
                >
                </el-table-column>



            </el-table>
            </div>
 
   </section>     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Cancel</el-button>
        <el-button type="primary" @click="handleNext()">Next</el-button>
    </span>
</el-dialog>

 </div>
</template>

<script src="./servicedetails.model.js" />
<style scoped src="./servicedetails.css" />
