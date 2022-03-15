// import { StatusBar } from "expo-status-bar";
import { Text, View, StatusBar } from "react-native";
import * as Sentry from "sentry-expo";
import { RecoilRoot } from "recoil";
import MyApp from "./app/MyApp";
import { lightColors } from "./app/theme/colors";

Sentry.init({
  dsn: "https://a6603eed3421425cbf2b93f4b751dc49@o1162563.ingest.sentry.io/6259238",
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
