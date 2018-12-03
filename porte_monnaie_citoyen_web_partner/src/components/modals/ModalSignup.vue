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
                <div class="modal-body d-flex flex-column">
                    <input v-model="nom" class="form-group" type="text" placeholder="Entrez le nom de votre société..."/>
                    <input v-model="email" class="form-group" type="text" placeholder="Entrez l'email de votre société..."/>
                    <input v-model="phone" class="form-group" type="tel" placeholder="Entrez le numéro de téléphone de votre société..." />
                    <input v-model="tva" class="form-group" type="text" placeholder="Entrez votre numéro de TVA..."/>
                    <input v-model="address" class="form-group" type="text" placeholder="Entrez l'adresse de votre société..."/>
                    <textarea v-model="description" class="form-group" type="text" placeholder="Décrivez votre société et ses activités..."/>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Envoyer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name : "",
            mail : "",
            phone : "",
            tva : "",
            address : "",
            description : ""
        }
    }
}
</script>
