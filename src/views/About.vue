<template>
  <div>
    <div>
      <div class="bg">
        <center>
      
        </center>
      </div>
      <div>
        <div class="bg2">
          <center>
           
          </center>
        </div>
      </div>
    </div>
    <div class="bg3">
     
    </div>
    <div>
      <center>
        <footer class="footer">
          <div>
            © 2021 All rights reserved. Made with ❤ by
            <a
              href="https://github.com/ThealoqJS"
              rel="noreferrer"
              target="_blank"
              >Thealoq</a
            >
            using
            <a
              href="https://vuejs.org"
              rel="noreferrer"
              target="_blank"
              class=""
              >VueJs</a
            >
          </div>
        </footer>
      </center>
    </div>
  </div>
</template>


<script>
export default {
  created() {
      this.$toaster.success('Projenin Açık Kaynak Olduğunu Biliyormusun?.', {
         position: "bottom-right",
         onClick() {
          window.location.href = "http://localhost:8080"
        }
      })
  }
}
</script>

<style>
.about h1{
  color: black;
}
</style>