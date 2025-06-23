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
function openCart(){
  let cart = document.getElementById("cart")
  cart.classList.add('show')
}

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('show');
});