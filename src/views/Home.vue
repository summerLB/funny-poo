<template>
    <div class="home">
        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <router-link to="/home">home</router-link>
                    </li>
                    <li>
                        <router-link to="/uikit">uikit</router-link>
                    </li>
                    <li>
                        <router-link to="/map">map</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view class="main"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        components: {

        }
    };
</script>
<style scoped>
    .home {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1;
    }
</style>