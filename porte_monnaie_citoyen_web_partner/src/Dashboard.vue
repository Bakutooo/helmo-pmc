<template>
    <div class="d-flex flex-column">
        <div class="w-100 d-flex flex-row justify-content-between">
            <h4 class="mt-3 ml-3">Évènements :</h4>
            <div class="d-flex flex-row">
                <button class="btn btn-primary mx-5">Ajouter un évènement</button>
                <p class="mr-3">Trier par </p>
                <select>
                    <option value="Date">Date</option>
                    <option value="Nom">Nom</option>
                </select>
            </div>
        </div>
        <div class="w-100 p-3 d-flex flex-row flex-wrap">
            <div v-for="event in events" :key="event._id" class="">
                <Event v-bind:data="event"/>
            </div>
        </div>
    </div>
</template>

<script>
import Event from './components/Event.vue'
    export default{
        components : {
            Event
        },
        data() {
            return {
                events : [
                    {"_id":"5bd48cfda8425d12fc7867ca","name":"Le salon du fromage","description":"La participation consiste à nous aider à mettre en place les stands, ranger après la journée, nettoyer et démonter les stands et les ranger à la fin du salon. Je me trouverai à l'entrée du hall des foires vers 08h00, sinon vous me trouverez à l'intérieur si nous avons déjà commencé. Nous accepterons que 10 personnes maximum.","address":"Avenue Maurice Denis 4","gain":420,"date":"2018-10-27T16:06:21.374Z","image":"fromage.png", "state":"A"},
                    {"_id":"5bd7558726dcf850fa82c5dc","name":"Fête des évènements","description":"Même les évènements ont droit à leurs évènements","address":"Avenue Maurice Denis 4","gain":1000,"date":"2018-10-29T18:46:31.955Z","image":"event.png","state":"W"}
                ]
            }
        }
    }
</script>