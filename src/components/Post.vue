<template>
        <div class="item-wrapper d-flex flex-column mb-4" @click="onEmit(id)">
            <img :src="require(`@/assets/img/${img}`)" class="mb-3" alt="">
            <h3 class="">{{title}}</h3>
            <div class="description">
                 {{checkStr()}}
            </div>
            <span v-if="span"><strong>Читать далее...</strong></span>
        </div>
</template>

<script>
export default {
    props: ["title", "description", "img", "id"],
    data() {
        return {
            span: false
        }
    },
    methods: {
        checkStr() {
            if (this.description.length > 400) {
                this.span = true;
                return this.description.substr(0, 400);
            } else {
                this.span = false
                return this.description;
            }
        },
        onEmit(id) {
            this.$emit('getId', id)
        }
    }

} 
</script>

<style scoped>
* {
    text-decoration: none;
    color: black;
}
</style>
