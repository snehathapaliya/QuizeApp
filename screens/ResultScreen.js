import {
    StyleSheet,
    Text,
    SafeAreaView,
    View,
    Pressable,
    FlatList,
  } from "react-native";
  import React from "react";
  import { useRoute } from "@react-navigation/native";
  import { AntDesign } from "@expo/vector-icons";
  const ResultsScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    return (
      <SafeAreaView style={{ margin: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Your Results</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Text>Share</Text>
            <AntDesign
              style={{ marginLeft: 4 }}
              name="sharealt"
              size={18}
              color="black"
            />
          </View>
        </View>
        </SafeAreaView>
  );
};

export default ResultScreen

const styles = StyleSheet.create({})
