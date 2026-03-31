<template>
  <div class="min-h-screen bg-slate-200 flex justify-center py-0 sm:py-8">
    <div class="w-full max-w-[450px] min-h-screen sm:min-h-[850px] bg-white shadow-2xl relative overflow-hidden sm:rounded-[3rem] border-[8px] border-slate-900">
      <NuxtPage />
      <UNotifications />
    </div>
  </div>
</template>

<style>
body { margin: 0; padding: 0; }
/* Ẩn thanh cuộn nhưng vẫn cuộn được */
::-webkit-scrollbar { display: none; }
</style>