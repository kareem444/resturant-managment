import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import RoutesContainer from "./common/routes";
import { useTranslate } from "./common/hooks/useTranslate";
import SplashScreenComponent from "./common/components/SplashScreenComponent";
import useModalReducer from "./common/redux/modal/useModalReducer";
import { appInit } from "./common/init";

function App() {
  const [isInit, setIsInit] = useState(false);
  const { dir } = useTranslate();
  const { state, closeModal } = useModalReducer();

  useEffect(() => {
    themeChange(false);
    if (document.querySelector("html")?.getAttribute("data-theme") === null) {
      if (!localStorage.getItem("theme")) {
        localStorage.setItem("theme", "winter");
      }
      document
        .querySelector("html")
        ?.setAttribute("data-theme", localStorage.getItem("theme") || "winter");
    }
    setTimeout(() => {
      appInit().then(() => { setIsInit(true); })
    }, 1000);
  }, []);

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  useEffect(() => {
    const handleBackButton = (event: any) => {
      event.preventDefault();
      if (state.isOpen) {
        closeModal();
        window.history.forward();
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [state.isOpen]);

  if (!isInit) {
    return <SplashScreenComponent />;
  }

  return <RoutesContainer />;
}

export default App;
