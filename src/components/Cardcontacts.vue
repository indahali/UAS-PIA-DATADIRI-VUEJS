<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(contact, index) in contacts" :key="index">
<div class="card">
  <div class="card-header">{{contact.no_tlp}}</div>
  <div class="card-body">
    <h5 class="card-title">{{contact.email}}</h5>
  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailcontacts', params:{id:contact.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["contacts"],
};
</script>