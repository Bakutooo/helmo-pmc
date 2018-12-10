<template>
import { mapActions } from 'vuex';
    <div>
        <div class="modal fade" id="AddEvent" tabIndex="-1" role="dialog" aria-labelledby="addEventLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="addEventLabel">
                            Ajouter un évènement
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <form class="modal-body d-flex flex-column">
                                <div class="form-group">
                                    <input v-model="name" class="form-control" type="text" placeholder="Entrez le nom de l'évènement..."/>
                                </div>
                                <div class="form-group">
                                    <textarea v-model="description" class="form-control" type="text" placeholder="Entrez la description de l'évènement..."/>
                                </div>
                                <div class="form-group">
                                    <input v-model="address" class="form-control" type="text" placeholder="Entrez l'adresse de l'évènement..."/>
                                </div>
                                <div class="form-group">
                                    <input v-model="date" class="form-control" type="datetime-local" />
                                </div>
                                <div class="form-group">
                                    <input class="form-control" type="file" accept="image/png, image/jpeg" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary">Soumettre l'évènement</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name : "",
                description : "",
                address : "",
                date : "",
            }
        },
        method: {
            ...mapActions([
                'addEvent'
            ]),
            addEvent: function() {
                this.$store.dispatch("addEvent", {
                    name: this.name,
                    description: this.description,
                    address: this.address,
                })
            }
        }
    }
</script>
