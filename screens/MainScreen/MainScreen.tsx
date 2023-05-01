import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../components/Navigation/Navigation";

type MainScreenProp = StackNavigationProp<RootStackParamList, 'Main'>;

const MainScreen: React.FC = () => {
    const navigation = useNavigation<MainScreenProp>();
    const dimensions = useWindowDimensions();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </View>
            <StatusBar style="auto" />
        </ScrollView>
    );
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    main: {
        height: '100%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});