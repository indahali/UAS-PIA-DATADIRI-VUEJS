<template>
<div class="card shadow mt-3">
  <div class="card-body">
    <h5 class="card-title">Edit pengalamans</h5>
     <form class="row g-3" @submit.prevent="update">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">type</label>
    <input type="text" class="form-control" id="inputEmail4" 
    v-model="pengalamans.type" />
      <div class="alert alert-danger" v-if="validation.type">
        {{ validation.type[0] }}
      </div>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Keterangan</label>
    <input type="text" class="form-control" id="inputPassword4"
    v-model="pengalamans.keterangan"/>
    <div class="alert alert-danger" v-if="validation.keterangan">
        {{ validation.keterangan[0] }}
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
    const pengalamans = reactive({
      type: '',
      keterangan: ''
    })
    const validation = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pengalamans/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.name)
        pengalamans.type = response.data.data.type
        pengalamans.keterangan = response.data.data.keterangan
      }).catch(error =>{
        console.log(error.response.data)
      })
    })
    function update(){
      let type = pengalamans.type
      let keterangan = pengalamans.keterangan
      axios.put(`http://127.0.0.1:8000/api/pengalamans/${route.params.id}`, {
        type: type,
        keterangan: keterangan
      })
      .then(() => {
        router.push({
          name:'pengalamans'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      pengalamans,
      validation,
      router, 
      update,
      route
    }
  },
}
</script>