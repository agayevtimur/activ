<script setup>
import { storeToRefs } from 'pinia'
import { useTimerStore } from '@/stores/timerStore'
import { computed, onMounted, ref, watch } from 'vue'

const timerStore = useTimerStore()
const { formattedTime, getDashOffset, time } = storeToRefs(timerStore)
const { setInitialTime } = timerStore

onMounted(() => {
  setInitialTime(1500)
})
</script>

<template>
  <div class="relative">
    <svg class="" width="282" height="282" viewBox="0 0 282 282" fill="none">
      <circle class="back-circle" cx="141" cy="141" r="132" />
      <circle
        class="top-circle"
        :stroke-dasharray="825"
        :stroke-dashoffset="getDashOffset"
        cx="141"
        style="transition: stroke-dashoffset 0.5s ease-in-out"
        cy="141"
        r="132"
        stroke-width="18px"
        :stroke="`${time === 1500 ? '#8734ad' : '#E4B615'}`"
        stroke-linecap="round"
      />
    </svg>
    <h1 class="text-[44px] font-semibold absolute top-[105px] left-[90px]">{{ formattedTime }}</h1>
  </div>
</template>

<style scoped>
svg {
  transform: rotate(-90deg);
}
.back-circle {
  fill: transparent;
  stroke: #3d3d3d;
  stroke-width: 18px;
}
</style>
