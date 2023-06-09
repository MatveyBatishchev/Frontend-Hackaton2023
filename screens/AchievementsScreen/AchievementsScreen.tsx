import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../config/colors";
import { TYPOGRAPHY } from "../../config/typography";
import React from "react";
import AutoHeightImage from 'react-native-auto-height-image';
import ScreenHeaderAchievements from "../../components/ScreenHeaderAchievements/ScreenHeaderAchievements";
import { AchievementType } from "../../store/ProfileStore";

type AchievementsScreenProps = {
    route: any,
    navigation: any,
}

const AchievementsScreen: React.FC<AchievementsScreenProps> = ({ route, navigation }) => {

    const {achievements} = route.params;

    return (
        <View style={styles.container}>
            <ScreenHeaderAchievements image={require("../../assets/img/btnBack.png")} onPress={() => navigation.goBack()}/>
            <View style={styles.achievements}>
                <Text style={styles.achievements_title}>Галерея Достижений</Text>
                <View style={styles.achievements_scroll}>
                    <ScrollView style={styles.achievements_scroll_list} 
                        showsVerticalScrollIndicator={false}>
                        {
                            achievements.slice(0,achievements.length/2).map((achievement: AchievementType) => {
                                return (
                                    <TouchableOpacity key={achievement.id}
                                            style={{paddingHorizontal: 6}}
                                            onPress={achievement.received 
                                                ? () => navigation.navigate("Достижение", {achievement: achievement}) 
                                                : () => {}}
                                                >
                                        <AutoHeightImage
                                            style={achievement.received 
                                                ? styles.achievements_scroll_list_item 
                                                : styles.achievements_scroll_list_item_disabled}
                                            width={175}
                                            source={{uri: achievement.image}}
                                            />
                                            <Text style={styles.achievements_scroll_list_item_text}>{achievement.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                    <ScrollView style={styles.achievements_scroll_list} 
                        showsVerticalScrollIndicator={false}>
                        {achievements.slice(achievements.length/2,achievements.length).map((achievement: AchievementType, index: number) => {
                                return (
                                    <TouchableOpacity key={achievement.id}
                                        style={{paddingHorizontal: 6}}
                                        onPress={achievement.received 
                                        ? () => navigation.navigate("Достижение", {achievement: achievement}) 
                                        : () => {}}
                                        >
                                        <AutoHeightImage
                                            style={achievement.received 
                                                ? styles.achievements_scroll_list_item 
                                                : styles.achievements_scroll_list_item_disabled}
                                            width={175}
                                            source={{uri: achievement.image}}
                                            />
                                        <Text style={styles.achievements_scroll_list_item_text}>{achievement.title}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default AchievementsScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    achievements: {
        marginTop: 32,
        flex:1,
        width: "100%"
    },
    achievements_title: {
        ...TYPOGRAPHY.h1,
        color: COLORS.black,
        alignSelf: "center",
    },
    achievements_scroll: {
        flex: 1,
        marginTop: 16,
        flexDirection: 'row',
    },
    achievements_scroll_list: {
        width: "50%",
        flexDirection: 'column',
        paddingHorizontal: 6
    },
    achievements_scroll_list_item: {
        marginVertical: 6,
        borderRadius: 16,
        alignSelf: "center"
    },
    achievements_scroll_list_item_disabled: {
        marginVertical: 6,
        borderRadius: 16,
        alignSelf: "center",
        opacity: 0.5,
    },
    achievements_scroll_list_item_text: {
        ...TYPOGRAPHY.h3,
        position: "absolute",
        bottom: 16,
        color: COLORS.white,
        alignSelf: "center",
        textAlign: "center",
    }
})