document.addEventListener('DOMContentLoaded', function() {

    // ===== СЛАЙДЕР =====
    var slides = document.querySelectorAll('.slide');
    var dotsBox = document.getElementById('sliderDots');
    var btnPrev = document.getElementById('prevSlide');
    var btnNext = document.getElementById('nextSlide');

    if (slides.length > 0) {
        var index = 0;

        // создаём точки
        if (dotsBox) {
            for (var i = 0; i < slides.length; i++) {
                var dot = document.createElement('button');
                dot.className = 'slider__dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('data-i', i);
                dot.addEventListener('click', function() {
                    showSlide(parseInt(this.getAttribute('data-i')));
                });
                dotsBox.appendChild(dot);
            }
        }

        function showSlide(n) {
            slides[index].classList.remove('slide--active');
            if (dotsBox && dotsBox.children[index]) {
                dotsBox.children[index].classList.remove('active');
            }
            index = (n + slides.length) % slides.length;
            slides[index].classList.add('slide--active');
            if (dotsBox && dotsBox.children[index]) {
                dotsBox.children[index].classList.add('active');
            }
        }

        if (btnPrev) btnPrev.addEventListener('click', function() { showSlide(index - 1); });
        if (btnNext) btnNext.addEventListener('click', function() { showSlide(index + 1); });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft')  showSlide(index - 1);
            if (e.key === 'ArrowRight') showSlide(index + 1);
        });

        // автопрокрутка — один setInterval снаружи функции
        setInterval(function() { showSlide(index + 1); }, 5000);
    }

    // ===== ТЕНЬ ШАПКИ =====
    var header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('scrolled', window.scrollY > 40);
        });
    }

    // ===== БУРГЕР-МЕНЮ =====
    var burger = document.getElementById('burger');
    var nav    = document.getElementById('nav');
    if (burger && nav) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('open');
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('.nav__link').forEach(function(link) {
            link.addEventListener('click', function() {
                burger.classList.remove('open');
                nav.classList.remove('open');
            });
        });
        // закрывать по клику вне меню
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('open') &&
                !nav.contains(e.target) &&
                !burger.contains(e.target)) {
                burger.classList.remove('open');
                nav.classList.remove('open');
            }
        });
    }

    // ===== ПОИСК С ПОДСКАЗКАМИ =====
    var searchInput = document.getElementById('searchDest');
    var suggList    = document.getElementById('searchSuggestions');

    var destinations = [
        { name: 'Турция — Анталья',        flag: '🇹🇷' },
        { name: 'Турция — Стамбул',         flag: '🇹🇷' },
        { name: 'Мальдивы',                flag: '🏝' },
        { name: 'Италия — Рим',            flag: '🇮🇹' },
        { name: 'Италия — Флоренция',      flag: '🇮🇹' },
        { name: 'ОАЭ — Дубай',            flag: '🇦🇪' },
        { name: 'Греция — Санторини',      flag: '🇬🇷' },
        { name: 'Таиланд — Пхукет',        flag: '🇹🇭' },
        { name: 'Испания — Барселона',     flag: '🇪🇸' },
        { name: 'Египет — Хургада',        flag: '🇪🇬' },
        { name: 'Египет — Шарм-эль-Шейх', flag: '🇪🇬' },
        { name: 'Франция — Париж',         flag: '🇫🇷' },
        { name: 'Япония — Токио',          flag: '🇯🇵' },
        { name: 'Бали',                    flag: '🌴' },
        { name: 'Мексика — Канкун',        flag: '🇲🇽' }
    ];

    if (searchInput && suggList) {
        searchInput.addEventListener('input', function() {
            var query = searchInput.value.trim().toLowerCase();
            if (!query) { suggList.classList.add('hidden'); return; }
            var found = destinations.filter(function(d) {
                return d.name.toLowerCase().indexOf(query) !== -1;
            }).slice(0, 6);
            if (!found.length) { suggList.classList.add('hidden'); return; }
            suggList.innerHTML = found.map(function(d) {
                return '<li onclick="pickDest(\'' + d.name + '\')">' + d.flag + ' ' + d.name + '</li>';
            }).join('');
            suggList.classList.remove('hidden');
        });
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-field')) {
                suggList.classList.add('hidden');
            }
        });
    }

    var searchBtn = document.getElementById('searchBtn');
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            if (searchInput.value.trim()) {
                sessionStorage.setItem('tm_search', searchInput.value.trim());
            }
            window.location.href = 'catalog.html';
        });
    }

});

function pickDest(name) {
    var inp = document.getElementById('searchDest');
    var sug = document.getElementById('searchSuggestions');
    if (inp) inp.value = name;
    if (sug) sug.classList.add('hidden');
}
