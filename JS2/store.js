const products = [
  {
    id: 1,
    name: "هدفون بی‌سیم X-Pro",
    price: 3250000,
    image: "Img/p1.jpg"
  },
  {
    id: 2,
    name: "ایرپاد SoundKala Air",
    price: 1890000,
    image: "Img/p2.jpg"
  },
  {
    id: 3,
    name: "هدفون گیمینگ BlackWave",
    price: 2750000,
    image: "Img/p3.jpg"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id){
  const product = products.find(p => p.id === id);
  const item = cart.find(p => p.id === id);

  if(item){
    item.qty += 1;
  } else {
    cart.push({...product, qty:1});
  }

  saveCart();
  alert("محصول به سبد اضافه شد");
}

function updateCartCount(){
  const count = cart.reduce((sum,item)=> sum + item.qty ,0);
  const el = document.querySelector(".cart-count");
  if(el) el.innerText = count;
}

updateCartCount();