<template>
    <div>
        <div class="modal fade" id="QRCode" tabIndex="-1" role="dialog" aria-labelledby="QRCodeLabel" aria-hidden="true">
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
                        <div id="qrcode">
                            
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                        <button type="button" class="btn btn-primary">Ajouter le deal</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : [
            "data"
        ],
        data(){
            return {
                name : this.data.name,
                qrcode : this.data.qrcode
            }
        }
    }
</script>
