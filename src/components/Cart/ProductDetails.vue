<template>
    <ul>
        <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
    </ul>
</template>
<script>
export default {
  name: 'ProductDetails',
  props: {
    details: {
      type: Array,
      required: true
    }
  }
}
</script>
