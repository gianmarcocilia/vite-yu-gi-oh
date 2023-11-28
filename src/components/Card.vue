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
      <h4>{{ card.name }}</h4>
      <p>{{ archetype }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  text-align: center;
    h4 {
    color: white;
    padding: 1rem 0;
  } 
}
</style>