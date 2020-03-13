<template>
  <footer class="footer">
    <span>Copyright <strong></strong>© {{ new Date().getFullYear() }} - IFRN</span>
  </footer>
</template>

<script>

export default {
    data() {
        return {
           
        }
    },
}
</script>
<style lang="css">
    .footer {
      background-color: #E0E0E0;
      color: #333;

      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>