import React, { useState } from 'react';
import { View, Text, Touchabel, TextInput, FlatList } from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';
import uuid from 'uuid/dist/v4';

function HomeScreen() {
    const navigation = useNavigation();
    const [ingrediente, setIngrediente] = useState('');
    const [list, setList] = useState([{
        id:uuid(),
        desc:'Ovos'
    }]);

    
    const addItem = () => {
        if (ingrediente != '') {
            setIngrediente((n)=>{
                setList((l)=>{
                    l.push({id:uuid(), desc:n});
                    setList(l);
                })
            });
        setIngrediente('');
        }

    }

    return (
        <View>
            <Touchabel onPress={addItem} ><Text>Adicionar</Text> </Touchabel>
            <Text>Faça um bolo</Text>
            <TextInput value={ingrediente} onChangeText={t => setIngrediente(t)}
                placeholder='Digite um ingrediente' />
                <FlatList
                    data={list} keyExtractor={item => item.id}
                    renderItem={({ item }) => <Text>{item.desc}</Text>}
                />
        </View>
    );
}

export default HomeScreen;  