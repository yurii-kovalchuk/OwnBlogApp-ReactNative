import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground>
          <TouchableOpacity>Icon</TouchableOpacity>
        </ImageBackground>
        <Text>Завантажте фото</Text>
      </View>
      <TextInput placeholder="Назва..." />
      <TextInput placeholder="Місцевість..." />
      <TouchableOpacity>Опубліковати</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
  },
});

export default CreatePostsScreen;
