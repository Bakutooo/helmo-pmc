<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top pmc-bg-primary">
        <router-link to="/dashboard"><div class="navbar-brand">Tableau de bord</div></router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto">
                <router-link to="/dashboard"><div class="nav-link">Accueil</div></router-link>                
                <router-link to="#"><div class="nav-link">Évènements</div></router-link>
                <router-link to="#"><div class="nav-link">Deals</div></router-link>
            </div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control rounded-0 pmc-search" type="search" placeholder="Rechercher..." aria-label="Search"/>
                <button class="btn rounded-0 pmc-bg-primary border border-white" type="submit">Rechercher</button>
            </form>
            <div class="navbar-nav">
                <a v-on:click="deconnection()" class="nav-link">Se déconnecter</a>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions([
            'deconnection'
        ]),
        deconnection: function() {
            this.$store.dispatch('deconnection');
        }
    }
}
</script>
