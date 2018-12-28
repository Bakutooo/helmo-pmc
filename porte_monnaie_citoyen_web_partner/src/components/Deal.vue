<template>
    <div class="mr-3 mt-2 p-2 bg-white shadow">
        <h5>{{this.deal.name}} <span v-if="this.deal.state === 'N'">(Stoppé)</span></h5>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <div>
                Points citoyens : {{this.deal.price}}
            </div>
            <div class="d-flex flex-column align-items-center">
                <a class="text-primary pmc-pointer" v-if="this.deal.state !== 'N'" data-toggle="modal" :data-target="'#QRCode' + this.deal._id">Voir QR Code</a>
                <a class="text-danger pmc-pointer" v-if="this.deal.state !== 'N'" v-on:click="updateDeal()">Stopper</a>
            </div>
        </div>
        <modal-q-r-code :data="dealQR"/>
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
                'updateDeal'
            ]),
            updateDeal: function(){
                this.$store.dispatch('updateDeal', this.deal._id)
            }
        },
        props : [
            "deal"
        ],
        data() {
            return {
                dealQR: {...this.deal, password: this.deal._id}
            }
        },
    }
</script>
