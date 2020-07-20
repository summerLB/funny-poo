<template>
    <div class="map">
        <Lmap></Lmap>
    </div>
</template>
<script>
    import Lmap from '../components/leaflet';
    export default {
        components: {
            Lmap
        }
    };
</script>
<style>
    .map {
        height: calc(100% - 80px);
    }
</style>