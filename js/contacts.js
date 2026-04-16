// форма обратной связи
document.addEventListener('DOMContentLoaded', function() {

    var form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var nameInput  = document.getElementById('cName');
        var emailInput = document.getElementById('cEmail');
        var msgInput   = document.getElementById('cMsg');
        var valid = true;

        if (!nameInput.value.trim()) {
            nameInput.classList.add('error');
            document.getElementById('cNameErr').textContent = 'Введите имя';
            valid = false;
        } else {
            nameInput.classList.remove('error');
            document.getElementById('cNameErr').textContent = '';
        }

        if (!emailInput.value || !/\S+@\S+\.\S+/.test(emailInput.value)) {
            emailInput.classList.add('error');
            document.getElementById('cEmailErr').textContent = 'Введите корректный email';
            valid = false;
        } else {
            emailInput.classList.remove('error');
            document.getElementById('cEmailErr').textContent = '';
        }

        if (!msgInput.value.trim()) {
            msgInput.classList.add('error');
            document.getElementById('cMsgErr').textContent = 'Введите сообщение';
            valid = false;
        } else {
            msgInput.classList.remove('error');
            document.getElementById('cMsgErr').textContent = '';
        }

        if (!valid) return;

        // показываем сообщение об успехе
        document.getElementById('cSuccess').classList.remove('hidden');
        form.querySelectorAll('input, textarea, select, button').forEach(function(el) {
            el.disabled = true;
        });
    });

});
