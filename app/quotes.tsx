import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

const dropdownData = [
    { label: 'White', value: 'white' , box: 'rgba(255, 206, 244, 1)'},
    { label: 'Purple', value: 'rgba(98, 7, 139, 1)', box: 'rgba(233, 184, 255, 1)'},
    { label: 'Blue', value: 'rgba(23, 35, 124, 1)', box: 'rgba(176, 185, 255, 1)' },
]

const apiPractice = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [backgroundColor1, setBackgroundColor] = useState('white');
  const [boxColor, setBoxColor] = useState('rgba(255, 206, 244, 1)');

  const Quotes = async () => {
    try {
        const response = await fetch('https://dummyjson.com/quotes');
        const json = await response.json();
        setData(json.quotes);
        setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    Quotes();
  }, []);

const getQuotes = () => {
    if (data.length === 0) {
        Quotes();
    } else {
        const filteredData = data.filter(item =>
            item.quote.toLowerCase().includes(inputValue.toLowerCase())
        );
        setData(filteredData);
    }
}

  return (
    <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <Text style={[styles.playfair, {fontSize: 30, marginLeft: 20, marginTop: 10, color: backgroundColor1 === 'white' ? 'black' : 'white' }]}>For Motivation</Text>
                <Dropdown
                    style={{ width: 100, marginRight: 10, borderWidth: 1, borderColor: 'darkgray', borderRadius: 5, padding: 5, marginTop: 12, alignContent: 'center', backgroundColor: backgroundColor1 === 'white' ? 'white' : boxColor }}
                    data={dropdownData}
                    labelField="label"
                    valueField="value"
                    placeholder="Select Background Color"
                    value={backgroundColor1}
                    onChange={item => {setBackgroundColor(item.value); {setBoxColor(item.box);}}}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={[styles.input, { flex: 1, marginTop: 10, marginBottom: 10, backgroundColor: 'white'}]}
                    placeholder="Search quotes..."
                    placeholderTextColor="rgba(213, 125, 195, 1)"
                    value={inputValue}
                    onChangeText={(inputValue) => setInputValue(inputValue)}
                />
                <TouchableOpacity
                    style={[styles.button, {marginTop: 10, marginBottom: 10}]}
                    onPress={() => getQuotes()}
                >
                    <Text style={{color: 'white'}}>Search</Text>
                </TouchableOpacity>
            </View>
            
            {loading ? (
                <Text style={{textAlign: 'center'}}>Loading...</Text>
            ) : (
                <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={[styles.item, {backgroundColor: boxColor}]}>
                        <Text style={[styles.title, styles.playfair, {fontSize: 18}]}>{item.quote}</Text>
                        <Text style={[styles.author, styles.playfair, {fontSize: 15, color: 'rgba(162, 91, 148, 1)'}]}>- {item.author}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                />
            )}
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default apiPractice
