import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Text } from "react-native";
import { cacheImage, cacheFont } from "./utils/preloadasset";
import { Ionicons } from "@expo/vector-icons";
import Gate from "./components/Gate";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function App() {
  const [isReady, setIsReady] = useState(false);

  const handleFinish = () => setIsReady(true);
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpg"),
      "https://icon2.cleanpng.com/20180629/lw/kisspng-airbnb-rebrand-logo-online-marketplace-rebranding-airbnb-logo-5b35bad14fef57.5831675415302478893274.jpg",
    ];

    const fonts = [Ionicons.font];
    const imagePromise = cacheImage(images);
    const fontPromise = cacheFont(fonts);
    return Promise.all([...imagePromise, ...fontPromise]);
  };
  return isReady ? (
    <Provider store={store}>
      <Gate />
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}
