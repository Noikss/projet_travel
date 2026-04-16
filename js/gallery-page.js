var GALLERY_DATA = [
    { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80', label: 'Мальдивы' },
    { src: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1400&q=80', label: 'Венеция' },
    { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80', label: 'Альпы' },
    { src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=80', label: 'Отель на воде, Мальдивы' },
    { src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1400&q=80', label: 'Санторини, Греция' },
    { src: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1400&q=80', label: 'Стамбул' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80', label: 'Норвежские фьорды' },
    { src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1400&q=80', label: 'Отель, Дубай' },
    { src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1400&q=80', label: 'Пхукет, Таиланд' },
    { src: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1400&q=80', label: 'Барселона' },
    { src: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1400&q=80', label: 'Тропический закат' },
    { src: 'https://images.unsplash.com/photo-1540541338537-0ebf4eb6b5e0?w=1400&q=80', label: 'Infinity pool' },
    { src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1400&q=80', label: 'Тропический пляж' },
    { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1400&q=80', label: 'Париж' },
    { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80', label: 'Горный пейзаж' },
    { src: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1400&q=80', label: 'Вилла на берегу' },
    { src: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1400&q=80', label: 'Рим, Италия' },
    { src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=80', label: 'Ночные огни города' },
    { src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1400&q=80', label: 'Лазурное море' },
    { src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&q=80', label: 'Люкс номер' },
];

var lbIdx = 0;
var visIdxs = GALLERY_DATA.map(function(_, i) { return i; });

function openLightbox(idx) {
    lbIdx = idx;
    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.id = 'lightbox';

    var closeBtn = document.createElement('button');
    closeBtn.className = 'lightbox__close';
    closeBtn.textContent = '✕';
    closeBtn.onclick = closeLightbox;

    var prevBtn = document.createElement('button');
    prevBtn.className = 'lightbox__nav lightbox__prev';
    prevBtn.innerHTML = '&#8592;';
    prevBtn.onclick = function() { lbNav(-1); };

    var img = document.createElement('img');
    img.id = 'lbImg';
    img.src = GALLERY_DATA[idx].src;
    img.alt = GALLERY_DATA[idx].label;

    var nextBtn = document.createElement('button');
    nextBtn.className = 'lightbox__nav lightbox__next';
    nextBtn.innerHTML = '&#8594;';
    nextBtn.onclick = function() { lbNav(1); };

    var caption = document.createElement('div');
    caption.className = 'lightbox__caption';
    caption.id = 'lbCap';
    caption.textContent = GALLERY_DATA[idx].label;

    lb.appendChild(closeBtn);
    lb.appendChild(prevBtn);
    lb.appendChild(img);
    lb.appendChild(nextBtn);
    lb.appendChild(caption);

    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';

    lb.addEventListener('click', function(e) {
        if (e.target === lb) closeLightbox();
    });
}

function closeLightbox() {
    var lb = document.getElementById('lightbox');
    if (lb) {
        lb.remove();
        document.body.style.overflow = '';
    }
}

function lbNav(dir) {
    var pos = visIdxs.indexOf(lbIdx);
    lbIdx = visIdxs[(pos + dir + visIdxs.length) % visIdxs.length];
    document.getElementById('lbImg').src = GALLERY_DATA[lbIdx].src;
    document.getElementById('lbCap').textContent = GALLERY_DATA[lbIdx].label;
}

document.addEventListener('keydown', function(e) {
    if (!document.getElementById('lightbox')) return;
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'Escape') closeLightbox();
});

document.querySelectorAll('.gf-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.gf-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-cat');
        visIdxs = [];
        document.querySelectorAll('.gallery-item').forEach(function(item) {
            var show = cat === 'all' || item.getAttribute('data-cat') === cat;
            item.style.display = show ? '' : 'none';
            if (show) visIdxs.push(parseInt(item.getAttribute('data-idx')));
        });
    });
});
