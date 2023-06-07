import { View, Text, TextInput, Button } from "react-native";

const LoginScreen = () => {
  return (
    <View>
      <Text>Увійти</Text>
      <View>
        <TextInput placeholder="Адреса електронної пошти" />
        <TextInput placeholder="Пароль" />
      </View>
      <Button title="Увійти" />
      <Text>Немає акаунту? Зареєструватися</Text>
    </View>
  );
};

export default LoginScreen;
