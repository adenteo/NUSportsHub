import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";
import AddItem from "../components/addItem";
import UserEvent from "../components/event";
import { FlatList } from "react-native";
import { gymCapacityList } from "../components/fetchCapacity";
import FacilityCapacity from "../components/capacity";

const upcomingEventDATA = [
    {
        dateDay: "15",
        dateMonth: "May",
        title: "Table Tennis",
        descriptionTime: "0900 - 1100",
        descriptionLocation: "Kent Ridge MPSH",
    },
    {
        dateDay: "22",
        dateMonth: "May",
        title: "Badminton",
        descriptionTime: "0700 - 0900",
        descriptionLocation: "University Town Gym",
    },
    {
        dateDay: "28",
        dateMonth: "May",
        title: "Table Tennis",
        descriptionTime: "0900 - 1100",
        descriptionLocation: "Kent Ridge MPSH",
    },
    {
        dateDay: "28",
        dateMonth: "May",
        title: "Table Tennis",
        descriptionTime: "0900 - 1100",
        descriptionLocation: "Kent Ridge MPSH",
    },
    {
        dateDay: "28",
        dateMonth: "May",
        title: "Table Tennis",
        descriptionTime: "0900 - 1100",
        descriptionLocation: "Kent Ridge MPSH",
    },
];

const test2 = [
    {
        capacity: "0/75",
        name: "Kent Ridge - Fitness gym @MPSH3",
    },
    {
        capacity: "0/75",
        name: "Kent Ridge - Fitness gym @MPSH3",
    },
    {
        capacity: "0/75",
        name: "Kent Ridge - Fitness gym @MPSH3",
    },
    {
        capacity: "0/75",
        name: "Kent Ridge - Fitness gym @MPSH3",
    },
];

export default function HomeScreen() {
    const test = () => {
        alert("hello");
    };
    const renderItem = ({ item }) => (
        <UserEvent
            dateDay={item.dateDay}
            dateMonth={item.dateMonth}
            title={item.title}
            descriptionTime={item.descriptionTime}
            descriptionLocation={item.descriptionLocation}
        />
    );

    const renderCapacity = ({ item }) => (
        <FacilityCapacity name={item.name} capacity={item.capacity} />
    );

    const emptyComponent = () => {
        return (
            <View style={styles.emptyComponent}>
                <Text style={styles.emptyComponentText}>
                    You have no upcoming events.
                </Text>
            </View>
        );
    };

    const ItemDivider = () => {
        return (
            <View
                style={{
                    width: 1,
                    backgroundColor: "#607D8B",
                }}
            />
        );
    };
    return (
        <SafeAreaView style={styles.container}>
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
            <SafeAreaView style={styles.wrapper}>
                <FlatList
                    data={upcomingEventDATA}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={emptyComponent}
                />
            </SafeAreaView>
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
                <TouchableOpacity>
                    <AddItem />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={styles.wrapper}>
                <FlatList
                    ItemSeparatorComponent={ItemDivider}
                    horizontal={true}
                    data={gymCapacityList}
                    renderItem={renderCapacity}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
            <View style={styles.componentHeader}>
                <View style={styles.componentHeaderLabel}>
                    <Text style={styles.componentText}>Your favourites</Text>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        flex: 1,
    },
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
        justifyContent: "center",
        width: "90%",
        flex: 0.32,
    },
    componentText: {
        fontFamily: "Montserrat-Medium",
        fontSize: 16,
        paddingRight: 5,
    },
    componentHeaderLabel: {
        flexDirection: "row",
    },
    emptyComponent: {
        borderWidth: 3,
        borderColor: "red",
    },
    emptyComponentText: {
        fontFamily: "Montserrat-Medium",
        color: "white",
    },
});
