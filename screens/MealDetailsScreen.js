import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const MealDetailsScreen = (props) => {
	return (
		<View style={styles.screen}>
			<Text>Meal details Screen</Text>
			<Button title="back to categories" onPress={() => props.navigation.popToTop("Categories")}/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
	}
});

export default MealDetailsScreen;
