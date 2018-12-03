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
                        <select class="form-control" v-model="town">
                            <option disabled value="">Choisissez une ville...</option>
                            <option v-for="town in towns" v-bind:value="town._id" v-bind:key="town._id">
                                {{ town.name }}
                            </option>
                        </select>
                    </div>
                </form>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button @click="$store.dispatch('sendDemand', {name, mail, phone, twa, address, description})" type="button" class="btn pmc-bg-primary" data-dismiss="modal">Envoyer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    data: () => {
        return {
            name : "",
            mail : "",
            phone : "",
            tva : "",
            address : "",
            description : "",
            town : "",
            towns : [
                {"_id":"5bd633f29860092f078b70ec","name":"Liège", "__v":0},
                {"_id":"5bd633f29860092f078b70ed","name":"Vervier", "__v":0},
                {"_id":"5bd633f29860092f078b70ee","name":"Seraing", "__v":0},
                {"_id":"5bd633f29860092f078b70ef","name":"Bruxelles", "__v":0},
                {"_id":"5bd633f29860092f078b70eg","name":"Anvers", "__v":0},
                {"_id":"5bd633f29860092f078b70eh","name":"Turnoit", "__v":0},
            ]
        }
    },
    methods: {
        ...mapActions([
            'sendDemand'
        ]),
    }
}
</script>
