<template>
    <div class="page-title">
        <h2><i v-if="icon" class="material-icons" :class="icon">{{icon}}</i>{{ main }}</h2>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'Title',
    props: ['icon', 'main']
}
</script>
<style lang="css">
    .page-title h2{
        margin: 0px;
    }
</style>