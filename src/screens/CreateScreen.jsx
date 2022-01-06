import React, { useState } from "react";
import { Dimensions, Button, View, StyleSheet, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import NoteEdit from "../components/NoteEdit";

const CreateScreen = ({ route, navigation }) => {
    const { handleCreateNote } = route.params;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUri, setImageUri] = useState("");

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    const onPressCreate = () => {
        if (!title.length) {
            Alert.alert(
                `Вы не можете создать заметку без названия`,
                "",
                [
                    {
                        text: "OK"
                    }
                ]
            );

            return;
        }
        handleCreateNote({
            id: Date.now(),
            imageUri: imageUri,
            title: title.trim(),
            content: content.trim(),
        });
        navigation.goBack();
    };

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={onPressCreate} title="Создать" />
            ),
        });
    }, [navigation, title, content, imageUri]);

    return (
        <View style={styles.containter}>
            <NoteEdit title={title} setTitle={setTitle} content={content} setContent={setContent} uriImage={imageUri} pickImage={pickImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    containter: {
        minHeight: "100%",
        padding: 10,
        backgroundColor: "#f1f1f1",
    },
    title: {
        fontSize: 45,
        fontWeight: "bold",
    },
    content: {
        marginTop: 5,
        fontSize: 15,
    },
    image: {
        width: Dimensions.get("window").width - 20,
        minHeight: Dimensions.get("window").width - 20,
        alignSelf: "center",
        marginTop: 10,
        aspectRatio: 1,
    },
});

export default CreateScreen;