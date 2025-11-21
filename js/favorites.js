import { getCart } from "./main.js";

const selectedList = document.querySelector(".selected-order__list");
const orderAlternative = document.querySelector(".order__alternative");

function renderMarkup() {
  const favoritesItems = getCart();

  if (favoritesItems.length > 0) {
    orderAlternative.classList.add("hidden");
    selectedList.classList.remove("hidden");

    selectedList.innerHTML = favoritesItems
      .map((item) => createCardMurkap(item))
      .join("");
  } else {
    selectedList.classList.add("hidden");
    orderAlternative.classList.remove("hidden");
  }
}

renderMarkup();
selectedList.addEventListener("click", (e) => {
  const btn = e.target.closest(".dish__delete");
  if (!btn) return;

  const li = btn.closest("li");
  const id = Number(li.id);
  li.remove();

  const cart = getCart().filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderMarkup();
});

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
                      <button class="dish__delete">
                        <svg class="dish__add-svg" width="18" height="18">
                          <use href="./images/symbol-defs.svg#icon-minus"></use>
                        </svg>
                        Видалити
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
