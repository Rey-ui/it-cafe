const menuItems = [
  {
    id: 1,
    category: "main",
    src: "./images/dishes/chicken-in-cream-sauce.jpg",
    alt: "Куряче філе з травами",
    name: "Куряче філе з травами",
    description:
      "Ніжне філе, запечене з розмарином і часником. Легка та поживна страва для щоденного раціону.",
    price: 79,
    fullDescription:
      "Ніжне філе, запечене з натуральними травами, вершками та легким соусом. Ідеально підходить для легкого та збалансованого обіду.",
    ingredients: [
      "Куряче філе",
      "Розмарин",
      "Часник",
      "Вершки",
      "Сіль",
      "Перець",
    ],
    weight: "250 г",
    calories: 320,
  },
  {
    id: 2,
    category: "main",
    src: "./images/dishes/ragu.jpg",
    alt: "Рагу з овочів",
    name: "Рагу з овочів",
    description:
      "Тушковані сезонні овочі в легкому соусі, приготовані без зайвого жиру. Смак натуральності та тепла.",
    price: 65,
    fullDescription:
      "Легке овочеве рагу з сезонних овочів, тушкованих у власному соку з мінімумом спецій, щоб зберегти натуральний смак.",
    ingredients: ["Кабачок", "Баклажан", "Морква", "Цибуля", "Томатний соус"],
    weight: "300 г",
    calories: 210,
  },
  {
    id: 3,
    category: "main",
    src: "./images/dishes/meat-stake.jpg",
    alt: "Стейк зі свинини",
    name: "Стейк зі свинини",
    description:
      "Соковитий шматок свинини середньої прожарки з натуральними спеціями. Подається з легким соусом.",
    price: 98,
    fullDescription:
      "Стейк зі свіжої свинини, приготований до соковитої середньої прожарки, подається з легким соусом на основі натуральних спецій.",
    ingredients: ["Свинина", "Сіль", "Перець", "Тим'ян", "Соус"],
    weight: "280 г",
    calories: 450,
  },
  {
    id: 4,
    category: "soupes",
    src: "./images/dishes/cream-soup.jpg",
    alt: "Крем-суп з гарбуза",
    name: "Крем-суп з гарбуза",
    description:
      "Ніжний гарбузовий крем із вершками та мускатним горіхом. М’який, теплий і заспокійливий смак.",
    price: 55,
    fullDescription:
      "Кремова текстура гарбуза з вершками та мускатним горіхом створюють теплий, заспокійливий смак.",
    ingredients: ["Гарбуз", "Вершки", "Мускатний горіх", "Сіль"],
    weight: "330 г",
    calories: 240,
  },
  {
    id: 5,
    category: "soupes",
    src: "./images/dishes/chicken-bulion.png",
    alt: "Курячий бульйон",
    name: "Курячий бульйон",
    description:
      "Легкий домашній бульйон з курки та овочів. Ідеальний вибір для затишного обіду.",
    price: 49,
    fullDescription:
      "Ароматний легкий бульйон на курці з овочами. Заспокійливий та живильний.",
    ingredients: ["Курка", "Морква", "Цибуля", "Зелень"],
    weight: "350 мл",
    calories: 110,
  },
  {
    id: 6,
    category: "salads",
    src: "./images/dishes/fresh-salad.png",
    alt: "Салат зі свіжих овочів",
    name: "Салат зі свіжих овочів",
    description:
      "Огірок, помідор, зелень та легка заправка. Свіжий та збалансований смак.",
    price: 42,
    fullDescription:
      "Свіжі овочі з легкою оливковою заправкою — освіжаючий вибір.",
    ingredients: ["Помідор", "Огірок", "Зелень", "Олія", "Сіль"],
    weight: "200 г",
    calories: 120,
  },
  {
    id: 7,
    category: "salads",
    src: "./images/dishes/chiken-in-souce-saled.jpg",
    alt: "Салат з куркою та соусом йогурту",
    name: "Салат з куркою та соусом йогурту",
    description:
      "Куряче філе, салатний мікс та натуральний йогуртовий соус. Легкий та ситний варіант.",
    price: 65,
    fullDescription:
      "Ситний та легкий салат з курячим філе та натуральним йогуртовим соусом.",
    ingredients: ["Куряче філе", "Листя салату", "Йогурт", "Зелень"],
    weight: "220 г",
    calories: 260,
  },
  {
    id: 8,
    category: "coffee",
    src: "./images/dishes/capuchino.jpg",
    alt: "Капучино",
    name: "Капучино",
    description:
      "Ароматна кава з легкою молочною піною. Створює теплу атмосферу та заряджає енергією.",
    price: 45,
    fullDescription: "Класичний капучино з насиченою кавою та легкою піною.",
    ingredients: ["Еспресо", "Молоко"],
    weight: "250 мл",
    calories: 140,
  },
  {
    id: 9,
    category: "drinks",
    src: "./images/dishes/lymonad2.jpg",
    alt: "Лимонад класичний",
    name: "Лимонад класичний",
    description:
      "Свіжий домашній класичний лимонад із лимоном і м’ятою та льодом.",
    price: 39,
    fullDescription:
      "Освіжаючий домашній лимонад із цитрусами, м’ятою та льодом.",
    ingredients: ["Лимон", "М’ята", "Цукор", "Вода"],
    weight: "300 мл",
    calories: 95,
  },
  {
    id: 10,
    category: "deserts",
    src: "./images/dishes/sirnick.png",
    alt: "Сирник класичний",
    name: "Сирник класичний",
    description:
      "Домашній сирник з ніжною текстурою та легким ванільним ароматом.",
    price: 58,
    fullDescription: "Ніжний, трохи вологий сирник з ванільним ароматом.",
    ingredients: ["Творог", "Яйце", "Сахар", "Ваніль"],
    weight: "150 г",
    calories: 280,
  },
  {
    id: 11,
    category: "deserts",
    src: "./images/dishes/medovic.jpg",
    alt: "Медовик",
    name: "Медовик",
    description:
      "Традиційний торт з медовими коржами та м’яким кремом. Смак дитинства.",
    price: 62,
    fullDescription:
      "М’який, солодкий медовик із класичним кремом — смак дитинства.",
    ingredients: ["Мед", "Борошно", "Яйця", "Цукор", "Сметана"],
    weight: "140 г",
    calories: 330,
  },
  //new items
  {
    id: 12,
    category: "drinks",
    src: "./images/dishes/uzvar.png",
    alt: "Узвар",
    name: "Узвар",
    description: "Традиційний український напій із сухофруктів.",
    price: 25,
    fullDescription: "Традиційний український напій із сухофруктів.",
    ingredients: ["сухофрукти", "вода", "цукор"],
    weight: "250 мл",
    calories: 95,
  },
  {
    id: 13,
    category: "main",
    src: "./images/dishes/fish-fele.png",
    alt: "Рибне філе на пару",
    name: "Рибне філе на пару",
    description:
      "Ніжне філе тріски, приготоване на пару без додавання жиру. Легке, дієтичне та корисне.",
    price: 65,
    fullDescription:
      "Ніжне філе тріски, приготоване на пару без додавання жиру. Легке, дієтичне та корисне.",
    ingredients: ["філе тріски", "лимонний сік", "зелень", "сіль"],
    weight: "200 г",
    calories: 190,
  },
  {
    id: 14,
    category: "drinks",
    src: "./images/dishes/cumpot.png",
    alt: "Компот",
    name: "Компот",
    description: "Традиційний український напій із сухофруктів.",
    price: 25,
    fullDescription: "Традиційний український напій із сухофруктів.",
    ingredients: ["фрукти", "вода", "трішки цукру"],
    weight: "250 мл",
    calories: 90,
  },
  {
    id: 15,
    category: "main",
    src: "./images/dishes/pure-potato.png",
    alt: "Картопляне пюре",
    name: "Картопляне пюре",
    description:
      "Ніжне класичне пюре з вершковим маслом. Легкий гарнір, що пасує до будь-якого м’яса.",
    price: 39,
    fullDescription:
      "Ніжне класичне пюре з вершковим маслом. Легкий гарнір, що пасує до будь-якого м’яса.",
    ingredients: ["картопля", "вершкове масло", "молоко", "сіль"],
    weight: "180 г",
    calories: 198,
  },
  {
    id: 16,
    category: "main",
    src: "./images/dishes/cotleta-po-kievsky.png",
    alt: "Котлета по-київськи",
    name: "Котлета по-київськи",
    description:
      "Ніжне куряче м’ясо з вершковим маслом. Легкий гарнір, що пасує до будь-якого м’яса.",
    price: 115,
    fullDescription:
      "Ніжне куряче м’ясо з вершковим маслом. Легкий гарнір, що пасує до будь-якого м’яса.",
    ingredients: [
      "куряче філе",
      "вершкове масло",
      "панірувальні сухарі",
      "яйце",
      "борошно",
      "спеції",
    ],
    weight: "250 г",
    calories: 688,
  },
  {
    id: 17,
    category: "salads",
    src: "./images/dishes/cesar-salad.png",
    alt: "Салат Цезар",
    name: "Салат Цезар",
    description:
      "Класичний салат з курячим філе, листям салату, хрусткими грінками та соусом «Цезар».",
    price: 72,
    fullDescription:
      "Класичний салат з курячим філе, листям салату, хрусткими грінками та соусом «Цезар».",
    ingredients: [
      "куряче філе",
      "салат Ромен",
      "грінки",
      "соус «Цезар»",
      "пармезан",
    ],
    weight: "300 г",
    calories: 480,
  },
  {
    id: 18,
    category: "deserts",
    src: "./images/dishes/apple-shtrudel.png",
    alt: "Яблучний штрудель",
    name: "Яблучний штрудель",
    description:
      "Теплий штрудель із яблуками, корицею та тонким хрустким тістом.",
    price: 68,
    fullDescription:
      "Теплий штрудель із яблуками, корицею та тонким хрустким тістом.",
    ingredients: ["тісто", "яблука", "кориця", "цукор"],
    weight: "250 г",
    calories: 550,
  },
  {
    id: 19,
    category: "coffee",
    src: "./images/dishes/americanchik.png",
    alt: "Американо",
    name: "Американо",
    description: "-",
    price: 38,
    fullDescription: "-",
    ingredients: ["O", "__", "O"],
    weight: "180 мл",
    calories: 4,
  },
  {
    id: 20,
    category: "coffee",
    src: "./images/dishes/latte.png",
    alt: "Лате",
    name: "Лате",
    description: "-",
    price: 45,
    fullDescription: "-",
    ingredients: ["еспресо", "молоко"],
    weight: "250 мл",
    calories: 150,
  },
  {
    id: 21,
    category: "applications",
    src: "./images/dishes/bread.png",
    alt: "Хліб",
    name: "Хліб",
    description: "білий / житній",
    price: 10,
    fullDescription: "-",
    ingredients: ["мука"],
    weight: "40 г",
    calories: 120,
  },
  {
    id: 22,
    category: "applications",
    src: "./images/dishes/suhariki.png",
    alt: "Грінки часникові",
    name: "Грінки часникові",
    description: "-",
    price: 18,
    fullDescription: "-",
    ingredients: ["хліб", "часник", "олія"],
    weight: "50 г",
    calories: 175,
  },
  {
    id: 23,
    category: "applications",
    src: "./images/dishes/souces.png",
    alt: "Соуси",
    name: "Соуси",
    description: "йогуртовий, кетчуп, майонез, гірчиця",
    price: 45,
    fullDescription: "-",
    ingredients: ["O", "__", "O"],
    weight: "30 г",
    calories: 60,
  },
];
const LOCAL_KEY = "cart";
const menuContainer = document.querySelector(".menu-container");
const lists = {
  main: document.querySelector('[data-category="main"]'),
  soupes: document.querySelector('[data-category="soups"]'),
  salads: document.querySelector('[data-category="salads"]'),
  drinks: document.querySelector('[data-category="drinks"]'),
  deserts: document.querySelector('[data-category="deserts"]'),
  coffee: document.querySelector('[data-category="coffee"]'),
  applications: document.querySelector('[data-category="applications"]'),
};
let addBtn;
if (menuContainer) {
  menuContainer.addEventListener("click", onDishClick);
  menuContainer.addEventListener("click", renderMarkupCategory);
  renderMarkup();
}

