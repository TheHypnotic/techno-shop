import iphoneimg from "./iphone.png";
import macimg from "./mac.png";
import ps5img from "./ps5.jpg";

interface ShowCase {
  h2: string;
  detail: string;
  img: string;
}
export const showcaseList: ShowCase[] = [
  {
    h2: "جدیدترین محصولات اپل",
    detail: "خرید جدید ترین محصولات اپل با گارانتی",
    img: iphoneimg,
  },
  {
    h2: "بهترین لپ تاپ های جهان",
    detail: "بروزترین لپ تاپ های جهان با قمیت مناسب و تخفیف های شگفت انگیز",
    img: macimg,
  },
  {
    h2: "کنسول های بازی به تخفیف های باور نکردنی",
    detail: "لذت بازی کردن با کیفیت بالا",
    img: ps5img,
  },
];
