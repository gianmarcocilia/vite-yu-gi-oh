<script>
import {store} from "../store";
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
<div>
    <select name="mySelect" @change="$emit('selectedValue')" v-model="store.searchText">
    <option :value="value1">{{ value1 }}</option>
    <option :value="value2">{{value2}}</option>
    <option :value="value3">{{ value3 }}</option>
    </select>
</div>
</template>

<style lang="scss" scoped>
div {
    padding: 1rem 0;
    width: 80%;
    margin: 0 auto;
}
</style>