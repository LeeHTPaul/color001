import * as React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function DetailsScreen( {navigation}){
  return (
    <View style={ {flex: 1, justifyContent: "center", alignItems: "center"} }>
        <Text> Details here</Text>
    </View>
  )
}