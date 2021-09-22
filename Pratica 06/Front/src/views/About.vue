<template>
  ABOUT
  {{ $route.params.text }}
  {{ $route.query.ok }}
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style></style>
