const button = document.querySelector("button");

// button.onclick = function(){}

const buttonOnClick = () => {
  alert("button was clicked");
};

button.onclick = buttonOnClick;

const list = document.querySelector("ul");
const listItems = document.querySelectorAll("li");

// list.addEventListener("click", (event) => {
//   event.target.closest("li").classList.togle("highlight");
// });

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("highlight");
  });
});

function calcTax(tax) {
  function taxTax(amount) {
    return amount * tax;
  }
  return taxTax;
}

const TaxTaxTAx = calcTax(0.19);
const vatCalc = calcTax(0.25);

console.log(TaxTaxTAx(200));
console.log(vatCalc(200));

const arr = [0, 22, 85, 47, 15];

const bytwo = arr.map((byy) => byy * 2);

const bytwo2 = [];
for (num of arr) bytwo2.push(num * 2);

console.log(bytwo2);
console.log(bytwo);

const user = "Steven Thomas Williams"; //stw

function userShort(user) {
  const short = user
    .split(" ")
    .map((l) => l[0])
    .join("")
    .toLowerCase();

  return short;
}

// const short = user.toLowerCase().split(' ').map(let => let[0]).join('')

console.log(userShort('mahmoud Abo soliman'));
