<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Tambah Data pendidikan</h5>
     <form class="row g-3" @submit.prevent="store">
  <div class="col-md-6">
    <label for="inputns4" class="form-label">Sekolah</label>
    <input type="text" class="form-control" id="inputns4" 
    v-model="pendidikans.sekolah" />
      <div class="alert alert-danger" v-if="validation.sekolah">
        {{ validation.sekolah[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Nama Sekolah</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pendidikans.ns"/>
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
       <div class="col-12">
    <label for="inputAddress" class="form-label">Berakhir Tahun</label>
    <input type="text" class="form-control" id="inputAddress" 
    v-model="pendidikans.berakhir_tahun"/>
    <div class="alert alert-danger" v-if="validation.berakhir_tahun">
        {{ validation.berakhir_tahun[0] }}
      </div>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-primary">Add</button>
  </div>
</form>
  </div>
</div>

</template>
<script>
import { ref } from 'vue';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
    const pendidikans = reactive({
      sekolah: '',
      ns: '',
      mulai_tahun: '' ,
      berakhir_tahun: '' 
      
    })
    const validation = ref([])
    const router = useRouter()
    function store(){
      let sekolah = pendidikans.sekolah
      let ns = pendidikans.ns
      let mulai_tahun = pendidikans.mulai_tahun
      let berakhir_tahun = pendidikans.berakhir_tahun
      axios.post('http://127.0.0.1:8000/api/pendidikans', {
        sekolah: sekolah,
        ns: ns,
        mulai_tahun: mulai_tahun,
        berakhir_tahun: berakhir_tahun
        
      }).then(() => {
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
      store
    }
  },
}
</script>