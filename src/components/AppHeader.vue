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
        <label for="search"></label>
        <input v-model="store.searchText" type="text" id="search">
        <button @click="$emit('searchContents')">Cerca</button>
    </header>
</template>

<style scoped></style>