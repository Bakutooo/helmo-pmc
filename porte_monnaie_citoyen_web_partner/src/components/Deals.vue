<template>
    <div>
        <div class="d-flex flex-row justify-content-between align-items-center">
            <h1>Deals :</h1>
            <button class="shadow btn btn-primary" data-toggle="modal" data-target="#AddDeal">Ajouter un deal</button>
        </div>
        <div class="w-100 p-3 d-flex flex-row flex-wrap">
            <div class="w-25" v-for="d in deal.deals" :key="d._id">
                <Deal v-bind:data="d"/>
            </div>
        </div>
        <modal-add-deal/>
    </div>
</template>

<script>
import Deal from './Deal.vue';
import ModalAddDeal from './modals/ModalAddDeal.vue';
import { mapState, mapActions } from 'vuex';

export default {
    name: "Deals",
    created: function(){
        this.$store.dispatch('fetchAllDeals', this.$store.state.partner.partner._id);
    },
    components : {
        Deal,
        ModalAddDeal
    },
    computed: {
        ...mapState([
            'deal',
            'partner'
        ])
    },
    methods: {
        ...mapActions([
            'fetchAllDeals'
        ])
    }
}
</script>
