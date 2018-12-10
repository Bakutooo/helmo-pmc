<script>
import { mapState } from "vuex";
import Connection from './Connection.vue';
import Dashboard from './../Dashboard.vue';

export default {
    name: "Home",
    components: {Connection, Dashboard},
    computed: {
        ...mapState([
            'partner'
        ])
    }
}
</script>

<template>
    <div>
        <connection v-if="partner.partner === null"/>
        <dashboard v-if="partner.partner !== null"/>
    </div>
</template>
