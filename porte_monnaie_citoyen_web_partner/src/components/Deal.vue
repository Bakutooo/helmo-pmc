<template>
    <div class="mr-3 mt-2 p-2 bg-white shadow">
        <h5>{{name}}</h5>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
                Points citoyens : {{price}}
            </div>
            <div class="d-flex flex-column align-items-center">
                <a class="text-primary" data-toggle="modal" :data-target="IdModal">Voir QR Code</a>
                <a class="text-danger">Supprimer</a>
            </div>
        </div>
        <modal-q-r-code :data="this.data"/>
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
                IdModal : "#QRCode" + this.data._id
            }
        }
    }
</script>
