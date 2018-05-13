<template>
  
    <el-dialog
    title="Select Service"
    :visible.sync="dialogVisible"
    width="80%"
    :before-close="handleClose">

    <section >
        <div class="flexContainer"  > 
            <div class="flexItem"  
                v-for="service in servicesList"
                v-bind:key="service.key_name"
                v-on:click="handleServiceSelection(service)"
                >
                    <span class="servIcons">
                        <span :data-icon="service.font_name">
                            </span>
                    </span>
                    <div>{{service.display_name }} </div>
            </div>
        </div>

    </section>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
    </span>
    </el-dialog>

</template>


<script src="./serviceslist.model.js" />

<style scoped src="./serviceslist.css" />