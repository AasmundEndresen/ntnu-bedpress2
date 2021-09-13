<template>
  <li
    class="policy-card"
    :style="`color: ${policy.insuree.color}`"
    @click.prevent="handleClick"
  >
    <span class="id">{{ policy.id }}</span>
    <span class="name">Driver: <span>{{ `${policy.insuree.firstname} ${policy.insuree.lastname}` }}</span></span>
    <span class="team">Team: <span>{{ policy.insuree.team }}</span></span>
    <span class="engine">Engine: <span>{{ policy.insuree.engine }}</span></span>
    <span class="price">Price: <span>{{ policy.price }}</span></span>
  </li>
</template>

<script setup>
const props = defineProps({
  policy: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['click'])
function handleClick(e) {
  emit('click', { target: { value: props.policy } })
}
</script>

<style scoped>
  .policy-card {
    display: flex;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 240px;
    height: 80px;
    position: relative;
    background-color: whitesmoke;
    list-style: none;
    margin: 0;
    transition: all ease-in-out 150ms;
    padding: 0;
  }
  .policy-card:hover {
    opacity: 0.15;
    transition: all ease-in-out 150ms;
  }
  .policy-card:hover::before {
    content: 'Remove';
    position: absolute;
    font-size: 32px;
    right: 16px;
    transition: all ease-in-out 150ms;
    top: 8px;
  }
  .id {
    position: absolute;
    top: 8px;
    left: 8px;
  }
  .name, .team, .engine, .price {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 12px;
    font-weight: 600;
  }
  .name span, .team span, .engine span, .price span {
    font-style: italic;
    font-weight: 400;
  }
  .price {
    color: var(--primary-color);
  }
  .price span::before {
    font-size: 8px;
    content: '(monthly) '
  }
  .price span::after {
    content: ',-'
  }
</style>