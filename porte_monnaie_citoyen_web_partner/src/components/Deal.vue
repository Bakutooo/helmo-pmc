<template>
    <div class="mr-3 mt-2 p-2 bg-white">
        <h5>{{name}}</h5>
        <div class="d-flex flex-row">
            <p>Points citoyens : {{price}}</p>
            <a class="ml-5" href="#">Supprimer</a>
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
