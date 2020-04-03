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
      background: linear-gradient(to right, #9FC3E6, rgb(189, 214, 240));
      color: #0D0D0D;

      display: flex;
      align-items: center;
      justify-content: center;
    }
</style>