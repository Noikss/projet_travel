// оформление заказа
document.addEventListener('DOMContentLoaded', function() {

    var orderItems = document.getElementById('orderItems');
    var items = Cart.get();

    // выводим список туров из корзины
    if (orderItems) {
        if (items.length > 0) {
            var html = '';
            items.forEach(function(item) {
                var sum = (item.price * (item.qty || 1)).toLocaleString('ru');
                html += '<div class="summary-row"><span>' + item.name + '</span><span>' + sum + ' ₽</span></div>';
            });
            orderItems.innerHTML = html;
        } else {
            orderItems.innerHTML = '<p style="color: var(--light); font-size: 0.88rem">Корзина пуста</p>';
        }
    }

    var totalEl = document.getElementById('orderTotal');
    if (totalEl) totalEl.textContent = Cart.total().toLocaleString('ru') + ' ₽';

    // автоформат даты рождения
    var birthInput = document.getElementById('birthDate');
    if (birthInput) {
        birthInput.addEventListener('input', function() {
            var digits = birthInput.value.replace(/\D/g, '');
            if (digits.length > 2) digits = digits.slice(0, 2) + '.' + digits.slice(2);
            if (digits.length > 5) digits = digits.slice(0, 5) + '.' + digits.slice(5);
            birthInput.value = digits.slice(0, 10);
        });
    }

    var form = document.getElementById('checkoutForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var valid = true;

        valid = checkField('lastName',  'lastNameErr',  'Введите фамилию') && valid;
        valid = checkField('firstName', 'firstNameErr', 'Введите имя') && valid;
        valid = checkField('coEmail',   'coEmailErr',   'Введите email', function(v) { return /\S+@\S+\.\S+/.test(v); }) && valid;
        valid = checkField('coPhone',   'coPhoneErr',   'Введите телефон') && valid;
        valid = checkField('birthDate', 'birthDateErr', 'Введите дату ДД.ММ.ГГГГ', function(v) {
            if (v.length !== 10) return false;
            var parts = v.split('.');
            return parts.length === 3 && parts[0] > 0 && parts[1] > 0 && parts[1] <= 12 && parts[2] > 1900;
        }) && valid;

        if (!valid) return;

        // очищаем корзину и показываем экран успеха
        Cart.clear();

        var section = document.getElementById('checkoutSection');
        section.innerHTML =
            '<div class="container" style="text-align:center; padding: 80px 0">' +
                '<div style="font-size: 5rem; margin-bottom: 20px">✅</div>' +
                '<h2 style="font-family: Montserrat; font-weight: 800; font-size: 2rem; color: #00A6A6; margin-bottom: 12px">Заказ оформлен!</h2>' +
                '<p style="color: #666; margin-bottom: 28px">Документы придут на email в течение 24 часов.</p>' +
                '<a href="index.html" class="btn-accent" style="display:inline-block; padding:14px 36px; border-radius:12px">На главную</a>' +
            '</div>';
    });

});

function checkField(id, errId, msg, validator) {
    var el  = document.getElementById(id);
    var err = document.getElementById(errId);
    var ok  = validator ? validator(el.value) : el.value.trim().length > 0;
    if (!ok) {
        el.classList.add('error');
        err.textContent = msg;
    } else {
        el.classList.remove('error');
        err.textContent = '';
    }
    return ok;
}
