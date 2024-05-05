import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTimerStore = defineStore('useTimerStore', () => {
  const initTime = ref(0)
  const timeLeft = ref(0)
  const timerRunning = ref(false)
  let timerInterval = 0

  const totalDashOffset = ref(825)

  const setInitialTime = (initialTime) => {
    initTime.value = initialTime
    timeLeft.value = initialTime
  }

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeLeft.value / 60)
    const seconds = timeLeft.value % 60
    return `
    ${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`
  })

  const startTimer = () => {
    if (!timerRunning.value) {
      timerRunning.value = true
      timerInterval = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value -= 1
        } else {
          stopTimer()
        }
      }, 1000)
    }
  }

//   const stopTimer = () => {
//     clearInterval(timerInterval)
//     timerRunning.value = false

//     if (timeLeft.value === 0) {
//       if (initTime.value === 25 * 60) {
//         setInitialTime(5 * 60)
//       } else {
//         setInitialTime(25 * 60)
//       }
//     }
//   }
  const stopTimer = () => {
    clearInterval(timerInterval)
    timerRunning.value = false

    if (timeLeft.value === 0) {
      if (initTime.value === 25 * 60) {
        setInitialTime(5 * 60)
      } else {
        setInitialTime(25 * 60)
      }
    }
  }

  const getDashOffset = computed(() => {
    const totalTime = initTime.value
    const remainingTime = timeLeft.value
    return totalDashOffset.value * (1 - remainingTime / totalTime)
  })

  return {
    formattedTime,
    startTimer,
    stopTimer,
    timerRunning,
    setInitialTime,
    getDashOffset
  }
})
