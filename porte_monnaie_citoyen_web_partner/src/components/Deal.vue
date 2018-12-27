<template>
    <div class="mr-3 mt-2 p-2 bg-white shadow">
        <h5>{{name}}</h5>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
                Points citoyens : {{price}}
            </div>
            <div class="d-flex flex-column align-items-center">
                <a class="text-primary pmc-pointer" data-toggle="modal" :data-target="IdModal">Voir QR Code</a>
                <a class="text-danger pmc-pointer" v-on:click="deleteDeal()">Supprimer</a>
            </div>
        </div>
        <modal-q-r-code :data="this.data"/>
    </div>
</template>

<script>
    import ModalQRCode from './modals/ModalQRCode';
import { mapActions } from 'vuex';

    export default {
        components : {
            ModalQRCode
        },
        methods: {
            ...mapActions([
                'deleteDeal'
            ]),
            deleteDeal: function(){
                this.$store.dispatch('deleteDeal', this.data._id)
            }
        },
        props : [
            "deal"
        ],
        data() {
            return {
                name : this.deal.name,
                price : this.deal.price,
                IdModal : "#QRCode" + this.deal._id,
                data: {...this.deal, password: this.deal._id}
            }
        }
    }
</script>
