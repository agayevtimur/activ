<script setup>
import {useTimerStore} from '@/stores/timerStore'
const timeStore = useTimerStore()
const {stopTimer} = timeStore
</script>

<template>
  <button @click="stopTimer">
    <img src="/public/icons/pause.svg" alt="" />
  </button>
</template>
