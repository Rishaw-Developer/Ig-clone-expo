import React from "react";
import { Image } from "react-native";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const Stories = () => {
  return (
    <View style={{ marginBottom: 5 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Array(100)
          .fill("")
          .map((_, index) => (
            <View key={index} style={styles.storyContainer}>
              <View style={styles.storyImage} />
              {/* For Stories Image*/}
              <Text style={{ color: "white", fontWeight: "bold" }}>rishaw</Text>
            </View>
          ))}
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    backgroundColor: "#ccc",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
  storyContainer: {
    alignItems: "center",
    // padding: 20
  },
});

export default Stories;
