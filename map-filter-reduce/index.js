const products = [
  { id: 1, name: 'ASUS Laptop', category: 'electronics', price: 15000000, stock: 5 },
  { id: 2, name: 'Logi Mouse', category: 'electronics', price: 500000, stock: 20 },
  { id: 3, name: 'Desk', category: 'furniture', price: 2000000, stock: 10 },
  { id: 4, name: 'Gaming Chair', category: 'furniture', price: 3500000, stock: 0 },
  { id: 5, name: 'Mech Keyboard', category: 'electronics', price: 1200000, stock: 8 },
  { id: 6, name: '4K Monitor', category: 'electronics', price: 8000000, stock: 3 }
];

const nameProduct = products.map((p) => p.name);
const electronics = products.filter((p) => { return p.category === 'electronics' && p.stock > 0 });
const total = products.reduce((acc, p) => { return acc + p.price}, 0);

console.log("Result:", { nameProduct, electronics, total });