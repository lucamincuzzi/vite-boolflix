<script>
import { store } from "../store";
export default {
    data() {
        return {
            store
        };
    },
}
</script>

<template>
    <p v-if="store.loading">Cerco...</p>
    <div v-else v-for="movie in store.movies" :key="movie.id">
        <h4>{{ movie.title }}</h4>
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
    
</style>