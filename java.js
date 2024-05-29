//MenuLinks
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

//Retrieve and store main
const mainEl = document.querySelector("main");

//Change the main elements background color
mainEl.style.background = "var(--main-bg)";

//Inject an h1 with text into main
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
