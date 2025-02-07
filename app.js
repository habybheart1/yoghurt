function orderNow() {
  let name = prompt("What is your name?");
  let email = prompt("Input you email address?");
  let country = prompt("Input your country?");
  country = country.toLowerCase().trim();
  if (country === "nigeria") {
    alert(
      "Dear " +
        name +
        " mode of payment would be sent to " +
        email +
        " ⬅ THANKS FOR THE PATRONAGE😃🛒"
    );
  } else {
    alert("OUT OF DELIVERY AXIS");
  }
}
let order = document.querySelector("button");
order.addEventListener("click", orderNow);
