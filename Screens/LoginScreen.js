import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";

import bg from "../images/BG.jpg";

const emptyState = {
  email: "",
  password: "",
};

const LoginScreen = () => {
  const [whichInputFocused, setWhichInputFocused] = useState(null);
  const [formData, setFormData] = useState(emptyState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onInputFocus = (e) => {
    setWhichInputFocused(
      e.target._internalFiberInstanceHandleDEV.memoizedProps.query
    );
    setIsShowKeyboard(true);
  };

  const onInputBlur = () => {
    setWhichInputFocused(null);
  };

  const closeKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onSubmit = () => {
    console.log(formData);
    setFormData(emptyState);
    closeKeyboard();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : ""}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={closeKeyboard}>
        <View style={styles.container}>
          <Image source={bg} style={styles.bgImage} />
          <View
            style={[styles.form, { marginBottom: isShowKeyboard ? -208 : 0 }]}
          >
            <Text style={styles.title}>Увійти</Text>
            <View style={{ marginBottom: 43 }}>
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
                  setFormData((prevState) => ({
                    ...prevState,
                    email: value,
                  }))
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
                secureTextEntry={secureTextEntry}
                query="password"
                onFocus={onInputFocus}
                onBlur={onInputBlur}
                onChangeText={(value) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                value={formData.password}
              />
              {secureTextEntry ? (
                <Text
                  style={styles.showPass}
                  onPress={() => {
                    setSecureTextEntry(false);
                  }}
                >
                  Показати
                </Text>
              ) : (
                <Text
                  style={styles.showPass}
                  onPress={() => {
                    setSecureTextEntry(true);
                  }}
                >
                  Приховати
                </Text>
              )}
            </View>

            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={onSubmit}
            >
              <Text style={{ color: "#ffffff" }}>Увійти</Text>
            </TouchableOpacity>
            <Text style={styles.subText}>
              Немає акаунту?{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Зареєструватися
              </Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bgImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    resizeMode: "cover",
  },
  form: {
    paddingTop: 32,
    paddingBottom: 111,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 32,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    height: 50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 19,
  },
  inputOnFocus: {
    borderColor: "#FF6C00",
  },
  showPass: {
    position: "absolute",
    bottom: 16,
    right: 16,

    fontSize: 16,
    fontFamily: "Roboto",
    lineHeight: 19,
    color: "#1B4371",
  },
  btn: {
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
  },
  subText: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});

export default LoginScreen;
