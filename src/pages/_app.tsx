import type { AppProps } from "next/app";
import GlobalStyles from "@/styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "../features/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer position="bottom-left" autoClose={1000} theme="dark" />
        <Component {...pageProps} />
        <GlobalStyles />
      </Provider>
    </>
  );
};

export default MyApp;
