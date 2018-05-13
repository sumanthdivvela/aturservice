<template>
    <div v-if="selectedServiceDetails" >

    <el-dialog

    :title="selectedServiceDetails.display_name"
    :visible.sync="dialogVisible"
    width="80%"
    :before-close="handleClose">

    <div >

         <el-table
                :data="professionalsList"
                height="250"
                stripe
                highlight-current-row
                @current-change="handleProfessionalSelection"
                order="desending"
                empty-text="No professional available at this time."
                style="width:100%">

                 <el-table-column
                     type="index"
                  header-align="center"
                    width="50">
                </el-table-column>

                <el-table-column
                prop="name"
                label="Name"
                 header-align="center"
                 width="180"
               >
                </el-table-column>


               <el-table-column
                prop="avg_rating"
                label="Rating"
                 header-align="center"
                sortable>
                </el-table-column>

            </el-table>


    </div>
    <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">Cancel</el-button>
    </span>
    </el-dialog>

    <professionaldetails  />

    </div>
</template>

<script src="./professionallist.model.js" />
<style scoped src="./professionallist.css" />