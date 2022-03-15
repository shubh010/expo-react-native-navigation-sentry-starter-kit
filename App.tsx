// import { StatusBar } from "expo-status-bar";
import { Text, View, StatusBar } from "react-native";
import * as Sentry from "sentry-expo";
import { RecoilRoot } from "recoil";
import MyApp from "./app/MyApp";
import { lightColors } from "./app/theme/colors";

//You can find your dsn from sentry danshboard
Sentry.init({
  dsn: "Your DSN",
  enableInExpoDevelopment: false,
  debug: true,
});

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RecoilRoot>
        <MyApp />
        <StatusBar backgroundColor={lightColors.statusBarColor} />
      </RecoilRoot>
    </View>
  );
}
