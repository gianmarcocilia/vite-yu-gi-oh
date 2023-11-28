<script>
export default {
    props: {
        text: String,
    }
}
</script>

<template>
    <div>
        <button @click="$emit('buttonClicked')">{{text}}</button>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 1rem 0;

    button {
        padding: .5rem .2rem;
    }
}
</style>