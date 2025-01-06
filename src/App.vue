<script>

import {defineComponent} from "vue";
import Navbar from "@/components/navbar.vue";

export default defineComponent({
  components: {Navbar}
})
</script>

<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<style scoped>

</style>
