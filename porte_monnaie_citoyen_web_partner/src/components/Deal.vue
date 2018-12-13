<template>
    <div class="mr-3 mt-2 p-2 bg-white">
        <h5>{{name}}</h5>
        <div class="d-flex flex-row justify-content-between">
            <p>Points citoyens : {{price}}</p>
            <a class="text-danger" href="#">Supprimer</a>
        </div>
    </div>
</template>

<script>
    export default {
        props : [
            "data"
        ],
        data() {
            return {
                name : this.data.name,
                price : this.data.price
            }
        }
    }
</script>
