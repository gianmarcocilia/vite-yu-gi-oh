<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
<div>
    <p>Carte trovate: {{ store.cards.length }}</p>
</div>
</template>

<style lang="scss" scoped>
div {
    width: 100%;
    background-color: black;
    padding: 1rem 0.5rem;
    p {
        color: white;
    }
}
</style>