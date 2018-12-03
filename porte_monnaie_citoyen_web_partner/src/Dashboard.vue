<template>
    <div className="row w-100">
        <div className="w-75 p-3 event-demande">
            <h4>Dernières demandes d'évènement :</h4>
            {this.renderEvents()}
        </div>

        <div className="w-25 p-3">
            <h4>Dernières demandes de partenariat :</h4>
            {this.renderPartners()}
        </div>
    </div>
</template>

<script>
    
</script>