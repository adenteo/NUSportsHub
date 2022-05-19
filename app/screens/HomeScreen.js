import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import AddItem from "../components/addItem";
import UserEvent from "../components/event";
export default function HomeScreen() {
    const test = () => {
        alert("hello");
    };
    return (
        <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.banner}>
                    <Text>NUSports</Text>
                </View>
                <View style={styles.componentHeader}>
                    <View style={styles.componentHeaderLabel}>
                        <Text style={styles.componentText}>
                            Your upcoming events
                        </Text>

                        <MaterialCommunityIcons
                            name="calendar"
                            color={"black"}
                            size={20}
                        />
                    </View>
                    <TouchableOpacity onPress={test}>
                        <AddItem />
                    </TouchableOpacity>
                </View>
                <View style={styles.wrapper}>
                    <UserEvent
                        dateDay="15"
                        dateMonth="May"
                        title="Table Tennis"
                        descriptionTime="0900 - 1100"
                        descriptionLocation="Kent Ridge MPSH"
                    />
                    <UserEvent
                        dateDay="22"
                        dateMonth="May"
                        title="Gym Session"
                        descriptionTime="0700 - 0900"
                        descriptionLocation="University Town Gym"
                    />
                </View>
                <View style={styles.componentHeader}>
                    <View style={styles.componentHeaderLabel}>
                        <Text style={styles.componentText}>
                            Facility capacities
                        </Text>
                        <MaterialCommunityIcons
                            name="account-group"
                            color={"black"}
                            size={20}
                        />
                    </View>
                    <AddItem />
                </View>
                <View style={styles.wrapper}>
                    <Text>Capacities</Text>
                </View>
                <View style={styles.componentHeader}>
                    <View style={styles.componentHeaderLabel}>
                        <Text style={styles.componentText}>
                            Your favourites
                        </Text>
                        <MaterialCommunityIcons
                            name="heart-multiple"
                            color={"black"}
                            size={20}
                        />
                    </View>
                    <AddItem />
                </View>
                <View style={styles.wrapper}>
                    <Text>Favourites</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {},
    componentHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    wrapper: {
        backgroundColor: "#0C3370",
        borderRadius: 10,
        alignSelf: "center",
        width: "90%",
    },
    componentText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        paddingRight: 5,
    },
    componentHeaderLabel: {
        flexDirection: "row",
    },
});
