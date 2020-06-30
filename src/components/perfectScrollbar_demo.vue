<template>
    <ul v-scrollBar style="position:relative;height:500px;width:100px">
      <li v-for="item in 100" :key="item">{{item}}</li>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>