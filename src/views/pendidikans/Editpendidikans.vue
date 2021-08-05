<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit pendidikan</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Sekolah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pendidikans.sekolah" />
      <div class="alert alert-danger" v-if="validation.sekolah">
        {{ validation.sekolah[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Nama Sekolah</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pendidikans.ns" />
      <div class="alert alert-danger" v-if="validation.ns">
        {{ validation.ns[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Mulai Tahun</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikans.mulai_tahun"/>
    <div class="alert alert-danger" v-if="validation.mulai_tahun">
        {{ validation.mulai_tahun[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Berakhir Tahun</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pendidikans.berakhir_tahun" />
    <div class="alert alert-danger" v-if="validation.berakhir_tahun">
        {{ validation.berakhir_tahun[0] }}
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
    const pendidikans = reactive({
      sekolah: '',
      ns: '',
      mulai_tahun: '',
      berakhir_tahun: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8001/api/pendidikans/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.sekolah)
        pendidikans.sekolah = response.data.data.sekolah
        pendidikans.ns = response.data.data.ns
        pendidikans.mulai_tahun = response.data.data.mulai_tahun
        pendidikans.berakhir_tahun = response.data.data.berakhir_tahun
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let sekolah = pendidikans.sekolah
      let ns = pendidikans.ns
      let mulai_tahun = pendidikans.mulai_tahun
      let berakhir_tahun = pendidikans.berakhir_tahun
      axios.put(`http://127.0.0.1:8001/api/pendidikans/${route.params.id}`, {
        sekolah: sekolah,
        ns: ns,
        mulai_tahun: mulai_tahun,
        berakhir_tahun: berakhir_tahun
      })
      .then(() => {
        router.push({
          name:'pendidikans'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pendidikans,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>