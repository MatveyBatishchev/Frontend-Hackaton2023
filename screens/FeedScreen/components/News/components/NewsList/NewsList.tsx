import { StyleSheet, View, ScrollView, Text, ActivityIndicator } from "react-native";
import Card from "../../../../../../components/Card/Card";
import React from "react";
import { observer } from "mobx-react-lite";
import { useLocalStore } from "../../../../../../utils/useLocalStore";
import NewsListStore from "../../../../../../store/NewsListStore";
import { COLORS } from "../../../../../../config/colors";
import { TYPOGRAPHY } from "../../../../../../config/typography";
import { formatDate } from "../../../../../../config/formatDate";

type NewsListProps = {
    navigation: any,
}

const NewsList: React.FC<NewsListProps> = ({navigation}) => {
    const newsListStore = useLocalStore(() => new NewsListStore());

    React.useEffect(() => {
        newsListStore.requestNews();
    }, []);

    return (
        <ScrollView
                style={styles.newsList}
                horizontal
                contentContainerStyle={{
                    flexGrow: 1, flexDirection: 'row',
                }}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
            >
            {(newsListStore.news !== null && newsListStore.news.length === 0) &&
                <Text style={styles.newsList_dataNotFound}>Данные не найдены</Text>
            }
            {newsListStore.news ? newsListStore.news.map(item => {
                    return (
                        <Card key={item.id} top={formatDate(item.createdAt)} bottom={item.name} image={item.image}
                            width={290} height={192}
                            onPress={() => navigation.navigate("Пост", { post: item, postType: "article"})} />
                    )
            }) 
                : <ActivityIndicator style={styles.newsList_dataIsLoading} size="large" color={COLORS.blueAction} />
            }
            
        </ScrollView>
    );
}

export default observer(NewsList);

const styles = StyleSheet.create({
    newsList: {
        marginTop: 16,
        flex: 1,
    },
    newsList_dataNotFound: {
        ...TYPOGRAPHY.p1,
        marginTop: 30,
        width: "100%",
        color: COLORS.gray,
        alignSelf: "center",
        textAlign: "center",
    },
    newsList_dataIsLoading: {
        marginTop: "auto",
        marginBottom: "auto",
        width: "100%",
        alignSelf: "center",
    }
})