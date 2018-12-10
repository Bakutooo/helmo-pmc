<template>
    <div>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <h1>Deals :</h1>
            <button class="shadow btn btn-primary">Ajouter un deal</button>
        </div>
        <div class="w-100 p-3 d-flex flex-row flex-wrap">
            <div class="" v-for="deal in deals" :key="deal._id">
                <Deal v-bind:data="deal"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Deal from './Deal.vue';

    export default {
        name: "Deals",
        components : {
            Deal,
        },
        data(){
            return{
                deals : [
                    {"_id":"5bd2fe4dd9c9f42f34344f9b","name":"décapsuleur","price":15, "__v":0},
                    {"_id":"5bd2fe62d9c9f42f34344f9c","name":"Écharpe","price":20, "__v":0}
                ]
            }
        }
    }
</script>
