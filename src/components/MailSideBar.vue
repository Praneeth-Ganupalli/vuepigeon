<template>
    <section class="user-info-section">
        <UserInfo />
    </section>
    <section class="mail-action__section">
        <section class="compose-mail-section p-3">
            <button class="btn btn-block w-100 btn-compose text-white"  @click="openModal">Compose</button>
        </section>
        <section class="mail-category-section">
            <CategoryItem label="Inbox" usage="inbox" :count="ibCount" labelType="dark" @update-category="inbox" />
            <CategoryItem label="Sent" usage="envelope-upload" :count="outgoingCount" labelType="secondary" @update-category="sent"  />
            <CategoryItem label="Important" usage="bookmark" :count="importantMsgCount" labelType="warning" @update-category="important" />
            <CategoryItem label="Trash" usage="trash" :count="trashCount" labelType="danger" @update-category="trash" />
        </section>
    </section>
   <Teleport to="#my-modal" v-if="showComposeModal">
        <NewMail @close="closeModal" />
   </Teleport>
</template>
<script>
import UserInfo from './UserInfo.vue';
import CategoryItem from "./CategoryItem.vue"
import NewMail from './NewMail.vue';
import { mapMutations,mapGetters } from 'vuex'
export default {
    name:"MailSideBar",
    components:{
        UserInfo,
        CategoryItem,
        NewMail
    },
    data(){
        return{
            showComposeModal:false
        }
    },
    computed:{
        ...mapGetters({
            ibCount:"inboxCount",
            trashCount:"trashMessagesCount",
            outgoingCount:"outgoingMessagesCount",
            importantMsgCount:"importantMessageCount"
        })
    },
    methods:{
        ...mapMutations({
            inbox:"setInboxMessages",
            important:"setImportantMessages",
            trash:"setDeletedmessages",
            sent:"setOutGoingMessages"
        }),
        openModal()
        {
            this.showComposeModal=true;
        },
        closeModal()
        {
            this.showComposeModal=false;
        }
    }

}
</script>
<style>
.cursor-pointer
{
    cursor: pointer;
}
section.mail-category-section
{
    min-height: 50vh;
}
section.mail-action__section {
    background-color: var(--bs-gray-300);
}

button.btn.btn-compose,
button.btn.btn-compose:hover {
    background-color:darkred;
}

article.user-mail-category:hover,article.user-mail-category.active
{
    background-color: var(--bs-gray-500);
}
article i
{
    position: relative;
    bottom: 2px;
}
section.user-info-section
{
    height: 80px;
}
</style>