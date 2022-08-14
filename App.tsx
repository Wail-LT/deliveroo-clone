import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./src/screens/Home";

const NativeStack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
          <NativeStack.Navigator>
            <NativeStack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
          </NativeStack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
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
