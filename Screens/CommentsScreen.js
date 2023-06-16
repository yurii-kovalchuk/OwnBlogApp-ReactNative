import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image />
      </View>
      <View>
        <Text>Chat</Text>
      </View>
      <View>
        <TextInput placeholder="Коментувати..." />
        <TouchableOpacity>|</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingBottom: 16,
    paffingTop: 32,
  },
});

export default CommentsScreen;
