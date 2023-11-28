<script>
import { store } from "../store";
export default {
    props: {
        value1: String,
        value2: String,
        value3: String
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
        <option :value="value1">{{ value1 }}</option>
        <option :value="value2">{{ value2 }}</option>
        <option :value="value3">{{ value3 }}</option>
    </select>
</template>

<style lang="scss" scoped>
select {
    padding: .5rem .2rem;
}
</style>