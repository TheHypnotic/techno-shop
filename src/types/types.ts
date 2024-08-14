export interface ConsoleShowcaseItem {
  class: string;
  Image: string;
  title: string;
  paragraph: string;
}

export interface ShowcaseItem {
  h2: string;
  detail: string;
  img: string;
}

export interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed?: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  arrows?: boolean;
  rtl?: boolean;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
      infinite?: boolean;
      dots?: boolean;
      initialSlide?: number;
    };
  }>;
}

export interface Product {
  id: number;
  name: string;
  detail: string;
  category: string;
  brand: string;
  sales: number;
  price: string;
  price2?: string;
  img: string;
  BigImg: string;
  brandFa?: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  img: string;
  title: string;
  amount: number;
}

export interface RootState {
  cart: {
    cartlist: CartItem[];
  };
}
