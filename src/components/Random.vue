<script>
import { store } from "../store";
import Card from './Card.vue';
export default {
    data() {
        return {
            store,
        }
    },
    components: {Card,}
}
</script>

<template>
<div class="container">
    <div class="random-row">
        <Card :card="store.random" />
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>