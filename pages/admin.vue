<template>
  <div class="min-h-screen bg-slate-900 p-6 text-white font-sans">
    <header class="mb-10 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-black uppercase italic tracking-tighter text-blue-500">Dashboard</h1>
        <p class="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">Quản lý đơn hàng Mê Coffee</p>
      </div>
      <div class="text-right">
        <p class="text-[10px] font-bold text-slate-500 uppercase">Tổng doanh thu</p>
        <p class="text-2xl font-black text-green-400 italic">{{ totalRevenue }}.000đ</p>
      </div>
    </header>

    <div class="space-y-4">
      <div v-for="order in orders" :key="order.id" class="bg-white/5 border border-white/10 rounded-[2rem] p-6">
        <div class="flex justify-between items-start mb-4">
          <div>
            <span class="bg-blue-600 text-[9px] font-black px-3 py-1 rounded-full uppercase">Bàn {{ order.table }}</span>
            <h3 class="text-lg font-black mt-2 uppercase italic leading-none">{{ order.customer }}</h3>
            <p class="text-[10px] text-slate-500 mt-1">{{ order.time }}</p>
          </div>
          <p class="font-black text-xl text-blue-400">{{ order.total }}k</p>
        </div>

        <div class="space-y-1 border-t border-white/5 pt-4">
          <div v-for="item in order.items" :key="item.name" class="flex justify-between text-xs">
            <span class="text-slate-400">{{ item.name }} (x{{ item.quantity }})</span>
            <span class="font-bold">{{ item.total }}k</span>
          </div>
        </div>
      </div>

      <div v-if="orders.length === 0" class="text-center py-20 border-2 border-dashed border-white/5 rounded-[3rem]">
        <p class="text-slate-600 font-black uppercase italic">Chưa có đơn hàng nào</p>
      </div>
    </div>
    
    <UButton block color="gray" variant="ghost" class="mt-10 opacity-20" @click="clearHistory">Xóa lịch sử đơn</UButton>
  </div>
</template>

<script setup>
const orders = ref([])

onMounted(() => {
  orders.value = JSON.parse(localStorage.getItem('order_history') || '[]')
})

const totalRevenue = computed(() => {
  return orders.value.reduce((sum, order) => sum + order.total, 0)
})

const clearHistory = () => {
  if(confirm('Bạn có chắc muốn xóa hết lịch sử đơn hàng?')) {
    localStorage.removeItem('order_history')
    orders.value = []
  }
}
</script>