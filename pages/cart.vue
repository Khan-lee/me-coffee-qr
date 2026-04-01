<template>
  <div class="flex flex-col min-h-screen bg-slate-50 pb-10 font-sans">
    <header class="bg-white sticky top-0 z-50 px-5 py-4 flex items-center border-b border-slate-100">
      <button @click="$router.back()" class="w-10 h-10 flex items-center justify-center bg-slate-50 rounded-xl">
        <UIcon name="i-heroicons-chevron-left-20-solid" class="text-2xl text-slate-700" />
      </button>
      <h1 class="flex-1 text-center font-black text-slate-800 uppercase italic tracking-tighter text-sm">THANH TOÁN APP</h1>
      <div class="w-10"></div>
    </header>

    <div v-if="cart.length > 0" class="p-5 space-y-6">
      <div class="bg-white rounded-[2.5rem] p-6 shadow-sm border border-slate-100">
        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Đơn hàng của bạn</p>
        <div v-for="(item, index) in cart" :key="index" class="flex justify-between items-start py-3 border-b border-dashed border-slate-100 last:border-0">
          <div>
            <h3 class="font-bold text-slate-800 text-sm">{{ item.name }}</h3>
            <p class="text-[10px] text-slate-400 font-bold uppercase">Size {{ item.selectedSize }} | SL: {{ item.quantity }}</p>
          </div>
          <span class="font-black text-slate-800">{{ item.total }}k</span>
        </div>
        <div class="mt-4 pt-4 border-t-2 border-slate-50 flex justify-between items-center">
          <span class="font-black text-blue-600 uppercase text-[10px]">Tổng cộng</span>
          <span class="text-2xl font-black text-blue-600 italic">{{ cartTotal }}.000đ</span>
        </div>
      </div>

      <div class="bg-slate-900 rounded-[3rem] p-8 text-white shadow-2xl relative overflow-hidden text-center">
        <div class="relative z-10">
          <div class="mb-8">
            <div class="w-16 h-16 bg-blue-500 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-blue-500/50">
              <UIcon name="i-heroicons-paper-airplane" class="text-3xl text-white -rotate-45" />
            </div>
            <h2 class="text-xl font-black uppercase italic tracking-tighter">Thanh toán nhanh</h2>
            <p class="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Tự động điền số tiền & nội dung</p>
          </div>

          <UButton 
            block 
            size="xl" 
            color="blue" 
            class="py-6 rounded-[2rem] font-black uppercase tracking-[0.1em] shadow-lg shadow-blue-500/30 mb-4 text-sm" 
            @click="openBankApp"
          >
            MỞ APP NGÂN HÀNG / MOMO
          </UButton>

          <p class="text-[9px] text-slate-500 italic mb-8 px-4">
            * Sau khi chuyển khoản thành công tại App ngân hàng, vui lòng quay lại đây nhấn "Xác nhận đã chuyển"
          </p>

          <div class="border-t border-white/5 pt-6">
            <UButton 
              block 
              variant="ghost" 
              class="py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest text-slate-400"
              @click="completeOrder"
            >
              Xác nhận đã chuyển
            </UButton>
          </div>
        </div>

        <UIcon name="i-heroicons-banknotes" class="absolute -left-10 -bottom-10 text-[12rem] text-white/5 rotate-12" />
      </div>
    </div>
  </div>
</template>

<script setup>
const cart = useCookie('user_cart', { default: () => [] })
const userInfo = useCookie('user_info')
const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.total, 0))

// THÔNG TIN TÀI KHOẢN
const BANK_ID = 'OCB' 
const ACCOUNT_NO = '106937' 

const openBankApp = () => {
  const amount = cartTotal.value * 1000
  const description = `ME COFFEE ${userInfo.value?.name || ''} BAN ${userInfo.value?.table || '01'}`
  
  // Đã sửa lỗi truyền biến BANK_ID và ACCOUNT_NO vào link
  const deepLink = `https://qr.vietqr.io/google-app-link?bank=${BANK_ID}&account=${ACCOUNT_NO}&amount=${amount}&memo=${encodeURIComponent(description)}`
  
  window.location.href = deepLink
}

const completeOrder = async () => {
  if (cart.value.length === 0) return

  const history = JSON.parse(localStorage.getItem('order_history') || '[]')
  history.unshift({
    id: Date.now(),
    customer: userInfo.value?.name || 'Khách',
    table: userInfo.value?.table || '01',
    items: [...cart.value],
    total: cartTotal.value,
    time: new Date().toLocaleString('vi-VN')
  })
  localStorage.setItem('order_history', JSON.stringify(history))

  const TELEGRAM_TOKEN = '8217364376:AAF3UWNbiTbXp8QgiINsssTQKbytkAFCel4'
  const TELEGRAM_CHAT_ID = '6710878225'

  let message = `☕️ **ĐƠN HÀNG MỚI (BANK APP)**\n`
  message += `👤 **Khách:** ${userInfo.value?.name || 'Khách'}\n`
  message += `📍 **Bàn:** ${userInfo.value?.table || '01'}\n`
  message += `💰 **Tổng:** ${cartTotal.value}.000đ\n`
  message += `✅ *Khách báo đã chuyển qua App*`

  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: 'Markdown' })
    })
    
    useToast().add({ title: 'Cảm ơn bạn!', description: 'Đơn hàng đang được thực hiện.', color: 'green' })
    cart.value = []
    setTimeout(() => navigateTo('/'), 2000)
  } catch (error) {
    console.error(error)
  }
}
</script>