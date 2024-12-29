import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tests');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addTest = async () => {
    try {
      await axios.post('http://localhost:3000/api/tests', { test_column: 'Hello, Supabase!' });
      fetchData();
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contenu de la Table test_table :</Text>
      {data.map((item) => (
        <Text key={item._id}>{item.test_column}</Text>
      ))}
      <Button title="Ajouter une Entrée" onPress={addTest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});
