<template>
    <div>
        <div class="modal fade" :id="id" tabIndex="-1" role="dialog" aria-labelledby="QRCodeLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="QRCodeLabel">
                            QR Code pour {{name}}
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div id="qrcode" class="d-flex justify-content-center align-items-center">
                            <qrcode-vue :value="qrcode" :size="450"></qrcode-vue>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import QrcodeVue from 'qrcode.vue';

    export default {
        components : {
            QrcodeVue
        },
        props : [
            "data"
        ],
        data(){
            return {
                id : "QRCode" + this.data._id,
                name : this.data.name,
                qrcode : this.data.password
            }
        }
    }
</script>
