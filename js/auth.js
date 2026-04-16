// авторизация
var Auth = (function() {

    var USERS_KEY   = 'tm_users';
    var SESSION_KEY = 'tm_session';

    function getUsers() {
        return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    }

    function getSession() {
        return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    }

    function register(name, email, password) {
        var users = getUsers();
        if (users.find(function(u) { return u.email === email; })) {
            return { ok: false, err: 'Пользователь с таким email уже существует' };
        }
        users.push({ name: name, email: email, password: password });
        localStorage.setItem(USERS_KEY, JSON.stringify(users));
        localStorage.setItem(SESSION_KEY, JSON.stringify({ name: name, email: email }));
        return { ok: true };
    }

    function login(email, password) {
        var user = getUsers().find(function(u) { return u.email === email && u.password === password; });
        if (!user) return { ok: false, err: 'Неверный email или пароль' };
        localStorage.setItem(SESSION_KEY, JSON.stringify({ name: user.name, email: user.email }));
        return { ok: true };
    }

    function logout() {
        localStorage.removeItem(SESSION_KEY);
        location.reload();
    }

    function current() {
        return getSession();
    }

    return { register: register, login: login, logout: logout, current: current };

})();

document.addEventListener('DOMContentLoaded', function() {

    var user     = Auth.current();
    var loginBtn = document.getElementById('loginBtn');
    var greeting = document.getElementById('userGreeting');

    // показываем имя если залогинен
    if (user) {
        if (loginBtn) loginBtn.classList.add('hidden');
        if (greeting) {
            greeting.classList.remove('hidden');
            greeting.textContent = '👤 ' + user.name;
            greeting.title = 'Нажмите для выхода';
            greeting.addEventListener('click', Auth.logout);
        }
    }

    // модальное окно
    var modal    = document.getElementById('authModal');
    var closeBtn = document.getElementById('closeModal');

    if (loginBtn) loginBtn.addEventListener('click', function() { modal.classList.remove('hidden'); });
    if (closeBtn) closeBtn.addEventListener('click', function() { modal.classList.add('hidden'); });
    if (modal) modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.classList.add('hidden');
    });

    // переключение вкладок
    var tabLogin  = document.getElementById('tabLogin');
    var tabReg    = document.getElementById('tabReg');
    var loginForm = document.getElementById('loginForm');
    var regForm   = document.getElementById('regForm');

    if (tabLogin) tabLogin.addEventListener('click', function() {
        tabLogin.classList.add('active');
        tabReg.classList.remove('active');
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
    });

    if (tabReg) tabReg.addEventListener('click', function() {
        tabReg.classList.add('active');
        tabLogin.classList.remove('active');
        regForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // форма входа
    if (loginForm) loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var email = document.getElementById('loginEmail');
        var pass  = document.getElementById('loginPass');
        var valid = true;

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            email.classList.add('error');
            document.getElementById('loginEmailErr').textContent = 'Введите корректный email';
            valid = false;
        } else {
            email.classList.remove('error');
            document.getElementById('loginEmailErr').textContent = '';
        }

        if (!pass.value) {
            pass.classList.add('error');
            document.getElementById('loginPassErr').textContent = 'Введите пароль';
            valid = false;
        } else {
            pass.classList.remove('error');
            document.getElementById('loginPassErr').textContent = '';
        }

        if (!valid) return;

        var result = Auth.login(email.value, pass.value);
        if (result.ok) {
            location.reload();
        } else {
            document.getElementById('loginErr').textContent = result.err;
        }
    });

    // форма регистрации
    if (regForm) regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        var name  = document.getElementById('regName');
        var email = document.getElementById('regEmail');
        var pass  = document.getElementById('regPass');
        var pass2 = document.getElementById('regPass2');
        var valid = true;

        if (!name.value.trim()) {
            name.classList.add('error');
            document.getElementById('regNameErr').textContent = 'Введите имя';
            valid = false;
        } else {
            name.classList.remove('error');
            document.getElementById('regNameErr').textContent = '';
        }

        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            email.classList.add('error');
            document.getElementById('regEmailErr').textContent = 'Введите корректный email';
            valid = false;
        } else {
            email.classList.remove('error');
            document.getElementById('regEmailErr').textContent = '';
        }

        if (pass.value.length < 6) {
            pass.classList.add('error');
            document.getElementById('regPassErr').textContent = 'Минимум 6 символов';
            valid = false;
        } else {
            pass.classList.remove('error');
            document.getElementById('regPassErr').textContent = '';
        }

        if (pass.value !== pass2.value) {
            pass2.classList.add('error');
            document.getElementById('regPass2Err').textContent = 'Пароли не совпадают';
            valid = false;
        } else {
            pass2.classList.remove('error');
            document.getElementById('regPass2Err').textContent = '';
        }

        if (!valid) return;

        var result = Auth.register(name.value.trim(), email.value, pass.value);
        if (result.ok) {
            location.reload();
        } else {
            email.classList.add('error');
            document.getElementById('regEmailErr').textContent = result.err;
        }
    });

});
