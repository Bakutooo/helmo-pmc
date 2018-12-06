<template>
        <div>
            <div class="shadow pmc-event mr-3 mt-2 bg-white" data-toggle="modal" data-target="#manageEvent">
                <img alt="placeholder" src="https://via.placeholder.com/250x100"/>
                <div class="px-2">
                    <h4>{{name}}</h4>
                    <p>Date : {{date}}</p>
                </div>
            </div>
            <Modal />
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
            "data"
        ],
        data(){
            return{
                name : this.data.name,
                date : new moment(new Date(this.data.date)).format("DD/MM/YYYY")
            }
        }
    }
</script>