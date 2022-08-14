import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./src/screens/home/Home";
import { StyledSafeAreaView } from "./src/styledReactNative";

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <StyledSafeAreaView className="flex-1">
        <NavigationContainer>
          <NativeStack.Navigator>
            <NativeStack.Screen
              options={{
                headerShown: false,
                contentStyle: { backgroundColor: "white" },
              }}
              name="Home"
              component={Home}
            />
          </NativeStack.Navigator>
        </NavigationContainer>
      </StyledSafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
