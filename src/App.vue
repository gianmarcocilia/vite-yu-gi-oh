<script>
import axios from 'axios';
import { store } from './store.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import Select from './components/Select.vue';
import Button from './components/Button.vue';
import Random from './components/Random.vue';

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
    components: { AppHeader, AppMain, Select, Button, Random },
    methods: {
        onChange() {
            console.log(this.store.searchText);
            this.store.randomView = false;
            this.store.loading = true;
            if (this.store.searchText) {
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0', {
                    params: {
                        archetype: this.store.searchText,
                    },
                }).then((resp) => {
                    this.store.cards = resp.data.data;
                    this.store.loading = false;
                })
            } else {
                this.store.loading = true;
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0').then((resp) => {
                    this.store.cards = resp.data.data;
                    this.store.loading = false;
                })
            }
        },
        randomCard() {
            this.store.randomView = true;
            this.store.loading = true;
        axios.get('https://db.ygoprodeck.com/api/v7/randomcard.php').then((resp) => {
            this.store.random = resp.data;
            this.store.loading = false;
            console.log(this.store.random);
        })
        },
        deleteRandom() {
            this.store.randomView = false;
        }
    }
}

</script>

<template>
    <AppHeader />
    <div class="container">
        <div class="row">
            <Select value1="Alien" value2="Ally of Justice" value3="Ancient Gear" @selectedValue="onChange()" />
            <Button @buttonClicked="randomCard()" text="Carta casuale" />
            <Button @buttonClicked="deleteRandom()" text="Rimuovi carta casuale" v-show="store.randomView"/>
        </div>
    </div>
    <Random v-if="store.randomView"/>
    <AppMain v-else/>
</template>

<style lang="scss">
@use './style/general.scss';
</style>
