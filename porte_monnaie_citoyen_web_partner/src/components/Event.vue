<template>
        <div>
            <div class="shadow pmc-event mr-3 mt-2 bg-white" data-toggle="modal" v-bind:data-target="modalId">
                <img alt="placeholder" src="https://via.placeholder.com/250x100"/>
                <div class="px-2">
                    <h4>{{name}}</h4>
                    <p>Date : {{date}}</p>
                </div>
            </div>
            <Modal v-bind:data="data"/>
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
        data(){
            return{
                data: this.event,
                modalId : "#manageEvent" + this.event._id,
                name : this.event.name,
                date : new moment(new Date(this.event.date)).format("DD/MM/YYYY")
            }
        }
    }
</script>