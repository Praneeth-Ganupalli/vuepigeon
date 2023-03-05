<template>
    <header class="bg-info category-title">
        <div class="p-4">{{ title }}</div>
    </header>
    <template v-if="title==='Inbox'">
            <button class="btn-sm btn-block btn  mb-0 mt-3 mx-3" @click="refreshInbox">
            <i class="uil uil-sync me-1"></i>
            Refresh
        </button>
    </template>
    <template v-if="!showFullContent">
        <section class="user-mails-section table-responsive">
        <table class=" table table-hover">
            <tbody>
                <tr v-for="message in messages" :key="message" :id="message.id" :class="`cursor-pointer ${message.type==='incoming' && !message.isRead?'unread':'read'}`" @click="viewFullMail(message)">
                    <MailListItem :item="message" />
                </tr>
            </tbody>
        </table>
    </section>
    </template>
    <template v-else>
        <MailitemContent :item="currentMail" @back-action="resetMailContent" />
    </template>
    
</template>
<script lang="js">
import Messages from "../assets/messages.js"
import MailListItem from "./MailListItem.vue"
import RandomMessages from "../assets/random-messages.js"
import MailitemContent from "./MailitemContent.vue"
export default {
    name: "MailMainContent",
    components: {
        MailListItem,
        MailitemContent
    },
    data(){
        return {
            prevTitle:"",
            currentMail:null
        }
    },
    computed: {
        messages() {
            return this.$store.state.displayedMessages;
        },
        title() {
            return this.$store.state.appTitle;
        },
        showFullContent(){
            return this.$store.state.showFullContent;
        }
    },
    methods:{
        refreshInbox(){
            const existingMessages= this.$store.state.messages;
            const randomMessages=JSON.parse(JSON.stringify(RandomMessages));
            let newMessages=[...randomMessages,...existingMessages];
            this.$store.commit("setMessages", newMessages);
            this.$store.commit("setInboxMessages");
        },
        viewFullMail(item){
            this.prevTitle=this.title;
            this.currentMail=item;
            this.$store.commit("setAppTitle",item.subject);
            this.$store.commit("setMessageReadInfo",{
                id:item.id,
                value:true
            });
            this.$store.commit("setShowFullContent",true);
        },
        resetMailContent(){
            this.$store.commit("setAppTitle",this.prevTitle);
            this.$store.commit("setShowFullContent",false);
            this.currentMail=null;
        }

    },
    mounted() {
        this.$store.commit("setMessages", Messages);
        this.$store.commit("setInboxMessages");
    }
}
</script>
<style scoped>
header.category-title {
    height: 80px;
    color: #fff;
    font-weight: bolder;
}

section.user-mails-section {
    padding-left: 2rem;
    padding-top: 1rem;
}
tr.unread
{
    background:gainsboro;
}
table tr td {
    padding: 12px;
}
</style>