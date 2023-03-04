<template>
    <article class="user-mail-category d-flex  align-items-center p-3  cursor-pointer"
    :class="label===appTitle?'active':''" @click="changeCategory">
        <i class="uil text-secondary fs-5" :class="`uil-${usage}`"></i>
        <div class="ms-2">{{ label }}</div>
        <span :class="`badge bg-${labelType} text-white ms-auto me-2`">{{ count }}</span>
    </article>
</template>
<script>
export default {
    name:"CategoryItem",
    props:{
        label:String,
        usage:String,
        count:Number,
        labelType:String
    },
    computed:{
        appTitle(){
            return this.$store.state.appTitle;
        }
    },
    methods:{
        changeCategory()
        {
            this.$store.commit("setAppTitle",this.label);
            this.$emit("update-category");
        }
    }
}
</script>