import { Statusbar } from 'expo-status-bar';
import React from 'react';
import { Stylesheet, Text, SafeAreView } from 'react-native';

export default function App() {
    return (
        <SafeAreView style={styles.container}>
            <Text>Привет {f\n'} Привет</Text>
       
       
         <Statusbar style="auto" />
       </SafeAreView>
    );
}

conts styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})








 
import Header from './components/Header';
import List from './components/Header';

export default function App() {
    conts [ListOfItems, setListOfItems] = useState([
        {text: 'Купить молок', index:1}
        {text: 'Помыть машину', index:2}
        {text: 'Купить картошку', index:3}
        {text: 'Стать миллионера', index:4}
    ])

    return (
        <View> 
            <Header />
        <View>
            <FlatList data={listOfItems} renderItem={({ item })} => (
                <Text>{item.text}</Text>
            )} />
            </View>
    </View>
 );
}
 
const styles = Stylesheet.create({

});