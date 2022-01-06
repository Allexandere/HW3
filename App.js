import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateNoteScreen from './src/screens/CreateScreen';
import NoteScreen from './src/screens/NoteScreen';
import NotesScreen from './src/screens/ListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Заметки" component={NotesScreen} />
          <Stack.Screen name="Заметка" component={NoteScreen} />
          <Stack.Screen name="Создать Заметку" component={CreateNoteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
