<script>
import { mapState, mapActions } from "vuex";
import ModalSignup from './modals/ModalSignup.vue'

export default {
    name: "Home",
    components: {ModalSignup},
    data: () => ({
        mail: "",
        password: ""
    }),
    computed: {
        ...mapState([
            'partner'
        ]),
    },
    methods: {
        ...mapActions([
            'fetchPartner'
        ])
    }
}
</script>

<template>
    <div class="mx-auto my-5 bg-white p-5 rounded w-50 shadow">
        <h1>Porte Monnaie Citoyen</h1>
        <form @submit.prevent="$store.dispatch('fetchPartner', {mail, password})">
            <div class="form-group">
                <input type="text" name="email" class="form-control" placeholder="Entrez votre email..." v-model="mail"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Entrez votre mot de passe..." v-model="password"/>
            </div>
            <div class="form-group">
                <input type="submit" value="Se connecter" class="btn pmc-bg-primary w-100"/>
            </div>
            <div class="text-left" data-toggle="modal" data-target="#signup">
                <p class="pmc-color-primary">Demander partenariat</p>
            </div>
        </form>
        <ModalSignup/>
    </div>
</template>
