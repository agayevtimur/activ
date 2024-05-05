<script setup>
import {useTimerStore} from '@/stores/timerStore'
const timeStore = useTimerStore()
const {startTimer} = timeStore
</script>

<template>
  <button @click="startTimer(500)">
    <img src="/public/icons/play.svg" alt="" />
  </button>
</template>
