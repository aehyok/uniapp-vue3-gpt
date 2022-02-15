<script lang="ts" setup>
  import useRouter from '@utils/router'

  const router = useRouter()
  router.location('/pages/webview/index')
</script>

<style lang="scss">
  .index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
