<template>
    <div>
        <div class="modal fade" id="AddDeal" tabIndex="-1" role="dialog" aria-labelledby="addDealLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="addDealLabel">
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
                                    <label>Nom</label>
                                    <input v-model="name" class="form-control" type="text" placeholder="Entrez le nom du deal..."/>
                                </div>
                                <div class="form-group">
                                    <label>Points</label>
                                    <input v-model="price" class="form-control" type="number" min="1" placeholder="Entrez le nombre de point à dépenser..."/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="addDeal()">Ajouter le deal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    data(){
        return {
            name : "",
            price : null
        }
    },
    computed: {
        ...mapState([
            'partner'
        ])
    },
    methods: {
        ...mapActions([
            'addDeal'
        ]),
        addDeal: function(){
            this.$store.dispatch('addDeal', {
                name: this.name,
                price: this.price,
                partner: this.partner.partner
            })
        }
    }
}
</script>
