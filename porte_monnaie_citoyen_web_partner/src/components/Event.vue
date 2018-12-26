<template>
        <div>
            <div class="shadow pmc-event mr-3 mt-2 bg-white" data-toggle="modal" v-bind:data-target="'#manageEvent' + this.event._id">
                <img alt="placeholder" src="https://via.placeholder.com/250x100"/>
                <div class="px-2">
                    <h4>{{this.event.name}}</h4>
                    <div class="d-flex justify-content-between d-row">
                        <span>Date : {{getDate(this.event.date)}}</span>
                        <div :class="'dot-'+this.event.state"></div>
                    </div>
                </div>
            </div>
            <Modal v-bind:data="this.event"/>
        </div>
</template>

<script>
    import moment from "moment";
    import Modal from './modals/ModalEvents.vue';

    export default {
        name : "Event",
        components: {
            Modal,
        },
        props : [
            "event"
        ],
        methods: {
            getDate: function(date)  {
                return new moment(new Date(date)).format("DD/MM/YYYY");
            }
        }
    }
</script>