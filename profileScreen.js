import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ userName, setUserName }) {
  const [name, setName] = useState(userName);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Your Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="Save" onPress={() => setUserName(name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { marginBottom: 10, fontSize: 16 },
  input: {
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 5
  }
});
