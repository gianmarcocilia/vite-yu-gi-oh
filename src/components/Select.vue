<script>
import { store } from "../store";
export default {
    props: {
        values: Array,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <select name="mySelect" @change="$emit('selectedValue')" v-model="store.searchText">
        <option value="">Nessun filtro</option>
        <option v-for="value in values" :value="value">{{ value }}</option>
    </select>
</template>

<style lang="scss" scoped>
select {
    padding: .5rem .2rem;
}
</style>