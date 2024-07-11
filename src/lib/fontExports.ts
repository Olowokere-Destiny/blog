import { Merriweather, Lora, Courier_Prime, Noto_Serif } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const noto = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export { merriweather, noto, lora, courier };
