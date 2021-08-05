<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit Profil</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">NAMA</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="profils.nama" />
      <div class="alert alert-danger" v-if="validation.nama">
        {{ validation.nama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">TEMPAT TANGGAL LAHIR</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="profils.ttl" />
      <div class="alert alert-danger" v-if="validation.ttl">
        {{ validation.ttl[0] }}
      </div>
  </div>
   <div class="col-md-6">
    <label for="inputAddress" class="form-label">Jenis Kelamin</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="profils.jk" />
    <div class="alert alert-danger" v-if="validation.jk">
        {{ validation.jk[0] }}
      </div>
  </div>
   <div class="col-md-6">
    <label for="inputAddress" class="form-label">Agama</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="profils.agama" />
    <div class="alert alert-danger" v-if="validation.agama">
        {{ validation.agama[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Alamat</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="profils.alamat"/>
    <div class="alert alert-danger" v-if="validation.alamat">
        {{ validation.alamat[0] }}
      </div>
  </div>
 

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Edit</button>
  </div>
</form>
  </div>
</div>

</template>
<script>
import { onMounted, ref } from 'vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const profils = reactive({
      nama: '',
      ttl: '',
      jk: '',
      agama: '',
      alamat: ''
     
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/profils/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama)
        profils.ttl = response.data.data.ttl
        profils.jk = response.data.data.jk
        profils.agama = response.data.data.agama
        profils.alamat = response.data.data.alamat
   
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let nama = profils.nama
      let ttl = profils.ttl
      let jk = profils.jk
      let agama = profils.agama
      let alamat = profils.alamat
      axios.put(`http://127.0.0.1:8001/api/profils/${route.params.id}`, {
        nama: nama,
        ttl: ttl,
        jk: jk,
        agama: agama,
        alamat: alamat
        
      })
      .then(() => {
        router.push({
          name:'profils'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      profils,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>