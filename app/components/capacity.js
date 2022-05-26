import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default FacilityCapacity = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{props.name}</Text>
            <MaterialCommunityIcons
                name="weight-lifter"
                color={"white"}
                size={50}
            />
            <Text style={styles.capacityText}>{props.capacity}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    nameText: {
        fontFamily: "Montserrat-Bold",
        color: "white",
        padding: 5,
        fontSize: 13,
    },
    capacityText: {
        fontFamily: "Montserrat-Bold",
        color: "white",
        padding: 5,
        fontSize: 20,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        height: "100%",
        width: 176,
    },
});
