<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(pendidikan, index) in pendidikans" :key="index">
<div class="card">
  <div class="card-header">{{pendidikan.sekolah}}</div>
  <div class="card-body">
    <h5 class="card-title">{{pendidikan.ns}}</h5>
     <h5 class="card-title">{{pendidikan.mulai_tahun}}</h5>
      <h5 class="card-title">{{pendidikan.berakhir_tahun}}</h5>

  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailpendidikans', params:{id:pendidikan.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
    props: ["pendidikans"],
};
</script>