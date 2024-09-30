import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './styles'; // Importando o arquivo de estilos

export default function ProdutosScreen({ navigation }) {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tamanho, setTamanho] = useState('');

  const handleSaveProduct = () => {
    if (id && nome && descricao && valor && tamanho) {
      alert('Produto salvo com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={styles.header}>
        <Appbar.Action icon="menu" onPress={() => navigation.toggleDrawer()} />
        <Appbar.Content title="Cadastro de Produto" titleStyle={styles.title} />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          label="ID"
          value={id}
          onChangeText={text => setId(text)}
          style={{width: '60%', marginBottom: 20}}
          mode="outlined"
        />
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={{width: '60%', marginBottom: 20}}
          mode="outlined"
        />
        <TextInput
          label="Descrição"
          value={descricao}
          onChangeText={text => setDescricao(text)}
          style={{width: '60%', marginBottom: 20}}
          mode="outlined"
        />
        <TextInput
          label="Valor"
          value={valor}
          onChangeText={text => setValor(text)}
          style={{width: '60%', marginBottom: 20}}
          mode="outlined"
          keyboardType="numeric"
        />
        <TextInput
          label="Tamanho"
          value={tamanho}
          onChangeText={text => setTamanho(text)}
          style={{width: '60%', marginBottom: 20}}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleSaveProduct}
          style={{width: '30%', marginBottom: 20}}
        >
          Salvar Produto
        </Button>
      </View>
    </View>
  );
}
