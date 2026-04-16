var ALL_TOURS = [
    { id: 1,  name: 'Мальдивы',              subtitle: 'Пляжный рай Индийского океана',     country: 'Мальдивы', price: 89900,  nights: 10, type: 'beach',     rating: 4.9, img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80' },
    { id: 2,  name: 'Турция — Анталья',      subtitle: 'Лазурное побережье и история',      country: 'Турция',   price: 42500,  nights: 7,  type: 'beach',     rating: 4.6, img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80' },
    { id: 3,  name: 'Италия',                subtitle: 'Рим, Флоренция, Венеция',           country: 'Италия',   price: 67000,  nights: 8,  type: 'excursion', rating: 4.8, img: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&q=80' },
    { id: 4,  name: 'ОАЭ — Дубай',          subtitle: 'Город будущего в пустыне',           country: 'ОАЭ',      price: 55000,  nights: 5,  type: 'city',      rating: 4.7, img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80' },
    { id: 5,  name: 'Греция — Санторини',    subtitle: 'Белые домики над синим морем',      country: 'Греция',   price: 73000,  nights: 7,  type: 'beach',     rating: 4.9, img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80' },
    { id: 6,  name: 'Таиланд — Пхукет',     subtitle: 'Экзотика Юго-Восточной Азии',       country: 'Таиланд',  price: 61000,  nights: 10, type: 'beach',     rating: 4.5, img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80' },
    { id: 7,  name: 'Испания — Барселона',   subtitle: 'Гауди, море и тапас',               country: 'Испания',  price: 58000,  nights: 7,  type: 'excursion', rating: 4.7, img: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=600&q=80' },
    { id: 8,  name: 'Турция — Стамбул',     subtitle: 'Мост между Европой и Азией',        country: 'Турция',   price: 38000,  nights: 5,  type: 'excursion', rating: 4.6, img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80' },
    { id: 9,  name: 'Франция — Париж',      subtitle: 'Город любви и высокой моды',        country: 'Франция',  price: 79000,  nights: 5,  type: 'excursion', rating: 4.8, img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80' },
    { id: 10, name: 'Египет — Хургада',     subtitle: 'Коралловые рифы Красного моря',     country: 'Египет',   price: 35000,  nights: 7,  type: 'beach',     rating: 4.4, img: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=600&q=80' },
    { id: 11, name: 'Япония — Токио',       subtitle: 'Будущее и традиции в одном городе', country: 'Япония',   price: 115000, nights: 10, type: 'city',      rating: 4.9, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80' },
    { id: 12, name: 'Бали',                 subtitle: 'Остров богов и серфинга',            country: 'Бали',     price: 68000,  nights: 10, type: 'beach',     rating: 4.8, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80' },
    { id: 13, name: 'Греция — Крит',        subtitle: 'Легенды и бесконечное лето',        country: 'Греция',   price: 52000,  nights: 7,  type: 'beach',     rating: 4.6, img: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80' },
    { id: 14, name: 'Испания — Мадрид',     subtitle: 'Страсть, футбол и фламенко',        country: 'Испания',  price: 49000,  nights: 5,  type: 'city',      rating: 4.5, img: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&q=80' },
    { id: 15, name: 'Египет — Шарм-эль-Шейх', subtitle: 'Дайвинг и роскошные отели',      country: 'Египет',   price: 39000,  nights: 7,  type: 'beach',     rating: 4.3, img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80' },
    { id: 16, name: 'Куба — Гавана',        subtitle: 'Ром, сальса и ретро-атмосфера',     country: 'Куба',     price: 98000,  nights: 10, type: 'excursion', rating: 4.7, img: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=600&q=80' },
    { id: 17, name: 'Мальдивы — Атолл',    subtitle: 'Приватный остров, вилла на воде',    country: 'Мальдивы', price: 145000, nights: 7,  type: 'beach',     rating: 5.0, img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
    { id: 18, name: 'Турция — Бодрум',     subtitle: 'Яхты, белые улочки и закаты',       country: 'Турция',   price: 46000,  nights: 7,  type: 'beach',     rating: 4.5, img: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80' },
];

var PER_PAGE = 6;
var currentPage = 1;
var filteredTours = ALL_TOURS.slice();

function renderPage(tours, page) {
    var grid = document.getElementById('catalogGrid');
    var start = (page - 1) * PER_PAGE;
    var pageTours = tours.slice(start, start + PER_PAGE);

    if (!pageTours.length) {
        grid.innerHTML = '<p style="color: var(--light); padding: 40px 0; grid-column: 1/-1">По вашим фильтрам туров не найдено</p>';
        return;
    }

    var html = '';
    pageTours.forEach(function(t) {
        html += '<div class="tour-card" data-id="' + t.id + '">';
        html += '<div class="tour-card__img" style="background-image: url(\'' + t.img + '\')">';
        if (t.rating >= 4.8) html += '<span class="tour-card__badge">Хит</span>';
        html += '<button class="tour-card__fav" onclick="toggleFav(' + t.id + ')">&#9825;</button>';
        html += '</div>';
        html += '<div class="tour-card__body">';
        html += '<h3 class="tour-card__name">' + t.name + '</h3>';
        html += '<div class="tour-card__meta"><span>' + t.subtitle + '</span></div>';
        html += '<div class="tour-card__meta"><span>' + t.nights + ' ночей</span></div>';
        html += '<div class="tour-card__rating">' + starsHtml(t.rating) + ' <span>' + t.rating + '</span></div>';
        html += '<div class="tour-card__footer">';
        html += '<span class="tour-card__price">от ' + t.price.toLocaleString('ru') + ' ₽</span>';
        html += '<button class="btn-cart" onclick=\'addToCart({id:' + t.id + ',name:"' + t.name + ' — ' + t.nights + ' ночей",price:' + t.price + ',img:"' + t.img.replace('600', '300') + '"})\'>В корзину</button>';
        html += '</div></div></div>';
    });
    grid.innerHTML = html;
}

function starsHtml(r) {
    var full = Math.floor(r);
    var s = '';
    for (var i = 0; i < 5; i++) s += i < full ? '★' : '☆';
    return s;
}

function renderPagination(tours, page) {
    var total = Math.ceil(tours.length / PER_PAGE);
    var pag = document.getElementById('pagination');
    if (total <= 1) { pag.innerHTML = ''; return; }

    var html = '';
    for (var i = 1; i <= total; i++) {
        html += '<button class="page-btn' + (i === page ? ' active' : '') + '" onclick="goToPage(' + i + ')">' + i + '</button>';
    }
    pag.innerHTML = html;
}

function goToPage(page) {
    currentPage = page;
    renderPage(filteredTours, currentPage);
    renderPagination(filteredTours, currentPage);
    document.querySelector('.catalog__content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function applyFilters() {
    var country   = document.getElementById('filterCountry').value;
    var maxPrice  = parseInt(document.getElementById('filterPrice').value);
    var duration  = parseInt(document.getElementById('filterDuration').value) || 0;
    var typeBeach = document.getElementById('typeBeach').checked;
    var typeExc   = document.getElementById('typeExc').checked;
    var typeSki   = document.getElementById('typeSki').checked;
    var typeCity  = document.getElementById('typeCity').checked;
    var sort      = document.getElementById('catalogSort').value;
    var anyType   = typeBeach || typeExc || typeSki || typeCity;

    filteredTours = ALL_TOURS.filter(function(t) {
        if (country && t.country !== country) return false;
        if (t.price > maxPrice) return false;
        if (duration && t.nights > duration) return false;
        if (anyType) {
            var ok = false;
            if (typeBeach && t.type === 'beach') ok = true;
            if (typeExc   && t.type === 'excursion') ok = true;
            if (typeSki   && t.type === 'ski') ok = true;
            if (typeCity  && t.type === 'city') ok = true;
            if (!ok) return false;
        }
        return true;
    });

    if (sort === 'price_asc')  filteredTours.sort(function(a, b) { return a.price - b.price; });
    if (sort === 'price_desc') filteredTours.sort(function(a, b) { return b.price - a.price; });
    if (sort === 'rating')     filteredTours.sort(function(a, b) { return b.rating - a.rating; });

    document.getElementById('catalogCount').textContent = 'Найдено туров: ' + filteredTours.length;
    currentPage = 1;
    renderPage(filteredTours, 1);
    renderPagination(filteredTours, 1);
}

function resetFilters() {
    document.getElementById('filterCountry').value = '';
    document.getElementById('filterPrice').value = 120000;
    document.getElementById('priceVal').textContent = '120 000 ₽';
    document.getElementById('filterDuration').value = '';
    ['typeBeach', 'typeExc', 'typeSki', 'typeCity'].forEach(function(id) {
        document.getElementById(id).checked = false;
    });
    filteredTours = ALL_TOURS.slice();
    document.getElementById('catalogCount').textContent = 'Найдено туров: ' + filteredTours.length;
    currentPage = 1;
    renderPage(filteredTours, 1);
    renderPagination(filteredTours, 1);
}

document.getElementById('filterPrice').addEventListener('input', function() {
    document.getElementById('priceVal').textContent = parseInt(this.value).toLocaleString('ru') + ' ₽';
});

document.addEventListener('DOMContentLoaded', function() {
    // Поиск с главной страницы
    var search = sessionStorage.getItem('tm_search');
    if (search) {
        sessionStorage.removeItem('tm_search');
        document.getElementById('filterCountry').value = search;
    }
    filteredTours = ALL_TOURS.slice();
    document.getElementById('catalogCount').textContent = 'Найдено туров: ' + filteredTours.length;
    renderPage(filteredTours, 1);
    renderPagination(filteredTours, 1);

    // scroll and burger handled by main.js
});