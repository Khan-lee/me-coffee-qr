<template>
  <div class="flex flex-col h-full bg-slate-50">
    <div class="h-64 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 flex flex-col justify-end relative">
      <div class="z-10 animate-fade-in">
        <h1 class="text-white text-4xl font-black italic tracking-tighter uppercase leading-none">MÊ COFFEE</h1>
        <div class="flex items-center gap-2 mt-2">
          <span class="h-[2px] w-8 bg-blue-500"></span>
          <p class="text-blue-400 font-bold text-[10px] uppercase tracking-[0.3em]">Hương vị từ sự tử tế</p>
        </div>
      </div>
      <div class="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]"></div>
    </div>

    <div class="px-5 -mt-12 z-20 flex-1">
      <div class="bg-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 space-y-6">
        
        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-3xl">
          <div class="flex items-center gap-3">
            <UAvatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size="md" class="bg-blue-100" />
            <div>
              <p class="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Xin chào,</p>
              <p class="font-black text-slate-800">{{ userInfo?.name || 'Quý khách' }}</p>
            </div>
          </div>
          <div class="bg-slate-900 text-white px-4 py-2 rounded-2xl text-[12px] font-black italic">
            BÀN {{ userInfo?.table || '01' }}
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <UButton @click="callAction('Phục vụ')" color="white" block class="rounded-2xl py-6 flex-col gap-2 shadow-sm border-slate-100 hover:bg-slate-50">
            <UIcon name="i-heroicons-bell-alert" class="text-2xl text-orange-500" />
            <span class="text-[10px] font-black uppercase text-slate-600">Gọi phục vụ</span>
          </UButton>
          <UButton @click="callAction('Thanh toán')" color="white" block class="rounded-2xl py-6 flex-col gap-2 shadow-sm border-slate-100 hover:bg-slate-50">
            <UIcon name="i-heroicons-credit-card" class="text-2xl text-blue-600" />
            <span class="text-[10px] font-black uppercase text-slate-600">Thanh toán</span>
          </UButton>
        </div>

        <UButton 
          block 
          size="xl" 
          color="blue" 
          class="py-8 rounded-[2rem] font-black uppercase italic tracking-widest text-xl shadow-[0_15px_30px_rgba(59,130,246,0.3)] hover:scale-[1.02] transition-transform" 
          @click="navigateTo('/menu')"
        >
          XEM THỰC ĐƠN
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
const userInfo = useCookie('user_info')
const callAction = (type) => {
  useToast().add({
    title: `Đã gửi tín hiệu!`,
    description: `Nhân viên sẽ đến hỗ trợ ${type} ngay.`,
    icon: 'i-heroicons-check-circle',
    color: 'blue'
  })
}
</script>