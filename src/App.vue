<script>
import axios from 'axios';
import {store} from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
    data() {
        return {
            store
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((resp) => {
            this.store.cards = resp.data.data;
            
        })
    },
    components: {AppHeader, AppMain},
}

</script>

<template>
    <AppHeader />
    <AppMain />
  
</template>

<style lang="scss">
@use './style/general.scss';

</style>
