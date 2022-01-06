import React from "react";
import { View, Text, StyleSheet, Image, Alert, Pressable } from "react-native";
import BlockContainer from "./BlockContainer";

const NotePreview = ({ note, navigation, deleteNote, editNote }) => {
    const handleDeleteButton = () => {
        Alert.alert(
            `Вы действительно хотите удалить заметку "${note.title}"?`,
            "",
            [
                {
                    text: "Отмена",
                    style: "cancel",
                },
                {
                    text: "OK",
                    onPress: () => deleteNote(note),
                }
            ]
        );
    };

    return (
        <BlockContainer style={styles.container}>
            {note.imageUri ? (
                <View style={styles.image}>
                    <Image source={{ uri: note.imageUri }} style={styles.image} />
                </View>
            ) : null}
            <View style={styles.infoContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                        {(note.title)}
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Pressable style={styles.button} onPress={handleDeleteButton}>
                        <Text style={styles.deleteButton}>Удалить</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Заметка', { note: note, editNote: editNote })}>
                        <Text style={styles.openButton}>Открыть</Text>
                    </Pressable>
                </View>
            </View>
        </BlockContainer>
    );
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 8,
        width: "100%",
        height: 90,
        marginBottom: 8,
    },
    titleContainer: {
        maxWidth: "60%",
    },
    title: {
        fontSize: 35,
        fontWeight: "bold",
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        height: 33,
    },
    button: {
        padding: 4,
        justifyContent: "center",
        fontSize: 12,
    },
    deleteButton: {
        fontWeight: "500",
        color: "red",
    },
    openButton: {
        fontWeight: "500",
        color: "#2F89FB",
    },
});

export default NotePreview;