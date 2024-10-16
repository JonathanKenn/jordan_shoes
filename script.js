//Toggle class active utk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

//ketika humburger menu diklik (ARROW FUNCTION)
document.querySelector('#hamburger-evolution').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik diluar elemen
const hm = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');
// const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  // if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
  //   searchForm.classList.remove('active');
  // }
  // if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
  //   shoppingCart.classList.remove('active');
  // }
});

// const card = document.querySelector('.evolution-card');

// card.addEventListener('click', function () {
//   preview.style.display = 'flex';
// });

document.addEventListener('DOMContentLoaded', () => {
  const jordanData = {
    1: {
      title: 'Jordan 1',
      description:
        "Released in 1985, the Air Jordan 1 broke new ground with its bold colors and high-top design. This revolutionary sneaker not only challenged the NBA's uniform policy but also captured the imagination of fans and athletes alike. Its unparalleled style and performance set the standard for all future releases, making it a timeless icon in the world of basketball and fashion.",
      designer: 'DESIGNER : Peter Moore',
      jumboImage: 'img/img-full/jordan1.jpg',
      thumbnails: ['img/img-full/jordan1.jpg', 'img/img-full/jordan2.jpg', 'img/img-full/jordan3.jpg', 'img/img-full/jordan4.jpg', 'img/img-full/jordan5.jpg'],
    },
    2: {
      title: 'Jordan 2',
      description:
        'Introduced in 1986, the Air Jordan 2 brought a touch of luxury to the basketball court. Designed in Italy, this sneaker featured premium materials like faux lizard skin and a sleek silhouette. The Air Jordan 2 emphasized style and performance, setting a new standard for basketball footwear and paving the way for future innovations in sneaker design.',
      designer: 'DESIGNER : Peter Moore & Bruce Kilgore',
      jumboImage: 'img/img-full/jordan2.jpg',
      thumbnails: ['img/img-full/jordan2.jpg', 'img/img-full/jordan3.jpg', 'img/img-full/jordan4.jpg', 'img/img-full/jordan5.jpg', 'img/img-full/jordan6.jpg'],
    },
    3: {
      title: 'Jordan 3',
      description:
        'In 1988, the Air Jordan 3 debuted, featuring the iconic Jumpman logo and elephant print detailing. Designed by Tinker Hatfield, this sneaker combined high fashion with athletic performance. The Air Jordan 3 was the first to incorporate a visible Air unit in the heel, offering enhanced cushioning and comfort. Its bold design and innovative features solidified its status as a cultural icon and a favorite among sneaker enthusiasts.',
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan3.jpg',
      thumbnails: ['img/img-full/jordan3.jpg', 'img/img-full/jordan4.jpg', 'img/img-full/jordan6.jpg', 'img/img-full/jordan5.jpg', 'img/img-full/jordan7.jpg'],
    },
    4: {
      title: 'Jordan 4',
      description:
        "Released in 1989, the Air Jordan 4 continued Tinker Hatfield's legacy of innovative design. This model introduced mesh panels for breathability and plastic wing eyelets for added support. Its unique style and practical enhancements made it a hit on and off the court. The Air Jordan 4's appearance in Spike Lee's film 'Do the Right Thing' further cemented its place in pop culture history.",
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan4.jpg',
      thumbnails: ['img/img-full/jordan4.jpg', 'img/img-full/jordan5.jpg', 'img/img-full/jordan7.jpg', 'img/img-full/jordan6.jpg', 'img/img-full/jordan8.jpg'],
    },
    5: {
      title: 'Jordan 5',
      description:
        'Inspired by World War II fighter planes, the Air Jordan 5 made its debut in 1990. This model featured a reflective tongue, translucent rubber soles, and lace locks for a secure fit. The aggressive design and technological advancements made the Air Jordan 5 a standout. Its influence extended beyond basketball, as it became a staple in streetwear fashion and a favorite among collectors.',
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan5.jpg',
      thumbnails: ['img/img-full/jordan5.jpg', 'img/img-full/jordan6.jpg', 'img/img-full/jordan8.jpg', 'img/img-full/jordan7.jpg', 'img/img-full/jordan9.jpg'],
    },
    6: {
      title: 'Jordan 6',
      description:
        "The Air Jordan 6, launched in 1991, marked another milestone in sneaker design. With visible Air cushioning and a sleek, aerodynamic silhouette inspired by Michael Jordan's sports car, this model offered unparalleled comfort and style. The Air Jordan 6 was instrumental in helping MJ secure his first NBA Championship, making it a symbol of victory and excellence.",
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan6.jpg',
      thumbnails: ['img/img-full/jordan6.jpg', 'img/img-full/jordan3.jpg', 'img/img-full/jordan2.jpg', 'img/img-full/jordan7.jpg', 'img/img-full/jordan1.jpg'],
    },
    7: {
      title: 'Jordan 7',
      description:
        "Introduced in 1992, the Air Jordan 7 featured a Huarache-inspired design for a snug fit and enhanced support. This model was notable for its vibrant colorways and geometric patterns, reflecting African tribal art. The Air Jordan 7 accompanied Michael Jordan during the 'Dream Team' Olympics, becoming a symbol of global dominance and cultural influence.",
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan7.jpg',
      thumbnails: ['img/img-full/jordan7.jpg', 'img/img-full/jordan3.jpg', 'img/img-full/jordan5.jpg', 'img/img-full/jordan4.jpg', 'img/img-full/jordan6.jpg'],
    },
    8: {
      title: 'Jordan 8',
      description:
        "Debuting in 1993, the Air Jordan 8 stood out with its unique cross-strap design and vibrant colors. Known as the 'Punisher,' this model provided maximum lockdown support and cushioning. The Air Jordan 8 saw MJ clinch his third consecutive NBA Championship, solidifying its legacy as a high-performance sneaker synonymous with excellence and triumph.",
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan8.jpg',
      thumbnails: ['img/img-full/jordan8.jpg', 'img/img-full/jordan9.jpg', 'img/img-full/jordan2.jpg', 'img/img-full/jordan1.jpg', 'img/img-full/jordan3.jpg'],
    },
    9: {
      title: 'Jordan 9',
      description:
        "Released in 1993, the Air Jordan 9 was the first model to launch after Michael Jordan's initial retirement from basketball. Designed to reflect MJ's global influence, this sneaker featured inscriptions in various languages on the outsole, symbolizing universal appeal. Although MJ never wore the Air Jordan 9 on the court, its design and cultural significance continued to resonate with fans worldwide.",
      designer: 'DESIGNER : Tinker Hatfield',
      jumboImage: 'img/img-full/jordan9.jpg',
      thumbnails: ['img/img-full/jordan9.jpg', 'img/img-full/jordan4.jpg', 'img/img-full/jordan1.jpg', 'img/img-full/jordan5.jpg', 'img/img-full/jordan2.jpg'],
    },
    // Add similar data for other Jordan shoes
  };

  document.querySelectorAll('.evolution-card').forEach((card) => {
    card.addEventListener('click', () => {
      const jordanId = card.getAttribute('data-jordan');
      if (jordanData[jordanId]) {
        showPopup(jordanData[jordanId]);
      }
    });
  });
});

