<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<template>
<div class="card">
    <img :src="card.card_images[0].image_url" alt="">
    <h3>{{card.name}}</h3>
    <p>{{card.type}}</p>
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