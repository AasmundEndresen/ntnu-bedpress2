<template>
  <ul class="policy-list">
    <policy-card
      v-for="(policy) in policies"
      :key="policy.id"
      class="policy-card"
      :policy="policy"
      @click="handleDeselect"
    />
  </ul>  
</template>

<script setup>
import PolicyCard from './PolicyCard.vue'
const props = defineProps({
  policies: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['deselect'])
function handleDeselect(e) {
  emit('deselect', e)
}
</script>

<style scoped>
  .policy-list .policy-card:not(:first-of-type)  {
    border-top: 3px solid rgba(73, 25, 204, 0.05);
  }
</style>