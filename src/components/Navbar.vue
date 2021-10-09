<template>
  <nav>
    <div class="app">
      <a href="/"> Thealoq<b>.com</b> </a>
    </div>
    <div class="texts">
      <a v-for="item in items" :key="item.name" :href="item.href">
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>
