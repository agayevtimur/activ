<script setup>
import { storeToRefs } from 'pinia'
import PlayBtn from '@/components/PlayBtn.vue'
import PauseBtn from '@/components/PauseBtn.vue'
import BottomAppBar from '@/components/BottomAppBar.vue'
import Timer from '@/components/Timer.vue'
import { useTimerStore } from '@/stores/timerStore'

const timerStore = useTimerStore()
const { timerRunning, time } = storeToRefs(timerStore)
</script>
<template>
  <div class="w-dvw py-[24px] px-[16px] h-dvh flex flex-col gap-6 items-center justify-between">
    <div class="w-full"><span class="text-[22px] font-bold">activ</span></div>

    <div class="flex flex-col items-center gap-[50px]">
      <h4 v-if="time === 1500" class="text-[18px] text-center font-medium">
        Work effective <br />
        next 25 minutes
      </h4>
      <h4 v-else class="text-[18px] text-center font-medium">
        Relax next <br />
        5 minutes
      </h4>

      <Timer />

      <PlayBtn v-show="!timerRunning" />
      <PauseBtn v-show="timerRunning" />
    </div>

    <BottomAppBar />
  </div>
</template>
