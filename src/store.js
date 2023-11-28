import {reactive} from 'vue';
export const store = reactive({
    cards: [],
    loading: false,
    searchText: "",
    random: [],
    randomView: false
});