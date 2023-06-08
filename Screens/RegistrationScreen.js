import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

import styles from "../styles/authForm.styles";

const RegistrationScreen = () => {
  const [whichFocused, setWichFocused] = useState(null);

  const onFocus = (e) => {
    setWichFocused(
      e.target._internalFiberInstanceHandleDEV.memoizedProps.query
    );
  };

  const onBlur = (e) => {
    setWichFocused(null);
  };
  return (
    <View style={styles.form}>
      <View></View>
      <Text style={styles.title}>Реєстрація</Text>
      <View style={{ marginBottom: 33 }}>
        <TextInput
          style={[
            styles.input,
            // { borderColor: wichFocused === "first" ? "#FF6C00" : "#E8E8E8" },
            whichFocused === "first" && styles.inputOnFocus,
          ]}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          onFocus={onFocus}
          onBlur={onBlur}
          query="first"
        />
        <TextInput
          style={[
            styles.input,
            whichFocused === "second" && styles.inputOnFocus,
          ]}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
          onFocus={onFocus}
          onBlur={onBlur}
          query="second"
        />
        <TextInput
          style={[
            styles.input,
            { marginBottom: 0 },
            whichFocused === "third" && styles.inputOnFocus,
          ]}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
          onFocus={onFocus}
          onBlur={onBlur}
          query="third"
        />
      </View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Text style={{ color: "#ffffff" }}>Зареєструватися</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default RegistrationScreen;

// const styles = StyleSheet.create({
//   form: {
//     paddingTop: 92,
//     paddingBottom: 45,
//     paddingHorizontal: 16,
//     backgroundColor: "#FFFFFF",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//   },
//   title: {
//     marginBottom: 32,
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: "center",
//     letterSpacing: 0.01,
//     color: "#212121",
//   },
//   input: {
//     padding: 16,
//     marginBottom: 16,
//     backgroundColor: "#F6F6F6",
//     color: "#212121",
//     borderRadius: 8,
//     borderWidth: 1,
//     borderStyle: "solid",
//     borderColor: "#E8E8E8",
//     fontSize: 16,
//     fontFamily: "Roboto",
//     lineHeight: 19,
//   },
//   inputOnFocus: {
//     borderColor: "#FF6C00",
//   },
//   btn: {
//     marginBottom: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     height: 51,
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//     fontFamily: "Roboto",
//     fontSize: 16,
//     fontWeight: 400,
//     lineHeight: 19,
//   },
//   subText: {
//     fontFamily: "Roboto",
//     fontSize: 16,
//     fontWeight: 400,
//     lineHeight: 19,
//     textAlign: "center",
//   },
// });
