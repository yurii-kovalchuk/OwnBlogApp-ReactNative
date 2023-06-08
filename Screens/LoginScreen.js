import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

import styles from "../styles/authForm.styles";

const LoginScreen = () => {
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
    <View style={[styles.form, { paddingTop: 32, paddingBottom: 111 }]}>
      <Text style={styles.title}>Увійти</Text>
      <View style={{ marginBottom: 33 }}>
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
      <Text style={styles.subText}>
        Немає акаунту?{" "}
        <Text style={{ textDecorationLine: "underline" }}>Зареєструватися</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
