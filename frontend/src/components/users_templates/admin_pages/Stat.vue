<template>
    <div class="stat">
        <div class="stat-icon">
            <i class="material-icons" :style="style">{{icon}}</i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{title}}</span>
            <span class="stat-value">{{value}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Stats',
    props: ['title', 'value', 'icon', 'color'],
    computed: {
        style(){
            return "color: " + (this.color || "#000")
        }
    }
}
</script>
<style lang="css">
    .stat {
        display: flex;
        flex: 1;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #3D5AFE;
        padding: 20px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }
    .stat-icon {
        display: flex;
        align-items: center;
    }

    .stat-icon i{
        font-size: 5rem;
    }
    .stat-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .stat-title {
        font-size: 1.2rem;
        color: #fff;
    }

    .stat-value {
        font-size: 3rem;
        color: #fff;
    }

</style>