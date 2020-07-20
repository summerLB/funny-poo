<template>
    <ul v-scrollBar style="position:relative;height:500px;width:100px">
        <li v-for="item in 100" :key="item">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                aaa: [{
                    hahh: 123
                },
                {
                    hahh: 123,
                    asd: 2323
                }]
            };
        }
    };
</script>

<style>

</style>