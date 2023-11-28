<script>
import axios from 'axios';
import {store} from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Select from './components/Select.vue';

export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.store.loading = true;
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((resp) => {
            this.store.cards = resp.data.data;
            this.store.loading = false;
        })
    },
    components: {AppHeader, AppMain, Select},
    methods: {
        onChange() {
            this.store.loading = true;
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
            params: {
                archetype: this.store.searchText,
            },
        }).then((resp) => {
            this.store.cards = resp.data.data;
            this.store.loading = false;
        })
        }
    }
}

</script>

<template>
    <AppHeader />
    <Select value1="Alien" value2="Ally of Justice" value3="Ancient Gear" @selectedValue="onChange()"/>
    <AppMain />
  
</template>

<style lang="scss">
@use './style/general.scss';

</style>
