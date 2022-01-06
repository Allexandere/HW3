import React from "react";
import { StyleSheet, View } from "react-native";

const BlockContainer = ({ children }) => (
    <View style={styles.container}>
        {children}
    </View>
);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#b0b0b0",
        borderRadius: 8,
        marginVertical: 8,
        padding: 8,
        backgroundColor: "#fff",
        shadowOffset: { width: 6, height: 6, },
        shadowOpacity: .5,
        shadowColor: "#000",
        shadowRadius: 1,
        overflow: "visible",
    },
});

export default BlockContainer;