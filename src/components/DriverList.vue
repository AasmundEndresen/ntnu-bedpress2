<template>
  <div class="driver-list">
    <p
      v-for="(driver, index) in props.drivers"
      :key="index"
      class="driver"
      @click="handleSelect"
    >
      <span class="name">{{ `${driver.firstname} ${driver.lastname}` }}</span>
      <span
        class="team"
        :style="`color: ${driver.color}`"
      >{{ driver.team }}</span>
      <span class="engine">{{ driver.engine }}</span>
      <span class="add-policy">Add policy</span>
    </p>
  </div>
</template>

<script setup>
import { matchDriver } from '../util'
const props = defineProps({
  drivers: {
    type: Array,
    required: true,
  }
})
const emit = defineEmits(['selected'])
function handleSelect(e) {
  console.log(e)
  const name = e.target.firstChild.data
  const driver = props.drivers.find(el => matchDriver(el, name))
  emit('selected', { target: { value: driver }, text: name })
}
</script>

<style scoped>
.driver-list {
  --width: 320px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--primary-color);
  max-height: calc(48px * 5);
  overflow-y: scroll;
}
.driver-list::-webkit-scrollbar {
  width: 6px;
}
.driver-list::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 4px var(--primary-color); 
}
.driver-list::-webkit-scrollbar-track {
    border-radius: 0px 0px 0px 0px;
}
.driver {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: var(--width);
  position: relative;
  height: 48px;
  font-weight: 500;
  background-color: white;
  display: block;
  cursor: pointer;
  transition: all ease-in-out 150ms;
}
.add-policy {
  position: absolute;
  top: 4px;
  left: 4px;
  transition: all ease-in-out 150ms;
}
.driver:hover .add-policy {
  font-weight: 600;
  transition: all ease-in-out 150ms;
}
.driver:hover {
  filter: brightness(95%);
  transition: all ease-in-out 150ms;
}
.driver:not(:first-of-type) {
  border-top: 1px solid var(--primary-color);
}
.team, .engine, .add-policy {
  position: absolute;
  font-weight: italic;
  font-size: 10px;
}
.engine, .team {
  right: 4px;
  bottom: 0;
}
.team {
  top: 0;
  font-weight: 700;
}
.name {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>