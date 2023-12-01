<script>
import { store } from "../store";
export default {
    data() {
        return {
            store,
            flags: ["en", "it"],
        };
    },
    methods: {
        getImgPath(lang) {
            return new URL(`../assets/img/${lang}-flag.png`, import.meta.url).href;
        },
        hasFlag(media) {
            return this.flags.includes(media.original_language);
        },
    },
    computed: {

    }
}
</script>

<template>
    <p v-if="store.loading">Cerco...</p>
    <div v-else>
        <!-- Lista film -->
        <div v-for="movie in store.movies" :key="movie.id">
            <h4>{{ movie.title }}</h4>
            <p>{{ movie.original_title }}</p>
            <img class="lang" v-if="hasFlag(movie)" :src="getImgPath(movie.original_language)" alt="">
            <p v-else>{{ movie.original_language }}</p>
            <p>{{ movie.vote_average }}</p>
        </div>
        <!-- /Lista film -->
        <!-- Lista serie TV -->
        <div v-for="tvShow in store.tvShows" :key="tvShow.id">
            <h4>{{ tvShow.name }}</h4>
            <p>{{ tvShow.original_name }}</p>
            <img class="lang" v-if="hasFlag(tvShow)" :src="getImgPath(tvShow.original_language)" alt="">
            <p v-else>{{ tvShow.original_language }}</p>
            <p>{{ tvShow.vote_average }}</p>
        </div>
        <!-- /Lista serie TV -->
    </div>
</template>

<style lang="scss" scoped>
img.lang {
    max-width: 80px;
}

hr {
    margin: 50px 0;
}
</style>