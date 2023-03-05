<template>
    <td>
        <input type="checkbox" class="form-check" />
    </td>
    <td class="cursor-pointer" @click.stop="toggleImportantMark">
        <i class="uil uil-star text-warning" v-if="!item.isImportant"></i>
        <img src="../assets/star.svg" height="16" width="16" v-else/>
    </td>
    <td>
        {{ item.from?.name }}
    </td>
    <td class="item-subject">
        {{ item.subject }}
    </td>
    <td class="fw-bold item-time">
        {{ getFormattedTime(item.date) }}
    </td>
</template>
<script lang="js">
import moment from 'moment';
export default {
    name: "MailListItem",
    props: {
        item: {
            type: Object,
            default() {
                return {
                    subject: ""
                }
            }
        }
    },
    methods:{
        toggleImportantMark(){
            this.$store.commit("toggleImportantMark",this.item)
        },
        getFormattedTime(date)
        {
            return moment(date).fromNow();
        }
    }
}
</script>
<style scoped>
@media screen and (max-width: 768px) {
    td.item-subject{
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    td.item-time
    {
        display: none;
    }
}
</style>