<script>

export default {
    name: "Home",
    data: () => ({
        email: "",
        password: ""
    }),
    computed: {
        fetchPartner: function(partner){ return this.store.fetchPartner(partner)}
    }
}
</script>

<template>
    <div class="mx-auto my-5 bg-white p-5 rounded w-50 shadow">
        <h1>Porte Monnaie Citoyen</h1>
        <form @submit.prevent="fetchPartner({email: email, password: password})">
            <div class="form-group">
                <input type="text" name="email" class="form-control" placeholder="Entrez votre email..." v-model="email"/>
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="Entrez votre mot de passe..." v-model="password"/>
            </div>
            <div class="form-group">
                <input type="submit" value="Se connecter" class="btn pmc-bg-primary w-100"/>
            </div>
        </form>
    </div>
</template>
