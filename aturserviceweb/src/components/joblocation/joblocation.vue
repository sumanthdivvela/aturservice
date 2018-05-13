<template>
  <el-dialog
    title=" Job location "
    :visible.sync="displayJobLocation"
    width="80%"
    :before-close="handleCancel">

  <section class="joblocdetails">
      <div class="flexContainer">
          <label class="flexItem" for="houseNo" >  House No : </label>
                     <el-input class="flexItem"
           id="houseNo"
            placeholder="Enter House No"
            v-model="houseno"
            >
            </el-input>

      </div>
            <div class="flexContainer">
          <label class="flexItem" for="street" > Street  : </label>
           <el-input class="flexItem"
           id="street"
            placeholder="Enter Street info"
            v-model="street"
            >
            </el-input>
      </div>
            <div class="flexContainer">

          <label class="flexItem" for="colony" > Colony : </label>
          <el-input class="flexItem"
           id="colony"
            placeholder=" Enter Colony Name"
            v-model="colony"
            >
            </el-input>
      </div>
        <div class="flexContainer">
          <label class="flexItem" for="city" > City : </label> 
          <el-input class="flexItem"
           id="city"
            placeholder="Enter City"
            v-model="cityName"
            :disabled="true">
            </el-input>

      </div>
       <div class="flexContainer">
          <label class="flexItem" for="pincode" > Pincode : </label>

        <el-autocomplete
            class="inline-input flexItem"
            v-model="pincode"
            :fetch-suggestions="querySearch"
            placeholder="Please Input"
            :trigger-on-focus="false"
            @select="handleSelect"

            ></el-autocomplete>

      </div>
  </section>

     
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Cancel</el-button>
        <el-button type="primary" @click="handleNext()">Next</el-button>
    </span>
</el-dialog>
        

</template>

<script src="./joblocation.model.js" />
<style scoped src="./joblocation.css" />

