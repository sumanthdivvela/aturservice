<template>
  
    <el-dialog
    title="Jobs List"
    visible
    width="80%"
    :before-close="handleClose">

    <section >

         <div class="flexContainer"   v-for="job in jobsList" 
            v-bind:key="job.id" style="width:100%" > 

            <div v-if="isProfessional" class="flexItem namecell" >
                    <div>{{job.userdetails.firstname }} {{job.userdetails.lastname }}  </div>
            </div>

            <div v-if="!isProfessional" class="flexItem namecell" >
                    <div>{{job.professional.name }}  </div>
            </div>

            <div class="flexItem textcell" >
                    <div>{{job.service.display_name }} </div>
            </div>
            <div class="flexItem datecell" >
                    <div>  {{job.location }} </div>
            </div>

            <div class="flexItem datecell" >
                    <div>  {{job.requestedDate.toLocaleString()}} </div>
            </div>
        </div>

        <div v-if="!jobsList" > No Jobs available at this time. </div>

    </section>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
    </span>
    </el-dialog>

</template>

<script src="./jobslist.model.js" />

<style scoped src="./jobslist.css" />