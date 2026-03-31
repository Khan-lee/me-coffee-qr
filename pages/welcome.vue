<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
    <div class="mb-10 w-28 h-28 bg-slate-900 rounded-[35px] flex items-center justify-center shadow-2xl rotate-3 relative">
      <UIcon name="i-heroicons-beaker" class="text-blue-500 text-5xl" />
      <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full border-4 border-white"></div>
    </div>
    
    <h1 class="text-3xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">Mê Coffee</h1>
    <p class="text-slate-400 text-sm mb-10 px-6 font-medium leading-relaxed">Chào mừng bạn! Vui lòng cho quán biết tên để tiện phục vụ nhé.</p>
    
    <div class="w-full max-w-xs space-y-4">
      <UInput 
        v-model="userName" 
        placeholder="Tên của bạn là gì?" 
        size="xl" 
        variant="padded"
        class="text-center font-bold"
        :ui="{ rounded: 'rounded-2xl', base: 'bg-slate-50 border-none focus:ring-2 focus:ring-blue-500' }" 
      />
      
      <UButton 
        block 
        size="xl" 
        color="blue" 
        class="font-black py-5 rounded-2xl uppercase tracking-widest shadow-xl shadow-blue-100 mt-2" 
        @click="startOrder"
      >
        Bắt đầu trải nghiệm
      </UButton>
    </div>
    
    <p class="mt-20 text-[10px] text-slate-300 font-bold uppercase tracking-widest">Powered by Me Coffee System</p>
  </div>
</template>

<script setup>
const userName = ref('')
const userInfo = useCookie('user_info')

const startOrder = () => {
  if (!userName.value.trim()) {
    useToast().add({ title: 'Opps!', description: 'Bạn chưa nhập tên kìa.', color: 'orange' })
    return
  }
  // Lưu tên vào Cookie (mặc định bàn 01 nếu chưa có logic QR)
  userInfo.value = { name: userName.value, table: '01' }
  navigateTo('/')
}
</script>