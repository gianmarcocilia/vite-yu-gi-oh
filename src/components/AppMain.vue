<script>
import { store } from "../store";
import Card from './Card.vue';
import CardsStats from "./CardsStats.vue";
import AppLoader from './AppLoader.vue';

export default {
    data() {
        return {
            store,
        }
    },
    components: { Card, CardsStats, AppLoader }
}
</script>

<template>
    <main>
        <div class="container">
            <CardsStats />
            <AppLoader v-if="store.loading"/>
            <div class="row" v-else>
                <div class="col" v-for="card in store.cards" :key="card.id">
                    <Card :card="card" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding: 1rem 0;
    .container {
        width: 80%;
        margin: 0 auto;
        background-color: white;
        padding: 1.5rem;

        .row {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;

            .col {
                width: calc((100% / 5) - (4rem / 5));
                background-color: orange;
            }
        }
    }
}
</style>