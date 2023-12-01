<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
    data() {
        return {
            store,
        };
    },
    components: { AppCard }
}
</script>

<template>
    <main>
        <p v-if="store.loading">Cerco...</p>
        <div v-else class="container mt-3">
            <h2>Film</h2>
            <div class="row row-cols-5 gx-3 gy-3">
                <div v-for="movie in store.movies" :key="movie.id" class="col">
                    <AppCard :mediaObj="movie" />
                </div>
            </div>
            <h2 class="mt-3">Serie TV</h2>
            <div class="row row-cols-5 gx-3 gy-3">
                <div v-for="tvShow in store.tvShows" :key="tvShow.id" class="col">
                    <AppCard :mediaObj="tvShow" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    overflow: auto;
    background-color: rgb(75, 75, 75);

    h2 {
        color: red;
    }

    col {
        max-height: 150px;
        height: 100%;
    }
}
</style>
