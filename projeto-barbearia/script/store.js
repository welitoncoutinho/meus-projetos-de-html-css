let products = [];
let cart = [];

products = [
    { id: 1, name: 'Mangás', price: 40.00 },
    { id: 2, name: 'Action figure', price: 199.99 },
    { id: 3, name: 'Camisa personalisada', price: 100.00 },
    { id: 4, name: 'Caneca personalisada', price: 49.99},
    { id: 5, name: 'Moleton personalisada', price: 150.99 },
    { id: 6, name: 'Posters', price: 50.99 }
];
id = 6; // atualiza o ID para o próximo cadastro começar do 7

// Renderizar Produtos
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `<button class="delete-product" onclick="deleteProduct(${product.id})">×</button><h3>${product.name}</h3><p>R$ ${product.price.toFixed(2)}</p><button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>`;
        productList.appendChild(div);
    });
}

// Adicionar ao Carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const item = cart.find(i => i.product.id === productId);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCart();
}

// Atualizar Carrinho
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.product.price * item.quantity;
        count += item.quantity;

        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `${item.product.name} - R$ ${item.product.price.toFixed(2)}<input type="number" min="1" value="${item.quantity}" onchange="changeQuantity(${item.product.id}, this.value)"><button onclick="removeFromCart(${item.product.id})">X</button>`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    cartCount.textContent = count;
}

// Mudar quantidade
function changeQuantity(productId, newQuantity) {
    const item = cart.find(i => i.product.id === productId);
    if (item && newQuantity >= 1) {
        item.quantity = parseInt(newQuantity);
        updateCart();
    }
}

// Remover item do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCart();
}

// Deletar Produto
function deleteProduct(productId) {
    products = products.filter(p => p.id !== productId);
    cart = cart.filter(item => item.product.id !== productId);
    renderProducts();
    updateCart();
}
// Limpar Carrinho
document.getElementById('clear-cart').addEventListener('click', () => {
    if (confirm('Deseja limpar o carrinho?')) {
        cart = [];
        updateCart();
    }
});

// Finalizar Compra
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }
    alert('Compra realizada com sucesso!');
    cart = [];
    updateCart();
    document.getElementById('cart').classList.remove('show');
});

// Abrir / Fechar Carrinho
function openCart() {
    let cart = document.getElementById("cart")
    cart.classList.add('show')
}

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('show');
});