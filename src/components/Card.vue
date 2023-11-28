<script>
export default {
  props: {
    card: Object,
  },
  computed: {
    archetype() {
      return this.card.archetype ? this.card.archetype : "Non specificato";
    }
  }
};
</script>

<template>
  <div class="card">
    <img :src="card.card_images[0].image_url" alt="">
    <div>
      <h3>{{ card.name }}</h3>
      <p>{{ archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  text-align: center;
    h3 {
    color: white;
    padding: 1rem 0;
  } 
}
</style>