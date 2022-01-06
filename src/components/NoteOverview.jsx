import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import BlockContainer from "./BlockContainer";

const NoteOverview = ({ title, content, uriImage, }) => (
    <BlockContainer>
        <Text style={{ ...styles.content, ...styles.title, }}>{title}</Text>
        {content ? (
            <Text style={styles.content}>{content}</Text>
        ) : null}
        {uriImage ? (
            <Image source={{ uri: uriImage }} style={styles.image} />
        ) : null}
    </BlockContainer>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        fontWeight: "bold",
    },
    content: {
        marginBottom: 8,
        fontSize: 15,
    },
    image: {
        width: "100%",
        borderRadius: 8,
        alignSelf: "center",
        aspectRatio: 1,
    },
});

export default NoteOverview;