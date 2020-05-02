<template>
    <div class="content">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import '../../asets/animations/slide.css'
export default {
    name: 'Content',
}
</script>

<style>
    .content {
        grid-area: content;
        background-color: #fff;
        padding: 20px;
    }
</style>