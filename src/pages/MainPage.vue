<script setup>
import { storeToRefs } from 'pinia'
import PlayBtn from '@/components/PlayBtn.vue'
import PauseBtn from '@/components/PauseBtn.vue'
import Timer from '@/components/Timer.vue'
import { useTimerStore } from '@/stores/timerStore'

const timerStore = useTimerStore()
const {timerRunning} = storeToRefs(timerStore)

</script>
<template> 
  <div class="w-screen py-[24px] h-dvh flex flex-col gap-6 items-center justify-between">
    <span class="text-[18px]">activ</span>

    <div class="flex flex-col items-center gap-[50px]">
      <!-- <h4 class="text-[18px] text-center font-medium">
        Work effective <br />
        next 25 minutes
      </h4> -->

      <Timer />

      <PlayBtn v-show="!timerRunning" />
      <PauseBtn v-show="timerRunning"/>

    </div>
    <img src="/logo.svg" alt="" />
  </div>
</template>
