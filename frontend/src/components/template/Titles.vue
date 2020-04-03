<template>
    <div class="page-title">
        <h1>
            <i v-if="icon" class="material-icons title-icon" :class="icon">{{icon}}</i>
            {{ main }}
        </h1>
        <hr class="row-title">
    </div>
</template>
<script>
export default {
    name: 'Title',
    props: ['icon', 'main']
}
</script>
<style lang="css">
    .page-title h1{
        color: rgb(44, 46, 45);
        margin-bottom: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title-icon {
        padding-right: 10px;
        color: rgba(7, 37, 27, 0.795);
    }

    .row-title{
        border: 0;
        width: 100%;
        height: 1px;
        background-image: linear-gradient(to right, 
            rgba(32, 32, 34, 0), 
            rgba(32, 32, 34, 0.75), 
            rgba(32, 32, 34, 0)
            );
    }
</style>