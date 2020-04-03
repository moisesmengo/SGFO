<template>
    <div class="loading">
        <div class="text-center">
            <v-progress-circular
            indeterminate
            color="blue"
        ></v-progress-circular>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Loading'
}
</script>
<style lang="css">
    .loading{
        grid-area: content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>