<template>
    <div class="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="signupLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="signupLabel">
                        <b>Demander un partenariat</b>
                    </h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form class="modal-body d-flex flex-column">
                    <div class="form-group">
                        <input v-model="name" class="form-control" type="text" placeholder="Entrez le nom de votre société..."/>
                    </div>
                    <div class="form-group">
                        <input v-model="mail" class="form-control" type="text" placeholder="Entrez l'email de votre société..."/>
                    </div>
                    <div class="form-group">
                        <input v-model="phone" class="form-control" type="tel" placeholder="Entrez le numéro de téléphone de votre société..." />
                    </div>
                    
                    <div class="form-group">
                        <input v-model="tva" class="form-control" type="text" placeholder="Entrez votre numéro de TVA..."/>
                    </div>
                    <div class="form-group">
                        <input v-model="address" class="form-control" type="text" placeholder="Entrez l'adresse de votre société..."/>
                    </div>
                    <div class="form-group">
                        <textarea v-model="description" class="form-control" type="text" placeholder="Décrivez votre société et ses activités..."/>
                    </div>
                    <div class="form-group">
                        <select class="form-control" v-model="townSelected">
                            <option disabled value="">Choisissez une ville...</option>
                            <option v-for="t in town.towns" v-bind:value="t._id" v-bind:key="t._id">
                                {{ t.name }}
                            </option>
                        </select>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button v-on:click="sendDemand()" type="button" class="btn pmc-bg-primary" data-dismiss="modal">Envoyer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>/* eslint-disable no-console */
import { mapActions, mapState } from "vuex";

export default {
    created: function(){
        this.$store.dispatch("fetchAllTowns");
    },
    data: () => {
        return {
            name : "",
            mail : "",
            phone : "",
            tva : "",
            address : "",
            description : "",
            townSelected : "",
        }
    },
    computed: {
        ...mapState([
            'town'
        ]),
    },
    methods: {
        ...mapActions([
            'sendDemand',
            'fetchAllTowns'
        ]),
        sendDemand: function(){
            this.$store.dispatch('sendDemand', {
                name: this.name, 
                mail : this.mail,
                phone : this.phone,
                tva : this.tva,
                address : this.address,
                description : this.description,
                town: this.townSelected
            })
        }
    } 
}
</script>
