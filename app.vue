<template>
  <div>
    <div>
      <input v-model="name.last"><input v-model="name.first">
    </div>
    <div>名前：{{ fullName }}</div>
    <button @click.prevent="doGreet">あいさつ</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
  setup() {
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

    return {
      name,
      fullName,
      doGreet
    }
  },
})
</script>
