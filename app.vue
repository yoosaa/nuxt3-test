<template>
  <NuxtPage/>
  <div>
    <input v-model="name.last"><input v-model="name.first">
  </div>
  <div>名前：{{ fullName }}</div>
  <button @click.prevent="doGreet">あいさつ</button>
</template>

<script setup lang="ts">
const name = reactive({
  first: '太郎',
  last: '山田'
})

const fullName = computed(() => {
  return `${name.last} ${name.first}`
})

const doGreet = () => {
  console.log(`こんにちは、${fullName.value}さん`)
}
</script>
