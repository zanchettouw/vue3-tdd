<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: 'Greeting',
  setup() {
    const greeting = 'Vue and TDD';

    return {
      greeting
    }
  }
}
</script>
