<template>
    <div>
        <div class="modal fade" v-bind:id="modalId" tabIndex="-1" role="dialog" aria-labelledby="manageEventLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="manageEventLabel">
                            Informations de l'évènement : <br/> {{name}}
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <h5>
                                Description :
                            </h5>
                            <p>{{description}}</p>
                            <p>Gain : {{gain}} points citoyen</p>
                        </div>
                        <hr/>
                        <div>
                            <p>{{address}}</p>
                            <p>{{date}}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteEvent()">Annuler l'évènement</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
import { mapActions } from 'vuex';

    export default {
        name : "ModalEvents",
        props : [
            "data"
        ],
        data() {
            return {
                modalId : "manageEvent" + this.data._id,
                name : this.data.name,
                description : this.data.description,
                address : this.data.address,
                date : new moment(new Date(this.data.date)).format("DD/MM/YYYY"),
                gain : this.data.gain
            }
        },
        methods: {
            ...mapActions([
                'deleteEvent'
            ]),
            deleteEvent: function(){
                this.$store.dispatch("deleteEvent", this.data._id);
                this.name = "",
                this.description = "",
                this.address = "",
                this.date = "",
                this.gain = ""
            }
        },
    }
</script>
