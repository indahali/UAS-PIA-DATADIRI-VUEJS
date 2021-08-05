<template>
    <div class="card text-center mt-4">
  <div class="card-header">
    Detail pendidikan
  </div>
  <div class="card-body">
    <h5 class="card-title">{{pendidikan.sekolah}}</h5>
    <p class="card-text">{{pendidikan.ns}}</p>
    <p class="card-text">{{pendidikan.mulai_tahun}}</p>
    <p class="card-text">{{pendidikan.berakhir_tahun}}</p>
    
  </div>
  <div class="card-footer">
    <router-link class="btn btn-success" :to="{name:'Editpendidikans', params:{id:pendidikan.id}}">Edit</router-link>
        <button @click.prevent="pendidikanDelete(pendidikan.id)" class="btn btn-danger">Delete</button>
  </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
export default {
  setup() {
      let pendidikan = ref([]);
    const router = useRouter();
    const route = useRoute()
    onMounted(()=>{
      axios.get(`http://127.0.0.1:8000/api/pendidikans/${route.params.id}`)
      .then(response => {
        console.log(response.data.data.nama);
        pendidikan.value = response.data.data;
        
      }).catch(error =>{
        console.log(error.response.data);
      });
    });
    function pendidikanDelete(id){
      axios.delete(`http://127.0.0.1:8000/api/pendidikans/${id}`)
      .then(()=>{
        router.go(-1);
      }).catch(error => {
        console.log(error)
      })
    }
    
    return {
      pendidikan,
      router, 
      pendidikanDelete,
      route
    }
  },
}
</script>