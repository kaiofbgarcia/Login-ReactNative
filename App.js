import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Animated 
} from 'react-native';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true
      })
    ]).start();
  } , []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.img}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
      </View>
      
      <Animated.View 
        style={[
          styles.form,
          {
            opacity: opacity,
            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >

        <TextInput style={styles.input} 
          placeholder="Email:"
          autoCorrect={false}
          onChangeText={() => {
            // TODO
          }} 
        />

        <TextInput style={styles.input}
          placeholder="Senha:"
          autoCorrect={false}
          onChangeText={() => {
            // TODO
          }} 
        />

        <TouchableOpacity style={styles.buttonE}>
          <Text style={styles.buttonTextE}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.text}>ou</Text>

        <TouchableOpacity style={styles.buttonCC}>
          <Text style={styles.buttonTextCC}>Criar Conta</Text>
        </TouchableOpacity>
        
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    marginTop: 50,
    width: 200,
    height: 200,
  },
  form: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    // alignSelf: 'stretch',
    // paddingHorizontal: 30,
    // marginTop: 30,
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 10,

    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2,
  },

  buttonE: {
    width: '90%',
    height: 42,
    backgroundColor: '#E90A0A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginBottom: 10,
  },

  buttonCC: {
    width: '90%',
    height: 42,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  
  buttonTextCC: {
    color: '#E90A0A',
    fontWeight: 'bold',
    fontSize: 16,
  },

  text: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },

  buttonTextE: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
