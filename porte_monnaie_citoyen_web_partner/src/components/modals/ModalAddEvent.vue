<template>
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
                            <form class="modal-body d-flex flex-column" @submit="{}">
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
                                <div class="form-group">
                                    <select class="form-control" v-model="selectedTown">
                                        <option disabled value="">Choisissez une ville...</option>
                                        <option v-for="t in town.towns" v-bind:value="t._id" v-bind:key="t._id">
                                            {{ t.name }}
                                        </option>
                                    </select>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn pmc-bg-primary" data-dismiss="modal" v-on:click='addEvent()'>Soumettre l'évènement</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    created: function(){
        this.$store.dispatch('fetchAllTowns');
    },
    data:() => {
        return {
            name : "",
            description : "",
            address : "",
            date : "",
            selectedTown: ""
        }
    },
    computed: {
        ...mapState([
            'partner',
            'town'
        ])
    },
    methods: {
        ...mapActions([
            'addEvent',
            'fetchAllTowns'
        ]),
        addEvent: function() {
            this.$store.dispatch("addEvent", {
                name: this.name,
                description: this.description,
                address: this.address,
                date: this.date,
                partner: this.partner.partner,
                town: this.selectedTown,
            })
        }
    }
}
</script>
