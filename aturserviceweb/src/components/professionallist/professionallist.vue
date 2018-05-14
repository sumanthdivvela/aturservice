<template>
    <div v-if="selectedServiceDetails" >

    <el-dialog

    :title="professionalListHeader"
    :visible.sync="dialogVisible"
    width="80%"
    :before-close="handleClose">

    <section >

        <div  v-for="professional in professionalsList"
                v-bind:key="professional.id"
                v-on:click="handleProfessionalSelection(professional)">
        <el-row :gutter="0"  >

         <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="2"><div class="grid-content bg-purple">Name :</div></el-col>
        <el-col :xs="18" :sm="12" :md="12" :lg="12" :xl="12"><div class="grid-content bg-purple-light"> {{professional.name }} </div></el-col>
        <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="2"><div class="grid-content bg-purple">Rating :</div></el-col>
        <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="8"><div class="grid-content bg-purple-light">{{professional.avg_rating }}</div></el-col>
        
        </el-row>
        </div>
        <div v-if="!professionalsList" > No professional available at this time. </div>

    </section>

    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
    </span>
    </el-dialog>

    </div>
</template>

<script src="./professionallist.model.js" />
<style scoped src="./professionallist.css" />