import { StyleSheet, View, ScrollView, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import CircularProgress from 'react-native-circular-progress-indicator';
import { COLORS } from "../../../../config/colors";
import { TYPOGRAPHY } from "../../../../config/typography";
import { observer } from "mobx-react-lite";
import React from "react";
import { TasksStore } from "../../../../store/TasksStore";
import { useLocalStore } from "../../../../utils/useLocalStore";

const musicImg = require("../../../../assets/img/musicImg.png");
const artImg = require("../../../../assets/img/artImg.png");
const theatreImg = require("../../../../assets/img/theatreImg.png");
const danceImg = require("../../../../assets/img/danceImg.png");

type TasksProps = {
    navigation: any,
}

const Tasks: React.FC<TasksProps> = ({ navigation }) => {

    const tasksStore = useLocalStore(() => new TasksStore());

    React.useEffect(() => {
        tasksStore.requestTasks();
    }, [])

    return (
        <View style={styles.tasks}>
            <ScrollView>
                {tasksStore.tasks && tasksStore.tasks.map((task, index) => {
                    return (
                        <TouchableOpacity key={task.id} style={styles.tasks_list_task} onPress={() => navigation.navigate("Задание", 
                            {artId: index + 1, userScore: task.userScore, scoreSum: task.scoreSum, name: task.name})}>
                            <ImageBackground style={styles.tasks_list_task_details} 
                                source={index === 0 ? musicImg : index === 1 ? artImg : index === 2 ? theatreImg : danceImg}
                                resizeMode="contain">
                                <View>
                                    <Text style={styles.tasks_list_task_details_title}>{task.name}</Text>
                                    <View style={{marginTop: 22}}>
                                        <Text style={styles.tasks_list_task_details_section}>Пройдено</Text>
                                        <View style={{flexDirection: "row", alignItems:"center"}}>
                                            <Image style={styles.tasks_list_task_details_section_img} 
                                                source={require("../../../../assets/img/file.png")}/>
                                            <Text style={styles.tasks_list_task_details_section_nums}>
                                                {task.userCount ? task.userCount : " - "} / {task.testsCount}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{marginTop: 16}}>
                                        <Text style={styles.tasks_list_task_details_section}>Собрано</Text>
                                        <View style={{flexDirection: "row", alignItems:"center"}}>
                                            <Image style={styles.tasks_list_task_details_section_img} 
                                                source={require("../../../../assets/img/gem.png")}/>
                                            <Text style={styles.tasks_list_task_details_section_nums}> 
                                                {task.userScore ? task.userScore : " - "} / {task.scoreSum}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                <CircularProgress
                                    value={task.userCount && task.userScore 
                                        ? Math.sqrt(task.userCount / task.testsCount * task.userScore / task.scoreSum) * 100
                                        : 0}
                                    radius={48}
                                    duration={2000}
                                    progressValueColor={COLORS.black}
                                    activeStrokeColor={COLORS.blueAction}
                                    inActiveStrokeColor={COLORS.gray}
                                    maxValue={100}
                                    valueSuffix={'%'}
                                    titleColor={'white'}
                                    titleStyle={{fontWeight: 'bold'}}
                                />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        
                    )
                })
                }
            </ScrollView>
        </View>
    )
}

export default observer(Tasks);

const styles = StyleSheet.create({
    tasks: {
        flex: 1,
    },
    tasks_list: {
        width: "100%"
    },
    tasks_list_task: {
        marginVertical: 8,
        width: "100%",
        backgroundColor: COLORS.lightGray,
        borderRadius: 16,
    },
    tasks_list_task_details: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tasks_list_task_details_title: {
        ...TYPOGRAPHY.h3,
        color: COLORS.black
    },
    tasks_list_task_details_section: {
        ...TYPOGRAPHY.p1,
        marginBottom: 3,
        color: COLORS.gray
    },
    tasks_list_task_details_section_img: {
        width: 20,
        height: 20,
    },
    tasks_list_task_details_section_nums: {
        ...TYPOGRAPHY.h3,
        marginLeft: 8,
        color: COLORS.black
    }
})