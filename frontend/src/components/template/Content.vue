<template>
    <div class="content">
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

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

    @keyframes slide-in{
        from {transform: translateY(-30px); opacity: 0;}
        to {transform: translateY(0px); opacity: 1;}
    }
    @keyframes slide-out{
        from {transform: translateY(0px); opacity: 1;}
        to {transform: translateY(-30px); opacity: 0;}
    }
    .slide-enter-active{
        animation: slide-in 0.3s ease
    }
    .slide-leave-active{
        animation: slide-out 0.3s ease;
    }
</style>