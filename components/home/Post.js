import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";

const Post = () => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider orientation="vertical" width={1} />
      <PostHeader />
      <PostImage />
      <PostFooter />
    </View>
  );
};

const PostHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 5,
      }}
    >
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <View style={styles.userImage}></View> */}
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/ADea4I5tr65F_4Q9YtFt3EZ9aoqrwboEjcVUdzg04cdssA=s32-c-mo",
            }}
            style={styles.userImage}
          />
          <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
            Rishaw
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 30,
            paddingBottom: 10,
          }}
        >
          ...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = () => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: "https://source.unsplash.com/random" }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text style={{ color: "white" }}>HEART</Text>
    <Text style={{ color: "white" }}>COMMENT</Text>
    <Text style={{ color: "white" }}>SHARE</Text>
  </View>
);

export default Post;

const styles = StyleSheet.create({
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    // backgroundColor: "#cccccc",
    resizeMode: "cover",
    borderWidth: 2,
    marginLeft: 6,
    borderColor: "#ff8501",
  },
});
