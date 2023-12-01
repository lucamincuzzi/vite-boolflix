<script>
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';
import axios from 'axios';

export default {
    data() {
        return {
            store
        }
    },
    components: { AppHeader, AppContent },
    methods: {
        handleSearch: function () {
            this.store.loading = true
            const params = {
                api_key: this.store.apiToken,
                query: this.store.searchText,
            }
            //Chiamata per film
            axios
            .get(`${this.store.baseApiUrl}/search/movie`, { params })
            .then((resp) => {
                this.store.movies = resp.data.results;
                this.store.loading = false;
                console.log("Array film:", this.store.movies);
            });
            //Chiamata per serie TV
            axios
            .get(`${this.store.baseApiUrl}/search/tv`, { params })
            .then((resp) => {
                this.store.tvShows = resp.data.results;
                this.store.loading = false;
                console.log("Array serie TV:", this.store.tvShows);
            })
        }
    }
}

</script>

<template>
    <AppHeader @searchContents="handleSearch"/>
    <AppContent />
</template>

<style lang="scss">
@use "./style/general.scss";
</style>
