<template> 

                    <el-autocomplete
                                v-model="serviceName"
                                value-key="display_name"
                                :fetch-suggestions="querySearchAsync"
                                placeholder="Search for a service"
                                @select="handleSelect"
                              ></el-autocomplete>

</template>

<script src="./search.model.js" />
<style scoped src="./search.css" />
