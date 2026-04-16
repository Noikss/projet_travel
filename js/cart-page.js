function buildCartItem(item) {
    var div = document.createElement('div');
    div.className = 'cart-item';

    var img = document.createElement('div');
    img.className = 'cart-item__img';
    img.style.backgroundImage = 'url(' + (item.img || '') + ')';

    var info = document.createElement('div');
    info.className = 'cart-item__info';

    var name = document.createElement('div');
    name.className = 'cart-item__name';
    name.textContent = item.name;

    var price = document.createElement('div');
    price.className = 'cart-item__price';
    price.textContent = (item.price * (item.qty || 1)).toLocaleString('ru') + ' ₽';

    info.appendChild(name);
    info.appendChild(price);

    var qty = document.createElement('div');
    qty.className = 'cart-item__qty';

    var btnMinus = document.createElement('button');
    btnMinus.className = 'qty-btn';
    btnMinus.textContent = '−';
    btnMinus.onclick = function() { Cart.setQty(item.id, (item.qty || 1) - 1); renderCart(); };

    var qtyVal = document.createElement('span');
    qtyVal.className = 'qty-val';
    qtyVal.textContent = item.qty || 1;

    var btnPlus = document.createElement('button');
    btnPlus.className = 'qty-btn';
    btnPlus.textContent = '+';
    btnPlus.onclick = function() { Cart.setQty(item.id, (item.qty || 1) + 1); renderCart(); };

    qty.appendChild(btnMinus);
    qty.appendChild(qtyVal);
    qty.appendChild(btnPlus);

    var removeBtn = document.createElement('button');
    removeBtn.className = 'cart-item__remove';
    removeBtn.textContent = '✕';
    removeBtn.title = 'Удалить';
    removeBtn.onclick = function() { Cart.remove(item.id); renderCart(); };

    div.appendChild(img);
    div.appendChild(info);
    div.appendChild(qty);
    div.appendChild(removeBtn);

    return div;
}

function renderCart() {
    var items = Cart.get();
    var empty = document.getElementById('cartEmpty');
    var content = document.getElementById('cartContent');
    var cartItems = document.getElementById('cartItems');

    if (!items.length) {
        empty.classList.remove('hidden');
        content.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    content.classList.remove('hidden');

    cartItems.innerHTML = '';
    items.forEach(function(item) {
        cartItems.appendChild(buildCartItem(item));
    });

    document.getElementById('sumItems').textContent = Cart.count() + ' шт.';
    document.getElementById('sumTotal').textContent = Cart.total().toLocaleString('ru') + ' ₽';
}

document.addEventListener('DOMContentLoaded', function() {
    renderCart();

    document.getElementById('clearCartBtn').addEventListener('click', function() {
        if (confirm('Очистить корзину?')) {
            Cart.clear();
            renderCart();
        }
    });

    // scroll and burger handled by main.js
});