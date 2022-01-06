import React from "react";
import { Button, Image, StyleSheet, Text, TextInput } from "react-native";

import BlockContainer from "./BlockContainer";

const NoteEdit = ({ title, setTitle, content, setContent, uriImage, pickImage }) => (
    <>
        <BlockContainer style={styles.editParam}>
            <Text style={styles.paramName}>Название: </Text>
            <TextInput style={{ ...styles.title, ...styles.editTextInput }} value={title} onChangeText={setTitle} placeholder="Введите название" />
        </BlockContainer>
        <BlockContainer style={styles.editParam}>
            <Text style={styles.paramName}>Описание: </Text>
            <TextInput style={{ ...styles.content, ...styles.editTextInput }} value={content} onChangeText={setContent} placeholder="Введите описание" />
        </BlockContainer>
        <BlockContainer>
            {uriImage ? (
                <Image source={{ uri: uriImage }} style={styles.image} />
            ) : null}
            <Button title="Выберите фотографию" onPress={pickImage} />
        </BlockContainer>
    </>
);


const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "bold",
    },
    content: {
        marginTop: 5,
        fontSize: 15,
    },
    image: {
        width: "100%",
        borderRadius: 8,
        alignSelf: "center",
        aspectRatio: 1,
    },
    editParam: {
        marginBottom: 16,
        backgroundColor: "#fff",
    },
    paramName: {
        fontWeight: "500",
    },
    editTextInput: {
        color: "#505050",
    },
});

export default NoteEdit;