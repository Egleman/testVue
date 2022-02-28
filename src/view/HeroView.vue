<template>
    <div class="wrapper mt-5">
    <div class="container">
        <div class="grid d-flex justify-content-between flex-wrap">
            <router-link v-for="poste in posts" :key="poste.id" style="text-decoration: none" :to='getterId(poste.id)'>
                <post :title="poste.title"
                :img="poste.img"
                :description="poste.description"
                :id="poste.id"
                @getId="getterId"
                />
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
    components: {
        Post
    },
    computed: {
        posts() {
            return this.$store.getters["getInfo"];
        },
    },
    methods: {
        getterId(id) {
        //console.log(id);
        //return this.$router.push({name: 'fullPage', params: {id: id}})
        return `/single/${id}`
        }
    }
    
}
</script>
