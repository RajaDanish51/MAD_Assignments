import React, { useState } from 'react';
import { View, Text, TextInput, SectionList, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const contacts = [
  { name: 'Danish', number: '03060001148', group: 'Family' },
  { name: 'Uzair', number: '03470001148', group: 'Family' },
  { name: 'Touseeq', number: '03240001148', group: 'Family' },
  { name: 'Shoaib', number: '03280001148', group: 'Friends' },
  { name: 'Daniyal', number: '03290001148', group: 'Friends' },
  { name: 'Husnain', number: '03400001148', group: 'Friends' },
  { name: 'Ehshan', number: '03480001148', group: 'Work' },
  { name: 'Arfat', number: '03390001148', group: 'Work' },
  { name: 'Anas', number: '03080001148', group: 'Work' },
  { name: 'Noman', number: '03107001148', group: 'Work' }
];

const App = () => {
  const [search, setSearch] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()) ||
    contact.number.includes(search)
  );

  const groupedContacts = ['Family', 'Friends', 'Work'].map(group => ({
    title: group,
    data: filtered.filter(contact => contact.group === group)
  })).filter(section => section.data.length > 0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search by name or number"
        value={search}
        onChangeText={text => setSearch(text)}
      />

      <SectionList
        sections={groupedContacts}
        keyExtractor={item => item.number}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => setSelectedContact(item)}>
            <Text>{item.name} - {item.number}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />

      {selectedContact && (
        <Modal transparent animationType="fade" onRequestClose={() => setSelectedContact(null)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedContact.name}</Text>
              <Text>Phone: {selectedContact.number}</Text>
              <Text>Group: {selectedContact.group}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedContact(null)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
  flex: 1, 
  padding: 20, 
  backgroundColor: '#fff' 
},
  input: { 
  borderWidth: 1, 
  borderColor: '#ccc', 
  padding: 10, 
  borderRadius: 8, 
  marginBottom: 10 
},
  sectionHeader: { 
  fontSize: 18, 
  fontWeight: 'bold', 
  backgroundColor: '#eee', 
  paddingVertical: 5, 
  paddingHorizontal: 10 
},
  item: { 
  padding: 10, 
  borderBottomWidth: 1, 
  borderColor: '#ddd' 
},
  modalContainer: { 
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center', 
  backgroundColor: 'rgba(0,0,0,0.5)' 
},
  modalContent: { 
  backgroundColor: 'white', 
  padding: 20, 
  borderRadius: 10, 
  width: '80%', 
  alignItems: 'center' 
},
  modalTitle: { 
  fontSize: 20, 
  fontWeight: 'bold', 
  marginBottom: 10 
},
  closeButton: { 
  marginTop: 15, 
  paddingVertical: 10, 
  paddingHorizontal: 20, 
  backgroundColor: '#2196F3', 
  borderRadius: 5 
},
  closeButtonText: { 
  color: 'white', 
  fontWeight: 'bold' 
}
});

export default App;
