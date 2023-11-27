<script>
import { store } from "../store";
import Card from './Card.vue';
import CardsStats from "./CardsStats.vue";

export default {
    data() {
        return {
            store,
        }
    },
    components: { Card, CardsStats }
}
</script>

<template>
    <main>
        <div class="container">
            <CardsStats />
            <div class="row">
                <div class="col" v-for="card in store.cards" :key="card.id">
                    <Card :card="card" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: orange;
    padding: 2rem 0;
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