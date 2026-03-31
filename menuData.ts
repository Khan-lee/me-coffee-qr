export const categories = [
  { id: 'coffee', name: 'Cà Phê' },
  { id: 'milk-tea', name: 'Trà Sữa' },
  { id: 'fruit-tea', name: 'Trà Trái Cây' },
  { id: 'smoothie', name: 'Đá Xay / Sữa Chua' },
  { id: 'matcha', name: 'Mattcha' },
  { id: 'detox', name: 'Nước Ép Detox' },
  { id: 'snacks', name: 'Món Khác' },
  { id: 'topping', name: 'Topping' }
]

export const menuData = [
  {
    id: 'coffee',
    category: 'Cà Phê',
    items: [
      { name: 'Đen Đá', priceM: 19, priceL: 25, desc: 'Cà phê nguyên chất pha máy/phin' },
      { name: 'Cà Phê Sữa', priceM: 25, priceL: 31, desc: 'Cà phê hòa quyện cùng sữa đặc' },
      { name: 'Bạc Xỉu', priceM: 25, priceL: 31, desc: 'Nhiều sữa ít cà phê' },
      { name: 'Cà Phê Muối', priceM: 34, priceL: 39, desc: 'Vị mặn nhẹ của kem muối', recommended: true },
      { name: 'Cà Phê Kem Flan', priceM: 34, priceL: 39, desc: 'Kết hợp bánh flan béo ngậy' },
      { name: 'Cà Phê Kem Trứng', priceM: 34, priceL: 39, desc: 'Lớp kem trứng đánh bông' },
      { name: 'Cà Phê Dừa', priceM: 34, priceL: 39, recommended: true },
      { name: 'Cà Phê Tiramisu', priceM: 34, priceL: 39 }
    ]
  },
  {
    id: 'milk-tea',
    category: 'Trà Sữa',
    items: [
      { name: 'Shan Tuyết', priceM: 29, priceL: 35 },
      { name: 'Olong Sen Cổ', priceM: 29, priceL: 35 },
      { name: 'Đậu Đỏ', priceM: 34, priceL: 39, recommended: true },
      { name: 'Gạo Rang', priceM: 34, priceL: 39 },
      { name: 'Tiramisu Cake', priceM: 39, priceL: 45, recommended: true },
      { name: 'Khoai Môn', priceM: 39, priceL: 45 },
      { name: 'Lục Trà Sữa Xoài', priceM: 34, priceL: 39 },
      { name: 'Truyền Thống', priceM: 29, priceL: 35 }
    ]
  },
  {
    id: 'fruit-tea',
    category: 'Trà Trái Cây',
    items: [
      { name: 'Trà Nhiệt Đới', priceM: 34, priceL: 39 },
      { name: 'Trà Xoài Đác Thơm', priceM: 36, priceL: 42 },
      { name: 'Trà Gạo Machiato', priceM: 36, priceL: 42, recommended: true },
      { name: 'Trà Sen Machiato', priceM: 36, priceL: 42 },
      { name: 'Trà Dứa Xí Muội', priceM: 34, priceL: 39, recommended: true },
      { name: 'Trà Thạch Đào', priceM: 36, priceL: 42 },
      { name: 'Trà Đào Cam Sả', priceM: 34, priceL: 39 }
    ]
  },
  {
    id: 'smoothie',
    category: 'Đá Xay / Sữa Chua',
    items: [
      { name: 'Sữa Chua Xoài Đác Thơm', priceM: 36, priceL: 42 },
      { name: 'Sữa Chua Nhiệt Đới', priceM: 44, priceL: 49, recommended: true },
      { name: 'Tắc Muối Đá Xay', priceM: 36, priceL: 42 },
      { name: 'Cooki Đá Xay', priceM: 36, priceL: 42 },
      { name: 'Matcha Đá Xay', priceM: 36, priceL: 42 }
    ]
  },
  {
    id: 'matcha',
    category: 'Mattcha',
    items: [
      { name: 'Matcha Latte', priceM: 36, priceL: 42 },
      { name: 'Matcha Coldwisk', priceM: 36, priceL: 42 },
      { name: 'Matcha Dừa Sen Xanh', priceM: 39, priceL: 45, recommended: true },
      { name: 'Matcha Coco Latte', priceM: 39, priceL: 45 }
    ]
  },
  {
    id: 'detox',
    category: 'Nước Ép Detox',
    items: [
      { name: 'Cam Mật Ong', priceM: 34, priceL: 39 },
      { name: 'Cam - Thơm', priceM: 34, priceL: 39 },
      { name: 'Thơm - Táo - Cà Rốt', priceM: 34, priceL: 39 },
      { name: 'Cam - Táo - Cà Rốt', priceM: 34, priceL: 39 }
    ]
  },
  {
    id: 'snacks',
    category: 'Món Khác',
    items: [
      { name: 'Bánh Flan Sốt Kem', priceM: 25 },
      { name: 'Bánh Que Chấm Sốt', priceM: 20, desc: 'Sốt kem trứng, khoai môn' },
      { name: 'Hạt Hướng Dương', priceM: 15 },
      { name: 'Khô Gà Lá Chanh', priceM: 20 },
      { name: 'Khô Bò Xé Sợi', priceM: 25 },
      { name: 'Khô Heo Cháy Tỏi', priceM: 20 }
    ]
  },
  {
    id: 'topping',
    category: 'Topping',
    items: [
      { name: 'Trân Châu Đen', priceM: 6 },
      { name: 'Trân Châu Hoàng Kim', priceM: 6 },
      { name: 'Thạch Nổ Củ Năng', priceM: 6 },
      { name: 'Thạch Sương Sáo', priceM: 6 },
      { name: 'Phô Mai Viên', priceM: 8 },
      { name: 'Kem Cheese', priceM: 8 },
      { name: 'Kem Trứng', priceM: 8 }
    ]
  }
]