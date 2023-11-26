import {Price} from './Classes/Price';
import {Product} from './Classes/Product';
import {Review} from './Classes/Review';

const productos = document.getElementById("product")

let price = new Price("USD", 339);
let product = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.meda-amazoncom/images/l/810DvHOZ9nL—AC_UL320_.jpg"
)
let review = new Review("4.6", 73);


