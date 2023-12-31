/*=============== POLE "products" ===============*/
const products = [
  {
    name: 'Sněhová koule',
    'src-img': 'assets/img/accessory1.png',
    price: 94.5,
    stock: 4,
    description: 'Zábavné těžítko',
  },
  {
    name: 'Vánoční lízátko',
    'src-img': 'assets/img/accessory2.png',
    price: 15.4,
    stock: 10,
    description: 'Vánoční dobroty',
  },
  {
    name: 'Andělíček',
    'src-img': 'assets/img/accessory3.png',
    price: 34.2,
    stock: 18,
    description: 'Vánoční dekorace',
  },
  {
    name: 'Červená baňka',
    'src-img': 'assets/img/accessory4.png',
    price: 12.5,
    stock: 37,
    description: 'Přináší štěstí',
  },
  {
    name: 'Vánoční dárek',
    'src-img': 'assets/img/accessory5.png',
    price: 99.99,
    stock: 99,
    description: 'Překvapení uvnitř',
  },
  {
    name: 'Zelená baňka',
    'src-img': 'assets/img/accessory6.png',
    price: 15.2,
    stock: 85,
    description: 'Vánoční dekorace',
  },
  {
    name: 'Vánoční stromek',
    'src-img': 'assets/img/accessory7.png',
    price: 299.5,
    stock: 22,
    description: 'Blikající stormeček',
  },
  {
    name: 'Santova čepice',
    'src-img': 'assets/img/accessory8.png',
    price: 99.99,
    stock: 4,
    description: 'Zateplená čepice',
  },
  {
    name: 'Vánoční cukroví',
    'src-img': 'assets/img/accessory9.png',
    price: 180.0,
    stock: 970,
    description: 'Cukroví (cena za 1kg)',
  },
  {
    name: 'Santův sob',
    'src-img': 'assets/img/accessory10.png',
    price: 99449.2,
    stock: 13,
    description: 'Obsahuje dáreček',
  },
  {
    name: 'Zvonky štěstí',
    'src-img': 'assets/img/accessory11.png',
    price: 299.99,
    stock: 18,
    description: 'Zazvoň pro Vánoce',
  },
  {
    name: 'Vánoční věnec',
    'src-img': 'assets/img/accessory12.png',
    price: 174.1,
    stock: 2,
    description: 'Vánoční dekorace',
  },
  {
    name: 'Sněžné sáně',
    'src-img': 'assets/img/accessory13.png',
    price: 0.99,
    stock: 150,
    description: 'AKCE - není sníh',
  },
];

/*=============== DEKLARACE GLOBÁLNÍCH PROMĚNNÝCH ===============*/
const overlay = document.querySelector('.main__overlay');
const overlayBox = document.querySelector('.main__overlay__article');
const closeBtn = document.querySelector('#main-close-btn');

const darkTheme = 'dark-theme';
const iconTheme = 'ri-moon-line';
const volume_level = 0.2; // Nastavení hlasitosti na 20%

/*=============== Funkce pro formátování ceny na dvě desetinná místa ===============*/
function formatPrice(price) {
  return price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/*=============== Funkce pro generování HTML kódu ===============*/
function generateProductHTML(item) {
  let originalprice = formatPrice(item.price * 1.3);
  let displayedPrice = formatPrice(item.price);

  return `
    <div class="swiper-slide accessory__content">
      <span class="accessory__label">Vánoce 2023</span>
      <div class="accessory__stock">
        <span>Skladem<br><span class="accessory__stock__number">${item.stock}</span> ks</span>
      </div>
      <img src="${item['src-img']}" alt="${item.name} obrázek" class="accessory__img">
      <h3 class="accessory__title">${item.name}</h3>
      <span class="accessory__description">${item.description}</span>
      <div class="accessory__price__container">
        <span class="accessory__original__price">${originalprice} Kč</span>
        <span class="accessory__price">${displayedPrice} Kč</span>
      </div>
      <a href="#" class="button accessory__button"><i class='ri-shopping-cart-line'></i></a>
    </div>
  `;
}

/*=============== Funkce pro vygenerování všech produktů v poli PRODUCTS ===============*/
function generateProducts() {
  const productsContainer = document.querySelector(
    '.accessory__container.swiper-wrapper'
  );
  productsContainer.innerHTML = ``;

  products.forEach(function (item) {
    const productHTML = generateProductHTML(item);
    productsContainer.innerHTML += productHTML;
  });
}

// Funkce pro zobrazení/zavření overlay
function toggleOverlay() {
  overlay.classList.toggle('show-overlay');
  overlayBox.classList.toggle('show-overlay');
}

// Funkce pro obsluhu kliknutí na tlačítko přidání do košíku
function handleAddToCartClick() {
  const shoppingCartButtons = document.querySelectorAll('.accessory__button');

  shoppingCartButtons.forEach(button => {
    button.addEventListener('click', toggleOverlay);
  });

  closeBtn.addEventListener('click', toggleOverlay);
  overlay.addEventListener('click', toggleOverlay);
}

/*=============== GENEROVÁNÍ PRODUKTŮ Z POLE PRODCUTS ===============*/
document.addEventListener('DOMContentLoaded', function () {
  /*=============== Spustit generování produktů po načtení DOM ===============*/
  generateProducts();
  handleAddToCartClick();

  /*=============== SWIPER JS===============*/
  var swiper = new Swiper('.mySwiper', {
    effect: 'cards',
    grabCursor: true,
  });

  /*=============== TLAČÍTKO HUDBY ===============*/
  var backgroundMusic = document.getElementById('background-music');
  backgroundMusic.volume = volume_level;

  var navVolume = document.getElementById('nav-volume');
  var volumeIcon = navVolume.querySelector('.ri-volume-mute-line');
  var volumeIcon2 = navVolume.querySelector('.ri-volume-up-line');

  function toggleMusic() {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      volumeIcon.classList.remove('ri-volume-mute-line');
      volumeIcon.classList.add('ri-volume-up-line');
      volumeIcon2.classList.remove('ri-volume-mute-line');
      volumeIcon2.classList.add('ri-volume-up-line');
      navVolume.classList.add('nav-volume-active'); // Přidání třídy, když hudba hraje
    } else {
      backgroundMusic.pause();
      volumeIcon.classList.add('ri-volume-mute-line');
      volumeIcon.classList.remove('ri-volume-up-line');
      volumeIcon2.classList.add('ri-volume-mute-line');
      volumeIcon2.classList.remove('ri-volume-up-line');
      navVolume.classList.remove('nav-volume-active'); // Odebrání třídy, když hudba nehraje
    }
  }

  navVolume.addEventListener('click', function () {
    toggleMusic();
  });

  //   konec DOMContentLoaded
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const themeButton = document.getElementById('nav-theme');
const iconTheme1 = document.querySelector('#theme-icon1');
const iconTheme2 = document.querySelector('#theme-icon2');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'ri-moon-line'
    : 'ri-lightbulb-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
}

const replaceIcons = () => {
  if (iconTheme1.classList.contains('ri-lightbulb-line')) {
    iconTheme1.classList.add('ri-lightbulb-line');
    iconTheme1.classList.remove('ri-moon-line');
    iconTheme2.classList.add('ri-moon-line');
    iconTheme2.classList.remove('ri-lightbulb-line');
  } else {
    iconTheme1.classList.add('ri-moon-line');
    iconTheme1.classList.remove('ri-lightbulb-line');
    iconTheme2.classList.add('ri-lightbulb-line');
    iconTheme2.classList.remove('ri-moon-line');
  }
};

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  // themeButton.classList.toggle(iconTheme);
  replaceIcons();

  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
