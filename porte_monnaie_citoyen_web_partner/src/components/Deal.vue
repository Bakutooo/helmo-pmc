<template>
    <div class="mr-3 mt-2 p-2 bg-white shadow" data-toggle="modal" data-target="#QRCode">
        <h5>{{name}}</h5>
        <div class="d-flex flex-row justify-content-between">
            <p>Points citoyens : {{price}}</p>
            <a class="text-danger" href="#">Supprimer</a>
        </div>
        <modal-q-r-code v-bind:data="this.data"/>
    </div>
</template>

<script>
    import ModalQRCode from './modals/ModalQRCode';

    export default {
        components : {
            ModalQRCode
        },
        props : [
            "data"
        ],
        data() {
            return {
                name : this.data.name,
                price : this.data.price,
                qrcode : "Ceci est un test"
            }
        }
    }
</script>
