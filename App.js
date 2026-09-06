import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';

// Importando os 5 arquivos exigidos pela atividade
import Soma from './src/Soma';
import Subtracao from './src/Subtracao';
import Multiplicacao from './src/Multiplicacao';
import Divisao from './src/Divisao';
import Resultado from './src/Resultado';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const v1 = parseFloat(valor1);
    const v2 = parseFloat(valor2);

    if (isNaN(v1) || isNaN(v2)) {
      setResultado('Erro: Digite os números');
      return;
    }

    switch (operacao) {
      case '+': setResultado(v1 + v2); break;
      case '-': setResultado(v1 - v2); break;
      case '*': setResultado(v1 * v2); break;
      case '/': 
        setResultado(v2 === 0 ? 'Erro: Divisão por 0' : (v1 / v2).toFixed(2)); 
        break;
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora</Text>
        <Text style={styles.subtitle}>Atividade Prática 04</Text>
      </View>

      <View style={styles.card}>
        <TextInput
          style={styles.input}
          placeholder="Primeiro valor"
          placeholderTextColor="#8C8C9A"
          keyboardType="numeric"
          value={valor1}
          onChangeText={setValor1}
        />
        <TextInput
          style={styles.input}
          placeholder="Segundo valor"
          placeholderTextColor="#8C8C9A"
          keyboardType="numeric"
          value={valor2}
          onChangeText={setValor2}
        />

        <View style={styles.row}>
          <Soma onPress={() => calcular('+')} />
          <Subtracao onPress={() => calcular('-')} />
          <Multiplicacao onPress={() => calcular('*')} />
          <Divisao onPress={() => calcular('/')} />
        </View>
      </View>

      <Resultado valor={resultado} />
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E1E1E6',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#8257E5',
    fontWeight: '600',
    marginTop: 5,
  },
  card: {
    width: '100%',
    backgroundColor: '#202024',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  input: {
    height: 55,
    backgroundColor: '#121214',
    borderRadius: 12,
    paddingHorizontal: 20,
    fontSize: 18,
    color: '#E1E1E6',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#323238',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
});