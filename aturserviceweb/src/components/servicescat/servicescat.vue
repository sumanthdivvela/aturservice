<template> 
    <section class="catSection">
      <div class="flexContainer"  > 
        <div class="flexItem"  
          v-for="cat in serviceCatagories"
          v-bind:key="cat.name"
          @click="serviceCatSelection(cat.name)"
            >
              <div > {{cat.desc }} </div>
        </div>
      </div>

    </section>
</template>

<script src="./servicescat.model.js" />
<style scoped src="./servicescat.css" />


