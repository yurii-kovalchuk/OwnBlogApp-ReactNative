import { View, Text, TextInput, Button } from "react-native";

const RegistrationScreen = () => {
  return (
    <View>
      <View></View>
      <Text>Реєстрація</Text>
      <View>
        <TextInput placeholder="Логін" />
        <TextInput placeholder="Адреса електронної пошти" />
        <TextInput placeholder="Пароль" />
      </View>
      <Button title="Зареєстуватися" />
      <Text>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationScreen;
