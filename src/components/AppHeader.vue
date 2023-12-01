<script>
import { store } from "../store"
export default {
    data() {
        return {
            store
        }
    },
    emits: ["searchContents"],
    methods: {
        searchContents: function () {
            this.$emit("searchContents", this.store.searchText)
        }
    }
}
</script>

<template>
    <header>
        <div class="container d-flex justify-content-between align-items-center">
            <h1>BOOLFLIX</h1>
            <div class="d-flex align-items-center">
                <input v-model="store.searchText" @keyup.enter="$emit('searchContents')" type="text" placeholder="Cerca un film o una serie" id="search" class="me-3">
                <button type="button" class="btn btn-primary btn-sm" @click="$emit('searchContents')">Cerca</button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    height: 100px;
    padding: 20px;
    background-color: black;
    color: red;

    h1 {
        letter-spacing: -2px;
    }

    button {
        background-color: rgba(255, 0, 0, 0.8);
    }
}
</style>