function showPopup(data) {
  document.getElementById('jumbo').src = data.jumboImage;
  document.getElementById('popupTitle').textContent = data.title;
  document.getElementById('popupDescription').textContent = data.description;
  document.getElementById('designerJordan').textContent = data.designer;

  const thumbnailContainer = document.getElementById('thumbnail');
  thumbnailContainer.innerHTML = '';
  data.thumbnails.forEach((src) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('thumb');
    thumbnailContainer.appendChild(img);
  });

  const popup = document.getElementById('popUpDetail');
  popup.style.display = 'flex';
  requestAnimationFrame(() => {
    popup.classList.add('show');
  });
}

function closePopup() {
  const popup = document.getElementById('popUpDetail');
  popup.classList.remove('show');
  popup.addEventListener(
    'transitionend',
    () => {
      popup.style.display = 'none';
    },
    { once: true }
  );
}

const container = document.querySelector('.containerGallery');
container.addEventListener('click', function (e) {
  const jumbo = document.querySelector('.jumbo');
  const thumbs = document.querySelectorAll('.thumb');
  //cek apakah yg diklik adalah thumb
  if (e.target.className == 'thumb') {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = 'thumb';
    });

    e.target.classList.add('activeFade');
  }
});

// const x = document.querySelector('.close');
// const preview = document.querySelector('.popUpDetail');

// x.addEventListener('click', function () {
//   preview.style.display = 'none';
// });

// //toggle class active untuk search form

// const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');

// document.querySelector('#search-button').onclick = (e) => {
//   searchForm.classList.toggle('active');
//   searchBox.focus(); //agar saat diklick langsung fokus ke searchboxnya
//   e.preventdefault();
// };

// //toggle class active utk shopping cart
// const shoppingCart = document.querySelector('.shopping-cart');
// document.querySelector('#shopping-cart-button').onclick = (e) => {
//   shoppingCart.classList.toggle('active');
//   e.preventdefault();
// };

// // modal box
// const itemDetailModal = document.querySelector('#item-detail-modal');
// const itemDetailButtons = document.querySelectorAll('.item-detail-button');

// itemDetailButtons.forEach((btn) => {
//   btn.onclick = (e) => {
//     itemDetailModal.style.display = 'flex';
//     e.preventdefault();
//   };
// });

// //klik tombol close modal
// document.querySelector('.modal .close-icon').onclick = (e) => {
//   itemDetailModal.style.display = 'none';
//   e.preventdefault();
// };

// //klik diluar modal
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = 'none';
//   }
// };
