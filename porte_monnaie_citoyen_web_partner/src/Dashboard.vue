<template>
    <div class="d-flex flex-column">
        <div class="w-100 d-flex flex-row justify-content-between align-items-center mt-3 ml-3">
            <h4 class="">Évènements :</h4>
            <div class="d-flex flex-row align-items-center">
                <button class="shadow btn btn-primary mx-5">Ajouter un évènement</button>
                <div class="align-middle mr-3">
                    Trier par
                </div>                
                <select>
                    <option value="Date">Date</option>
                    <option value="Nom">Nom</option>
                </select>
            </div>
        </div>
        <div class="w-100 p-3 d-flex flex-row flex-wrap">
            <div v-for="e in event.events" :key="e._id" class="">
                <Event v-bind:data="e"/>
            </div>
        </div>
    </div>
</template>

<script>/* eslint-disable no-console */
import Event from './components/Event.vue';
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    created: function(){
        this.$store.dispatch("fetchAllEvents", this.$store.state.partner.partner._id);
    },
    components : {
        Event
    },
    computed: {
        ...mapGetters([
            'currentPartner'
        ]),
        ...mapState([
            'event',
            'partner'
        ])
    },
    methods: {
        ...mapActions([
            'fetchAllEvents'
        ])
    }
}
</script>