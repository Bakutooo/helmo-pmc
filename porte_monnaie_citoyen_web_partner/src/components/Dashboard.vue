<template>
    <div class="d-flex flex-column">
        <div class="w-100 d-flex flex-row justify-content-between align-items-center mt-3 ml-3">
            <h4 class="">Évènements :</h4>
            <div class="d-flex flex-row align-items-center">
                <button class="shadow btn btn-primary mx-5" data-toggle="modal" data-target="#AddEvent">Ajouter un évènement</button>
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
                <Event v-bind:event="e"/>
            </div>
        </div>
        <modal-add-event />
    </div>
</template>

<script>/* eslint-disable no-console */
import Event from './Event.vue';
import { mapState, mapActions } from 'vuex';
import ModalAddEvent from "./modals/ModalAddEvent.vue";
import socketClient from "socket.io-client";

export default {
    created: function(){
        this.io = socketClient("https://pmc.girafes.be");
        this.$store.dispatch("fetchAllEvents", this.$store.state.partner.partner._id);
    },
    mounted: function() {
        this.io.on("changedEvent", () => {
            this.$store.dispatch("fetchAllEvents", this.$store.state.partner.partner._id);
        });
    },
    components : {
        Event,
        ModalAddEvent
    },
    computed: {
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