// корзина
var Cart = (function() {

    var KEY = 'tm_cart';

    function getAll() {
        return JSON.parse(localStorage.getItem(KEY) || '[]');
    }

    function save(items) {
        localStorage.setItem(KEY, JSON.stringify(items));
        updateBadge();
    }

    function add(item) {
        var items = getAll();
        var found = items.find(function(i) { return i.id === item.id; });
        if (found) {
            found.qty = (found.qty || 1) + 1;
        } else {
            items.push({ id: item.id, name: item.name, price: item.price, img: item.img, qty: 1 });
        }
        save(items);
    }

    function remove(id) {
        save(getAll().filter(function(i) { return i.id !== id; }));
    }

    function setQty(id, qty) {
        if (qty < 1) { remove(id); return; }
        var items = getAll();
        var found = items.find(function(i) { return i.id === id; });
        if (found) found.qty = qty;
        save(items);
    }

    function total() {
        return getAll().reduce(function(sum, i) { return sum + i.price * (i.qty || 1); }, 0);
    }

    function count() {
        return getAll().reduce(function(sum, i) { return sum + (i.qty || 1); }, 0);
    }

    function clear() {
        localStorage.removeItem(KEY);
        updateBadge();
    }

    function updateBadge() {
        var badge = document.getElementById('cartCount');
        if (badge) badge.textContent = count();
    }

    return { get: getAll, add: add, remove: remove, setQty: setQty, total: total, count: count, clear: clear, updateBadge: updateBadge };

})();

document.addEventListener('DOMContentLoaded', function() {
    Cart.updateBadge();

    // восстанавливаем избранное
    var favs = JSON.parse(localStorage.getItem('tm_favs') || '[]');
    favs.forEach(function(id) {
        document.querySelectorAll('[data-id="' + id + '"] .tour-card__fav').forEach(function(btn) {
            btn.classList.add('active');
            btn.textContent = '♥';
        });
    });
});

function addToCart(item) {
    Cart.add(item);
    showToast('✓ ' + item.name + ' добавлен в корзину');
}

function toggleFav(id) {
    var favs = JSON.parse(localStorage.getItem('tm_favs') || '[]');
    var idx = favs.indexOf(id);
    if (idx === -1) { favs.push(id); } else { favs.splice(idx, 1); }
    localStorage.setItem('tm_favs', JSON.stringify(favs));

    var active = favs.indexOf(id) !== -1;
    document.querySelectorAll('[data-id="' + id + '"] .tour-card__fav').forEach(function(btn) {
        btn.classList.toggle('active', active);
        btn.textContent = active ? '♥' : '♡';
    });
}

// всплывающее уведомление
function showToast(msg) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(function() { toast.remove(); }, 300);
    }, 2500);
}
