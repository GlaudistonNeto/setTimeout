import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainService from './app/services/mainService';

let ms = new MainService()

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
   ms.load(v => setLoaded(true));
  },[])

    return (
      <View style={styles.container}>
        {loaded ? <Text style={styles.text}>Tempo esgotado</Text> :
          <Text style={styles.text}>Tempo para o upload!</Text>}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbcbc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
  }
});