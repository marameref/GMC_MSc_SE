// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const plusBtns = document.querySelectorAll(".fa-plus-circle");
  const minusBtns = document.querySelectorAll(".fa-minus-circle");
  const trashBtns = document.querySelectorAll(".fa-trash-alt");
  const heartBtns = document.querySelectorAll(".fa-heart");
  const totalPriceSpan = document.querySelector(".total");

  updateTotal();

  // ➕ Increment Quantity
  plusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const quantityElem = btn.parentElement.querySelector(".quantity");
      quantityElem.textContent = parseInt(quantityElem.textContent) + 1;
      updateTotal();
    });
  });

  // ➖ Decrement Quantity
  minusBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const quantityElem = btn.parentElement.querySelector(".quantity");
      let currentQty = parseInt(quantityElem.textContent);
      if (currentQty > 0) {
        quantityElem.textContent = currentQty - 1;
        updateTotal();
      }
    });
  });

  // 🗑️ Delete Item
  trashBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const productCard = btn.closest(".card-body");
      productCard.remove();
      updateTotal();
    });
  });

  // ❤️ Toggle Like
  heartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      btn.classList.toggle("liked");
      btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
  });

  // 💰 Calculate Total Price
  function updateTotal() {
    let total = 0;
    const allCards = document.querySelectorAll(".card-body");

    allCards.forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const priceText = card.querySelector(".unit-price").textContent;
      const unitPrice = parseFloat(priceText.replace("$", "").trim());
      total += quantity * unitPrice;
    });

    totalPriceSpan.textContent = `${total} $`;
  }
});
