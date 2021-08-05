<template>
<div class="row">
    <div class="col-lg-4 mt-3" v-for="(profil, index) in profils" :key="index">
<div class="card">
  <div class="card-header">{{profil.nama}}</div>
  <div class="card-body">
    <h5 class="card-title">{{profil.jk}}</h5>
    <p class="card-text">{{profil.ttl}}</p>
    <p class="card-text">{{profil.agama}}</p>
     <p class="card-text">{{profil.alamat}}</p>

  </div>
  <div class="card-footer text-muted">
    <router-link class="btn btn-primary" :to="{name:'Detailprofils', params:{id:profil.id}}">Detail</router-link>
  </div>
</div>
</div>
</div>
</template>