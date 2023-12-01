<script>
import { store } from "../store"

export default {
    data() {
        return {
            store,
            flags: ["en", "it"],
            onIt: false,
        }
    },
    props: {
        mediaObj: Object
    },
    methods: {
        getImgPath(lang) {
            return new URL(`../assets/img/${lang}-flag.png`, import.meta.url).href;
        },
        getPosterURL(partialURL) {
            return `https://image.tmdb.org/t/p/w342${partialURL}`;
        },
    },
    computed: {
        title() {
            return this.mediaObj.title
                ? this.mediaObj.title
                : this.mediaObj.name
        },
        originalTitle() {
            return this.mediaObj.original_title
                ? this.mediaObj.original_title
                : this.mediaObj.original_name
        },
        hasFlag() {
            return this.flags.includes(this.mediaObj.original_language);
        },
        rating() {
            return Math.ceil(this.mediaObj.vote_average / 2);
        },
    }
}
</script>

<template>
    <div class="card h-100 border-0" @mouseover="onIt = true" @mouseleave="onIt = false">
        <img class="poster w-100 h-100" :src="getPosterURL(mediaObj.poster_path)" alt="">
        <div v-show="onIt" class="media-info">
            <div class="h-100 p-4 d-flex flex-column align-items-center gy-1">
                <h4>{{ title }}</h4>
                <p>{{ originalTitle }}</p>
                <img v-if="hasFlag" class="lang" :src="getImgPath(mediaObj.original_language)" alt="">
                <p v-else>{{ mediaObj.original_language }}</p>
                <div class="mt-1">
                    <i v-for="num in 5" class="fa-star" :class="num <= rating ? 'fa-solid' : 'fa-regular'"></i>
                </div>
                <p>{{ mediaObj.overview }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.card {
    position: relative;
}
.media-info {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 0.9rem;
    overflow-y: auto;
    background-color: white;
    img.lang {
        width: 80px;
    }

    p {
        height: 50px;
        overflow: auto;
    }
}
</style>