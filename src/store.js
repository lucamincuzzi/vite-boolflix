import { reactive } from 'vue'

export const store = reactive({
    movies: [],
    tvShows: [],
    searchText: "",
    apiToken: "1e94fc85b2fc66825c3fcdf4857cb310",
    baseApiUrl: "https://api.themoviedb.org/3/",
    loading: false,
})