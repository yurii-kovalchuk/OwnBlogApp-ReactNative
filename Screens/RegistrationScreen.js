import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

import authStyles from "../styles/authStyles";
import AddIcon from "../add.svg";

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
      <View style={styles.avatarWrap}>
        <Image style={styles.avatar}></Image>
        <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
          <AddIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
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

const styles = StyleSheet.create({
  ...authStyles,
  avatarWrap: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
});
