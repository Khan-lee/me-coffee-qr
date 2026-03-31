<template>
  <div class="flex flex-col min-h-screen bg-gray-50 pb-24 font-sans">
    <header class="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-5 py-4 flex items-center border-b border-gray-100">
      <button @click="$router.push('/')" class="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl text-gray-700">
        <UIcon name="i-heroicons-chevron-left-20-solid" class="text-2xl" />
      </button>
      <h1 class="flex-1 text-center font-black text-gray-800 uppercase italic tracking-tighter">MÊ COFFEE MENU</h1>
      <div class="w-10"></div>
    </header>

    <nav class="bg-white border-b sticky top-[72px] z-40 flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar shadow-sm">
      <button v-for="cat in categories" :key="cat.id" @click="scrollToCategory(cat.id)"
        :class="activeCategory === cat.id ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-400'"
        class="whitespace-nowrap px-6 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all">
        {{ cat.name }}
      </button>
    </nav>

    <div class="p-4 space-y-10">
      <section v-for="section in menuData" :key="section.id" :id="section.id">
        <h2 class="text-sm font-black text-gray-400 uppercase tracking-[0.2em] mb-4 ml-2">{{ section.category }}</h2>
        <div class="grid gap-4">
          <div v-for="item in section.items" :key="item.name" 
               @click="openSelect(item)"
               class="bg-white p-3 rounded-[2rem] flex items-center gap-4 shadow-sm border border-gray-50 active:scale-[0.98] transition-all cursor-pointer">
            <div class="w-20 h-20 bg-slate-100 rounded-3xl overflow-hidden flex-shrink-0">
              <img :src="`https://placehold.co/200x200/f1f5f9/64748b?text=${item.name}`" class="w-full h-full object-cover" />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-gray-800 text-sm leading-tight mb-1">{{ item.name }}</h3>
              <p class="font-black text-blue-600 text-sm">{{ item.priceM }}k</p>
            </div>
            <UButton icon="i-heroicons-plus" color="blue" variant="soft" class="rounded-2xl w-10 h-10 p-0 flex justify-center mr-2 shadow-sm" />
          </div>
        </div>
      </section>
    </div>

    <UModal v-model="isOpen" prevent-close>
      <div class="p-6 bg-white rounded-t-[3rem]">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-2xl font-black text-gray-800 uppercase italic leading-none">{{ selectedItem?.name }}</h2>
            <p class="text-blue-600 font-black mt-1">{{ currentPrice }}k</p>
          </div>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" @click="isOpen = false" class="rounded-full" />
        </div>

        <div class="space-y-6">
          <div>
            <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 text-center">Chọn kích cỡ</p>
            <div class="flex bg-gray-100 p-1.5 rounded-[2rem] gap-2">
              <button @click="size = 'M'" :class="size === 'M' ? 'bg-white shadow-md text-blue-600' : 'text-gray-400'" class="flex-1 py-3 rounded-[1.5rem] font-black text-sm transition-all uppercase">Size M</button>
              <button @click="size = 'L'" :class="size === 'L' ? 'bg-white shadow-md text-blue-600' : 'text-gray-400'" class="flex-1 py-3 rounded-[1.5rem] font-black text-sm transition-all uppercase">Size L</button>
            </div>
          </div>

          <UTextarea v-model="note" placeholder="Ghi chú (Ví dụ: Ít đường, nhiều đá...)" color="blue" variant="outline" class="font-medium" :ui="{ rounded: 'rounded-2xl' }" />

          <div class="flex items-center gap-4 pt-4">
            <div class="flex items-center bg-gray-100 rounded-2xl p-1">
              <UButton @click="qty > 1 ? qty-- : null" color="gray" variant="ghost" icon="i-heroicons-minus" class="rounded-xl" />
              <span class="w-10 text-center font-black text-gray-800">{{ qty }}</span>
              <UButton @click="qty++" color="gray" variant="ghost" icon="i-heroicons-plus" class="rounded-xl" />
            </div>
            <UButton block size="xl" color="blue" class="flex-1 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-100" @click="addToCart">
              Thêm vào giỏ
            </UButton>
          </div>
        </div>
      </div>
    </UModal>

    <div v-if="cart.length > 0" class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50">
      <UButton @click="navigateTo('/cart')" block size="xl" color="black" class="py-5 rounded-[2rem] shadow-2xl justify-between px-8 bg-slate-900 border-none">
        <div class="flex items-center gap-3">
          <UIcon name="i-heroicons-shopping-bag" class="text-xl text-blue-400" />
          <span class="text-[10px] font-black uppercase tracking-widest">Giỏ hàng ({{ cart.length }})</span>
        </div>
        <span class="font-black italic text-blue-400">{{ cartTotal }}k</span>
      </UButton>
    </div>
  </div>
</template>

<script setup>
import { categories, menuData } from '~/menuData'

const activeCategory = ref('coffee')
const isOpen = ref(false)
const selectedItem = ref(null)
const size = ref('M')
const qty = ref(1)
const note = ref('')
const cart = useCookie('user_cart', { default: () => [] })

const currentPrice = computed(() => {
  if (!selectedItem.value) return 0
  const price = size.value === 'M' ? selectedItem.value.priceM : selectedItem.value.priceL
  return price * qty.value
})

const cartTotal = computed(() => cart.value.reduce((sum, item) => sum + item.total, 0))

const openSelect = (item) => {
  selectedItem.value = item
  size.value = 'M'
  qty.value = 1
  note.value = ''
  isOpen.value = true
}

const addToCart = () => {
  const newItem = {
    ...selectedItem.value,
    selectedSize: size.value,
    quantity: qty.value,
    note: note.value,
    total: currentPrice.value
  }
  cart.value = [...cart.value, newItem]
  isOpen.value = false
  useToast().add({ title: 'Đã thêm vào giỏ!', color: 'blue', timeout: 2000 })
}

const scrollToCategory = (id) => {
  activeCategory.value = id
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 140, behavior: 'smooth' })
}
</script>