export function getCart() {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || [];
}
function handleEscapeKeyPress(event, instance) {
  if (event.code === "Escape") {
    instance.close();
  }
}

function onDishClick(e) {
  const btn = e.target.closest(".dish__add");
  if (!btn) return;
  console.log(btn);
  const li = btn.closest(".category__item");
  const idItem = Number(li.id);
  const liItem = menuItems.find(({ id }) => {
    return id === idItem;
  });
  const {
    src,
    alt,
    name,
    description,
    price,
    fullDescription,
    ingredients,
    weight,
    calories,
  } = liItem;
  const instance = basicLightbox.create(
    `<div class="modal">
      <div class="modal-container">
        <div class="modal-top">
            <a class="modal-logo"><img
              src="./images/decor/logo.png"
              alt="наше лого"
              class="header__logo"/></a>
              <button type="button" class="close-btn">
                <svg class="close-svg" width="18" height="18">
                  <use href="./images/symbol-defs.svg#icon-plus"></use>
                </svg>
              </button>
            
          </div>
        <div class="modal-main">
          <h3 class="card__name">${name}</h3>
          <div class="card__info">  
            <img src="${src}" alt="${alt}" class="card__image"/>
            <div class="card__description">
                    <p class="description__text">
                      ${description}${fullDescription}
                    </p>
                    <div class="description__info">
                      <h4 class="ingredients__title">Інгредієнти</h4>
                      <ul class="description__ingredients">
                        ${ingredients
                          .map((el) => {
                            return `<li class="description__ingredient">${el}</li>`;
                          })
                          .join("")}
                      </ul>
                    </div>
                    <div class="description__params">
                      <p class="description__param">
                        <span class="description-param__name">Вага</span>
                        <span class="description-param__num">${weight}</span></p>
                      <p class="description__param">
                        <span class="description-param__name">Калорії</span>
                        <span class="description-param__num">${calories} ccal</span></p></p></div>
                    <span class="card__price">Ціна:${price} грн</span>
                    <div class="card__btn-wrapper">
                      <button class="card__add">У кошик<svg class="card__audio-svg" width="20" height="18">
                          <use
                            href="./images/symbol-defs.svg#icon-cart"
                          ></use>
                        </svg>
                      </button>
                      <button class="card-btn-audio">
                        <svg class="card__audio-svg" width="17" height="17">
                          <use
                            href="./images/symbol-defs.svg#icon-volume-medium"
                          ></use>
                        </svg>
                        Прослухати
                      </button>
                    </div>
              </div>
            </div>
        </div>
        </div>
    </div>`,
    {
      onShow: (instance) => {
        const btnClose = instance.element().querySelector(".close-btn");

        btnClose.addEventListener("click", () => {
          instance.close();
        });
        window.addEventListener("keydown", (event) =>
          handleEscapeKeyPress(event, instance)
        );
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", (event) =>
          handleEscapeKeyPress(event, instance)
        );
      },
    }
  );
  instance.show();
  addBtn = document.querySelector(".card__add");
  if (addBtn) {
    addBtn.addEventListener("click", () => addToCart(liItem));
  }
}
function addToCart(item) {
  const cart = getCart();
  cart.push(item);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(cart));
}
function renderMarkup() {
  for (const menuItem of menuItems) {
    lists[menuItem.category].insertAdjacentHTML(
      "beforeend",
      createCardMurkap(menuItem)
    );
  }
}
function renderMarkupCategory(e) {
  const categoryTitle = e.target.closest(".menu__category-title");
  if (!categoryTitle) return;

  const list = categoryTitle.nextElementSibling;
  const category = list.dataset.category;
  console.log(category);
  // const liItem = menuItems.find(({ id }) => {
  //   return id === idItem;
  // });
}
function createCardMurkap({
  id,
  category,
  src,
  alt,
  name,
  description,
  price,
}) {
  return `<li class="category__item" id="${id}" data-category= "${category}">
                  <img
                    src=${src}
                    alt=${alt}
                    class="dish__image"
                  />
                  <div class="dish__description">
                    <h4 class="dish__name">${name}</h4>
                    <p class="dish__text">
                      ${description}
                    </p>
                    <span class="dish__price">Ціна: ${price} грн</span>
                    <div class="dish__btn-wrapper">
                      <button class="dish__add">
                        <svg class="dish__add-svg" width="18" height="18">
                          <use href="./images/symbol-defs.svg#icon-plus"></use>
                        </svg>
                        Вибрати
                      </button>
                      <button class="dish-btn-audio">
                        <svg class="dish__audio-svg" width="17" height="17">
                          <use
                            href="./images/symbol-defs.svg#icon-volume-medium"
                          ></use>
                        </svg>
                        Прослухати
                      </button>
                    </div>
                  </div>
                </li>`;
}
