
<template>
<el-dialog
    title=" Login "
    :visible.sync="displayLogin"
    width="80%"
    :before-close="handleCancel">

  <section class="loginSection">

      <div class="flexContainer">

          <label class="flexItem" for="Username" >Username :</label>
                     <el-input class="flexItem"
             name="Username"
            placeholder="Enter username"
            v-model="username"
            >
            </el-input>

      </div>
        <div class="flexContainer">
          <label class="flexItem" for="password" > Password  : </label>
           <el-input class="flexItem"
            name="password"
            placeholder="Enter password"
            v-model="password"
            type="password"
            >
            </el-input>
      </div>
        <div  v-if="message" class="flexContainer">
         <el-alert
            :title="message"
            :closable="false"
            type="error">
         </el-alert>
      </div>

  </section>
       <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel()">Cancel</el-button>
        <el-button type="primary" @click="handleLogin()">Login</el-button>
    </span>
</el-dialog>
  
</template>

<script src="./login.model.js" />
<style scoped src="./login.css" />