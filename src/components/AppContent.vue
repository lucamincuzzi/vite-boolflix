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
        getPosterURL(partialURL) {
            return `https://image.tmdb.org/t/p/w342${partialURL}`;
        },
        getRating(averageRating) {
            return Math.ceil(averageRating / 2);
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
    <main>
        <p v-if="store.loading">Cerco...</p>
        <div v-else>
            <!-- Lista film -->
            <div v-for="movie in store.movies" :key="movie.id">
                <img class="poster" :src="getPosterURL(movie.poster_path)" alt="">
                <h4>{{ movie.title }}</h4>
                <p>{{ movie.original_title }}</p>
                <img class="lang" v-if="hasFlag(movie)" :src="getImgPath(movie.original_language)" alt="">
                <p v-else>{{ movie.original_language }}</p>
                <i v-for="num in 5" class="fa-star"
                    :class="num <= getRating(movie.vote_average) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
            <!-- /Lista film -->
            <!-- Lista serie TV -->
            <div v-for="tvShow in store.tvShows" :key="tvShow.id">
                <img class="poster" :src="getPosterURL(tvShow.poster_path)" alt="">
                <h4>{{ tvShow.name }}</h4>
                <p>{{ tvShow.original_name }}</p>
                <img class="lang" v-if="hasFlag(tvShow)" :src="getImgPath(tvShow.original_language)" alt="">
                <p v-else>{{ tvShow.original_language }}</p>
                <i v-for="num in 5" class="fa-star"
                    :class="num <= getRating(tvShow.vote_average) ? 'fa-solid' : 'fa-regular'"></i>
            </div>
            <!-- /Lista serie TV -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    overflow: scroll;

    img.poster {
        max-width: 150px;
    }

    img.lang {
        max-width: 80px;
    }
}
</style>
