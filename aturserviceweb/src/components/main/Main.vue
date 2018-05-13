<template>
    <el-container>
        <el-container>
            <el-header>

                <el-row :gutter="1">
                    <el-col :xs="18" :sm="20" :md="20" :lg="20" :xl="20">
                        <div class="grid-content apptitle">
                            @ Ur Service
                        </div>
                    </el-col>
                    <el-col :xs="6" :sm="4" :md="4" :lg="4" :xl="4">
                        <div class="grid-content">
                            <el-button 
                             v-if="!isLoggedIn"
                             @click="handleLoginBtn()"
                             type="primary"
                             >Login</el-button>

                             <el-button 
                             v-if="isLoggedIn"
                             @click="handleLogoutBtn()"
                             type="warning"
                             >Logout</el-button>

                        </div>
                    </el-col>
                </el-row>
            </el-header>
            <el-main>
                <section>
                    <h1 class="welMsg1"> Professionals at your Service in {{cityName}}</h1>
                    <h2 class="welMsg2"> Real time access to professional services </h2>
                </section>

                <section class="" style="margin-top:20px">
                    <el-row :gutter="1">
                        <el-col :xs="2" :sm="2" :md="2" :lg="5" :xl="5">
                            <div>&nbsp;</div>
                        </el-col>
                        <el-col :xs="0" :sm="10" :md="10" :lg="4" :xl="4">

                            <div class="grid-content " style="text-align:right">
                                <el-select v-model="cityName" placeholder="Select">
                                    <el-option v-for="item in cityList" :key="item" :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </div>
                        </el-col>
                        <el-col :xs="20" :sm="10" :md="10" :lg="10" :xl="10">
                            <div class="grid-content">
                                <search />
                            </div>
                        </el-col>
                        <el-col :xs="2" :sm="2" :md="2" :lg="5" :xl="5"></el-col>
                    </el-row>
                </section>

                <servicecat />
                
                <router-view/>


            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script src="./Main.model.js" />



<style>
/* App theme related. */
.apptitle {
  padding: 10px 0px;
  font: bold 40px arial, sans-serif;
  color: #fff;
}

.el-select .el-input,
.el-autocomplete {
  width: 100%;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #384250;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}


.el-button--primary {
    color: #fff;
    background-color: #27ae60;
    border-color: #27ae60;
}

.el-dialog__header
{

background-color: #546E7A;
}

.el-dialog__title{
color:  #fff;
}
</style>
<style scoped src="./Main.css" />