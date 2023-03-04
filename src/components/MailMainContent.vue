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
    <section class="user-mails-section table-responsive">
        <table class=" table table-hover">
            <tbody>
                <tr v-for="message in messages" :key="message" :id="message.id">
                    <MailListItem :item="message" />
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="js">
import Messages from "../assets/messages.js"
import MailListItem from "./MailListItem.vue"
import RandomMessages from "../assets/random-messages.js"
export default {
    name: "MailMainContent",
    components: {
        MailListItem
    },
    computed: {
        messages() {
            return this.$store.state.displayedMessages;
        },
        title() {
            return this.$store.state.appTitle;
        }
    },
    methods:{
        refreshInbox(){
            const existingMessages= this.$store.state.messages;
            const randomMessages=JSON.parse(JSON.stringify(RandomMessages));
            let newMessages=[...randomMessages,...existingMessages];
            this.$store.commit("setMessages", newMessages);
            this.$store.commit("setInboxMessages");
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

table tr td {
    padding: 12px;
}
</style>