<template>
    <li>
        {{ title }}
        <button v-on:click="$emit('remove')">Remove</button>
    </li>
</template>
<script>
export default {
  name: 'todoItem',
  // template: `
  // <li>
  //     {{ title }}
  //     <button v-on:click="$emit('remove')">Remove</button>
  // </li>
  // `,
  props: ['title']
}
</script>
