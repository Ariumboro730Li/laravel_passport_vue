<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT POST</h4>
                        <hr>

                        <form @submit.prevent="update">
                            <div class="form-group">
                                <label for="name" class="font-weight-bold">name</label>
                                <input type="text" class="form-control" v-model="post.name" placeholder="Masukkan Judul Post">
                                <!-- validation -->
                                <div v-if="validation.name" class="mt-2 alert alert-danger">
                                    {{ validation.name[0] }}
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="detail" class="font-weight-bold">detail</label>
                                <textarea class="form-control" rows="4" v-model="post.detail" placeholder="Masukkan Konten Post"></textarea>
                                <!-- validation -->
                                <div v-if="validation.detail" class="mt-2 alert alert-danger">
                                    {{ validation.detail[0] }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>                        

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

export default {

    setup() {

        //state posts
        const post = reactive({
            name: '',
            detail: ''
        })

        //state validation
        const validation = ref([])

        //vue router
        const router = useRouter()

        //vue router
        const route = useRoute()

        //mounted
        onMounted(() => {

            //get API from Laravel Backend
            axios.get(`http://127.0.0.1:8000/api/products/${route.params.id}`)
            .then(response => {
              
              //assign state posts with response data
              post.name    = response.data.data.name  
              post.detail  = response.data.data.detail  

            }).catch(error => {
                console.log(error.response.data)
            })

        })

        //method update
        function update() {

            let name   = post.name
            let detail = post.detail

            axios.put(`http://127.0.0.1:8000/api/products/${route.params.id}`, {
                name: name,
                detail: detail
            }).then(() => {

                //redirect ke post index
                router.push({
                    name: 'post.index'
                })

            }).catch(error => {
                //assign state validation with error 
                validation.value = error.response.data.data
            })

        }

        //return
        return {
            post,
            validation,
            router,
            update
        }

    }

}
</script>

<style>
    body{
        background: lightgray;
    }
</style>