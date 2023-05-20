import { StyleSheet, View, Text, ScrollView } from "react-native";
import ListElement from "../../../../components/ListElement/ListElement";

type FeedListProps = {
    activeTags?: string[],
    navigation: any,
}

const FeedList: React.FC<FeedListProps> = ({activeTags, navigation}) => {
    return (
        <ScrollView style={styles.feedList}
            contentContainerStyle={{
                flexGrow: 1,
            }}
            >
            {[{id: "1", title: "Ежегодная акция — Летопись сердец", date: "10.08.2002", tagName: "Культура"}, 
            {id: "2", title: "Марафон: Знание.Первые", date: "05.08.2002", tagName: "Культура"},
            {id: "3", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "4", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "5", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "6", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"},
            {id: "7", title: "Документальный фильм “Берег Маклая”", date: "27.07.2002", tagName: "Образование"}]
            .filter(item => activeTags?.find(el => el === "Все") ? item : activeTags?.find(el => el === item.tagName))
            .map(item => {
                return (
                    <ListElement key={item.id} top={item.date} middle={item.title} bottom={item.tagName} 
                        onPress={() => navigation.navigate("Пост", {postId: item.id, post: item})} />
                )
            })}
        </ScrollView>
    );
}

export default FeedList;

const styles = StyleSheet.create({
    feedList: {
        marginTop: 24,
        width: "100%",
    }
})