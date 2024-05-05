<template>
  <div class=" w-screen flex flex-col gap-6 items-center justify-center">
    <span class="text-2xl">activ</span>
    <h1 class="text-3xl text-center font-semibold">
      Spent your work <br />
      day effectively
    </h1>
    <button @click="$router.push('/main')" class="bg-primaryColor p-[10px] rounded-xl w-[200px] active:bg-opacity-85">Start</button>
  </div>
</template>
