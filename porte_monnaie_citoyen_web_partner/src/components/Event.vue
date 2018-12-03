<template>
    <div>
        <div class="shadow pmc-event mr-1 mt-2 bg-white" data-toggle="modal" data-target="">
            <img alt="placeholder" src="https://via.placeholder.com/250x100"/>
            <div className="px-2">
                <h4>{{name}}</h4>
                <p>Date : {{date}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default{
        props : [
            "data"
        ],        
        data(){
            return{
                name : this.data.name,
                date : new moment(new Date(this.data.date)).format("DD/MM/YYYY")
            }
        }
    }
</script>