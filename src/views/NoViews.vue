<template>
  <div
    style="background-color: #282a36"
    class="
      my-20
      justify-center
      flex-col-revelse flex
      container
      mx-auto
      h-32
      py-6
      rounded-lg
    "
  >
    <h1 class="my-4 text-center text-2xl">
      Sayfa Bulunamadı!<br />5 saniye içinde ana sayfaya yonlediriliyorsunuz!
    </h1>
  </div>
</template>

<style>
body {
  @apply bg-gray-900;
}
</style>

<script>
export default {
  created() {
    setTimeout(() => {
      window.location.href = "http://localhost:8080";
    }, 5000);
  },
};
</script>
