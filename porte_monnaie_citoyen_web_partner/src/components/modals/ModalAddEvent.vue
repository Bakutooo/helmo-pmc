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
                                <div class="form-group d-flex flex-row">
                                    <!-- <input v-model="date" class="form-control" type="datetime-local" /> -->
                                    <input v-model="day" class="form-control w-25" type="number" :max="maxDays" min="1" placeholder="Jour">
                                    <select v-model="month" class="form-control w-50" @change="changeMaxDays()">
                                        <option disabled value="">Mois</option>
                                        <option value="01">Janvier</option>
                                        <option value="02">Février</option>
                                        <option value="03">Mars</option>
                                        <option value="04">Avril</option>
                                        <option value="05">Mai</option>
                                        <option value="06">Juin</option>
                                        <option value="07">Juillet</option>
                                        <option value="08">Août</option>
                                        <option value="09">Septembre</option>
                                        <option value="10">Octobre</option>
                                        <option value="11">Novembre</option>
                                        <option value="12">Décembre</option>
                                    </select>
                                    <input v-model="year" class="form-control w-25" type="number" placeholder="Année">
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
            // date : "",
            selectedTown: "",
            day : "",
            month : "",
            year : "",
            maxDays : "31"
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
                date: new Date(this.year, this.month - 1, this.day),
                partner: this.partner.partner,
                town: this.selectedTown,
            })
        },
        changeMaxDays: function() {
            let month = this.month;
            if(month === '1' | month === '3' | month === '5' | month === '7' | month === '8' | month === '10' | month === '12') {
                this.maxDays = 31;
            } else if(month === '4' | month === '6' | month === '9' | month === '11') {
                this.maxDays = 30;
            } else {
                this.maxDays = (this.year - 2016) % 4 === 0 ? 29 : 28;
            }
        }
    }
}
</script>
