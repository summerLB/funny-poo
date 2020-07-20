<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item of 10" :key="item" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'CityAlphabet',
        data() {
            return {
                touchStatus: false,
                startY: 0,
                timer: null
            };
        },
        methods: {
            handleLetterClick() {
                console.log('handleLetterClick');
            },
            handleTouchStart() {
                this.touchStatus = true;
                console.log('handleTouchStart');
            },
            handleTouchMove() {
                if (this.touchStatus) {
                    if (this.timer) {
                        clearTimeout(this.timer);
                    }
                    this.timer = setTimeout(() => {
                        console.log('handleTouchMove');
                    }, 16);
                }
            },
            handleTouchEnd() {
                console.log('handleTouchEnd');
                this.touchStatus = false;
            }
        }
    };
</script>

<style lang="stylus" scoped></style>