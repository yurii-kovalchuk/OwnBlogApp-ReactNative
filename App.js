import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./Screens/Home";
import LogoutIcon from "./icons/logout.svg";

const AuthStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Публікації",
            headerRightContainerStyle: { paddingRight: 16 },
            headerTitleAlign: "center",
            headerLeft: null,
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <LogoutIcon />
                </TouchableOpacity>
              );
            },
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
