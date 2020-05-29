import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals added thus far.</DefaultText>
      </View>
    );
  }

  return (
    <View style={styles.content}>
      <MealList listData={favMeals} navigation={props.navigation} />
			<View style={styles.buttonContainer}>
				<Button
					title="Order now"
					onPress={() => props.navigation.navigate({ routeName: "OrderDetails" })}
				/>
			</View>
      
    </View>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
	},
	buttonContainer: {
		color: 'red'
	}
});

export default FavoritesScreen;
