import React, { useEffect, useLayoutEffect } from 'react';
import { useState } from "react/cjs/react.development";
import { FlatList, StyleSheet, View, Button, Alert, Text, } from 'react-native';

import NotePreview from "../components/NotePreview";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListScreen = ({ navigation }) => {
  const [notes, setNotes] = useState([]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@notes_data', jsonValue);
    } catch (e) {
      // Ошибка при сохранении заметок.
      Alert.alert(
        `Ошибка при сохранении заметок`,
        [
          {
            text: "OK",
          }
        ]
      );
    }
  };

  const getData = async () => {
    let jsonValue;
    try {
      jsonValue = await AsyncStorage.getItem('@notes_data');
    } catch (e) {
      // Ошибка при загрузке заметок.
      Alert.alert(
        `Ошибка при загрузке заметок`,
        [
          {
            text: "OK",
          }
        ]
      );
    }

    return JSON?.parse(jsonValue);
  };

  const addNote = (note) => setNotes(notes ? (notes => [...notes, note]) : ([note]));

  const deleteNote = (note) => {
    const newNotes = notes;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i] === note) {
        newNotes.splice(i, 1);
        break;
      }
    }

    setNotes(newNotes => [...newNotes]);
  };

  const editNote = (note) => {
    const noteId = note.id;
    const newNotes = notes;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        newNotes[i] = note;
        break;
      }
    }

    setNotes([...newNotes]);
  };

  // Загрузить заметки при входе в приложение.
  useEffect(() => { getData().then((r) => { setNotes(r) }); }, []);

  // Сохранить заметки в локальное хранилище при добавлении/изменении/удалении.
  useEffect(() => { storeData(notes); }, [notes]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Создать Заметку", { handleCreateNote: addNote })} title="Добавить" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {notes.length ? (
        <FlatList
          contentContainerStyle={styles.list}
          data={notes}
          renderItem={({ item }) => <NotePreview note={item} navigation={navigation} deleteNote={deleteNote} editNote={editNote} />} // Хорошая ли практика явно передавать navigation как атрибут?
          keyExtractor={item => item.id.toString()}
          overflow="visible"
        />
      ) : (
        <Text style={styles.hint}>
          Добавьте новую заметку!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100%",
    backgroundColor: "#f1f1f1",
  },
  list: {
    paddingHorizontal: 8,
  },
  hint: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 16,
  },
});

export default ListScreen;
