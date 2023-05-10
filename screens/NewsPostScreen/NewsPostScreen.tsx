import { StyleSheet, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import { COLORS } from "../../config/colors";
import NewsPostContent from "./components/NewsPostContent/NewsPostContent";
import NewsPostHeader from "./components/NewsPostHeader/NewsPostHeader";

type NewsPostScreenProps = {
    route: any,
    navigation: any,
}

const NewsPostScreen: React.FC<NewsPostScreenProps> = ({route, navigation}) => {
    const { postId, post } = route.params;

    return (
        <View style={styles.container}>
                <View style={styles.newsPost}>
                    <NewsPostHeader post={post} navigation={navigation} />
                    <NewsPostContent postId={postId} />
                </View>
        </View>
    )
}

export default NewsPostScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white
    },
    newsPost: {
        width: '100%',
        flex:1,
    },
});