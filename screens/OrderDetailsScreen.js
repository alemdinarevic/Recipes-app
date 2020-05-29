import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import SyncStorage from "sync-storage";

import { useSelector } from "react-redux";

const OrderDetailsScreen = (props) => {
  const [meals, setMeals] = useState([]);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  useEffect(() => {
    SyncStorage.set("foo", { values: "" });
  });

  var orderedMeals = SyncStorage.get("order");

  useEffect(() => {
    console.table(orderedMeals);
  }, [orderedMeals]);

  const [values, setValues] = useState({
    phone: "",
    address: "",
  });
  return (
    <View style={styles.screen}>
      <Text style={styles.enterDetailsText}>Enter details</Text>
      <Text>Address</Text>
      <TextInput
        placeholder="Your address...."
        style={styles.inputField}
        onChangeText={(e) => setValues({ address: e, ...values })}
      />
      <Text>Phone</Text>
      <TextInput
        placeholder="Your number..."
        style={styles.inputField}
        onChangeText={(e) => setValues({ phone: e, ...values })}
      />

      <Button
        title="Confirm"
        onPress={() => {
          favMeals.forEach((meal) => setMeals(...meals, meal.title));
          SyncStorage.set("order", { values, meals });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    minWidth: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    height: 60,
    borderColor: "gray",
    borderWidth: 1,
    width: "50%",
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
  enterDetailsText: {
    margin: 60,
    fontWeight: "800",
    fontSize: 18,
  },
});

export default OrderDetailsScreen;
