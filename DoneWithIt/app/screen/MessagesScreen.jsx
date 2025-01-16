import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import itemSeprator from '../components/itemSeprator';
import ItemDelete from '../components/ItemDelete';
import { useState } from 'react';
import ListItemSwipeable from '../components/ListItemSwipeable';


const InitialMessage = [
    { id: 1, title: 'Qasim', description: 'Hi Hope you are doing well and i am waiting for you many time ', image: require("../assets/image.png") },
    { id: 2, title: 'Taimoor', description: 'Ok lets meet in a town and enjoy a party', image: require("../assets/image.png") },

];

function MessagesScreen(props) {
    const [Refreshing, setRefreshing] = useState(false);
    const [Messages, setMessages] = useState(InitialMessage);

    const handleDel = (message) => {
        // Filter out the deleted message
        setMessages(Messages.filter(m => m.id !== message.id));
    };

    return (
        <Screen>
            <FlatList
                data={Messages} // Use Messages state, not InitialMessage
                keyExtractor={(message) => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => alert(`Thanks for tap ${item.title}`)}
                        renderRightActions={() => (
                            <ItemDelete onPress={() => handleDel(item)} />
                        )}
                    />
                )}
                ItemSeparatorComponent={itemSeprator}
                refreshing={Refreshing}
                onRefresh={() => {
                    // Refresh to initial state
                    setMessages([
                        { id: 2, title: 'T1', description: 'D1', image: require("../assets/image.png") },
                        { id: 3, title: 'T1', description: 'D1', image: require("../assets/image.png") },   
                    ]);
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
