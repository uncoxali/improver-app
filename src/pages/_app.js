import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "swiper/swiper-bundle.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
import "tailwindcss/tailwind.css";
import "common/assets/css/globals.css";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
