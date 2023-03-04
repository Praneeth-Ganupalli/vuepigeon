<template>
    <div class="modal mail-modal  d-block" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" >
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                    <button @click="closeModal" type="button" class="close bg-dark text-white" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit="composeMail">
                        <div class="form-group">
                            <label for="recipient-name" class="col-form-label">Recipient</label>
                            <input type="email" class="form-control" v-model="receiver" id="recipient-name">
                        </div>
                        <div class="form-group">
                            <label for="subject" class="col-form-label">Subject</label>
                            <input type="text" class="form-control" id="subject" v-model="subject">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Message:</label>
                            <textarea class="form-control" id="message-text" v-model="body"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closeModal">Close</button>
                    <button type="button" @click="composeMail" class="btn btn-primary">Send message</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name:"NewMail",
    data(){
        return{
            receiver:"",
            subject:"",
            body:''
        }
    },
    methods:{
        closeModal(){
            this.$emit("close")
        },
        composeMail() {
            console.log("caleedd");
            if(!this.receiver||!this.body||!this.subject) return;
            const newMsg = {
                subject: this.subject,
                content: this.body,
                isImportant: false,
                isDeleted: false,
                isRead: false,
                type: 'outgoing',
                date: moment(),
                from: {
                    name: 'John Doe',
                    email: 'johndoe45@gmail.com'
                },
            }
            this.$store.commit("updateSentMail",newMsg)
            this.closeModal();
        }
    }
}
</script>
<style>
.modal.mail-modal {
    background-color: rgba(0, 0, 0, 0.6);
}
</style>