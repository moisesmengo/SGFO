<template>
  <footer class="footer">
    <span>Copyright <strong></strong>© {{ new Date().getFullYear() }} - IFRN</span>
  </footer>
</template>

<script>

export default {
    name: "Footer"
}
</script>
<style lang="css">
    .footer {
      grid-area: footer;
      background-color: #E0F2F1;
      color: #333;

      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>