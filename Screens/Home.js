import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import PostsIcon from "../icons/posts.svg";
import CrossIcon from "../icons/cross.svg";
import ProfileIcon from "../icons/profile.svg";
import Cross from "../icons/cross2.svg";

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          paddingHorizontal: 82,
          paddingTop: 9,
        },
        // tabBarItemStyle: { height: 40 },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <PostsIcon name="posts" size={size} color={color} />
          ),
          tabBarItemStyle: {
            height: 40,
            maxWidth: 40,
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Cross name="cross" size={size} color={color} />
          ),
          tabBarItemStyle: {
            height: 40,
            maxWidth: 70,
            marginHorizontal: 31,
            borderRadius: 100,
            backgroundColor: "#FF6C00",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => (
            <ProfileIcon name="profile" size={size} color={color} />
          ),
          tabBarItemStyle: {
            height: 40,
            maxWidth: 40,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
