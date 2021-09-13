<template>
  <div class="home">
    <div class="insurance-selector">
      <label
        for="driver"
        class="label"
      >Choose your insurance object:</label>
      <input
        id="driver"
        type="text"
        class="input"
        autocomplete="off"
        :value="localState.inputValue"
        @input="handleInput"
        @blur="handleBlur"
      >
      <driver-list
        v-if="localState.showSuggestions"
        :drivers="allDrivers"
        class="driver-list"
        @selected="handleSelect"
      />
    </div>
    <div v-if="policies.length" class="chosen-policies">
      <policy-list
        :policies="policies"
        class="policy-list"
        @deselect="removePolicy"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useStore } from 'vuex'
import teams from '../assets/data/teams.json'
import DriverList from '../components/DriverList'
import PolicyList from '../components/PolicyList'
import { matchDriver, mapDriversFromTeam } from '../util'

const store = useStore()

const policies = computed(() => store.getters['getPolicies'])

const localState = reactive({
  inputValue: '',
  showSuggestions: false,
  currentDriver: undefined
})
const allDrivers = computed(() => Object.values(teams).flatMap(mapDriversFromTeam).filter(filterDriverByInput))
function filterDriverByInput(el) {
  return matchDriver(el, localState.inputValue) && !policies.value.some(({ insuree }) => matchDriver(el, `${insuree.firstname} ${insuree.lastname}`))
}
function handleInput(e) {
  localState.showSuggestions = true
  const hasMatch = allDrivers.value.find(el => matchDriver(el, e.target.value))
  hasMatch ? localState.inputValue = e.target.value : e.target.value = localState.inputValue 
}
function handleSelect(e) {
  store.dispatch('addPolicy', ({ insuree: e.target.value }))
}
function handleBlur(e) {
  const cachedPolicies = policies.value;
  setTimeout(() => {
    if (cachedPolicies === policies.value) {
      localState.showSuggestions = false
    }
  }, 100)
}
function removePolicy(e) {
  store.dispatch('removePolicy', e.target.value)
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
}
.insurance-selector {
  --width: 320px;
  display: flex;
  justify-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.chosen-policies {
  position: absolute;
  transform: translateX(320px);
}
.input {
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--primary-color);
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  height: 24px;
  width: var(--width);
}
</style>