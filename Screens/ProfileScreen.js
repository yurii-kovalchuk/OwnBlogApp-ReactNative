import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import bg from "../images/BG.jpg";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={bg} style={styles.bgImage} />
      <View style={styles.main}>
        <View style={styles.avatarWrap}>
          <Image style={styles.avatar}></Image>
          <TouchableOpacity style={styles.addBtn} activeOpacity={0.7}>
            <AddIcon width={25} height={25} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Natali Romanova</Text>
      </View>
    </View>
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
  main: {
    paddingTop: 92,
    paddingBottom: 45,
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

export default ProfileScreen;
