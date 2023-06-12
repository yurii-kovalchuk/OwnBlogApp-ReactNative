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
import AddIcon from "../icons/add.svg";

const emptyState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [whichInputFocused, setWhichInputFocused] = useState(null);
  const [formData, setFormData] = useState(emptyState);

  const onInputFocus = (e) => {
    setWhichInputFocused(
      e.target._internalFiberInstanceHandleDEV.memoizedProps.query
    );
  };

  const onInputBlur = (e) => {
    setWhichInputFocused(null);
  };

  const onSubmit = () => {
    console.log(formData);
    setFormData(emptyState);
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
            whichInputFocused === "login" && styles.inputOnFocus,
          ]}
          placeholder="Логін"
          placeholderTextColor="#BDBDBD"
          query="login"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChangeText={(value) =>
            setFormData((prevState) => ({ ...prevState, login: value }))
          }
          value={formData.login}
        />
        <TextInput
          style={[
            styles.input,
            whichInputFocused === "email" && styles.inputOnFocus,
          ]}
          placeholder="Адреса електронної пошти"
          placeholderTextColor="#BDBDBD"
          query="email"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChangeText={(value) =>
            setFormData((prevState) => ({ ...prevState, email: value }))
          }
          value={formData.email}
        />
        <TextInput
          style={[
            styles.input,
            { marginBottom: 0 },
            whichInputFocused === "password" && styles.inputOnFocus,
          ]}
          placeholder="Пароль"
          placeholderTextColor="#BDBDBD"
          secureTextEntry={true}
          query="password"
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChangeText={(value) =>
            setFormData((prevState) => ({ ...prevState, password: value }))
          }
          value={formData.password}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onSubmit}
      >
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
