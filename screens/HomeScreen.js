import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
} from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Stories />
        <View>
          {Array(5).fill().map((_, index) => 
            <Post key={index} />
          )}
          
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
});
