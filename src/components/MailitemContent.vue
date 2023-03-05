<template>
    <section class="main-full-content ps-3 pt-3">
        <section class="actions--btn__container mb-2">
            <button class="btn btn-sm btn-primary" @click="backBtnClickHandler">Back</button>
            <button class="btn btn-sm btn-danger" v-if="!item.isDeleted"  @click="deleteBtnClickHandler">Delete</button>
            <button class="btn btn-sm btn-danger disabled" v-if="item.isDeleted">Deleted</button>
            <button class="btn btn-sm btn-secondary" v-if="!item.isRead" @click="readInfoClickHandler">
                Mark as read
            </button>
            <button class="btn btn-sm btn-secondary" v-if="item.isRead" @click="readInfoClickHandler">
                Mark as unread
            </button>
        </section>
        <section class="mail-info">
            <div class="fw-bold">Date: {{ item.date }}</div>
            <div class="fw-bold mt-2">From: {{ item.from.name }}{{ `<${item.from.email}>` }}</div>
            <hr class="hr" />
        </section>
        <section class="body_content" v-html="item.content"></section>
    </section>
</template>
<script>
export default {
    name: "MailitemContent",
    props: {
        item: Object
    },
    methods:{
        backBtnClickHandler(){
            this.$emit("back-action");
        },
        deleteBtnClickHandler(){
            this.$store.commit("setDeletedMail",this.item.id);
        },
        readInfoClickHandler(){
            this.$store.commit("setMessageReadInfo",{
                id:this.item.id,
                value:!this.item.isRead
            });
        }
    }
}
</script>

<style>
section.actions--btn__container
{
    display: flex;
    gap: 1rem;
}
</style>