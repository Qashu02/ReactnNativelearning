import React from 'react';
import { FlatList, View,StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

function MessagesScreen(props) {
    const message=[
        {
id:1,
title:'T1',
description:'D1',
image:require("../assets/image.png")
    },
        {
id:1,
title:'T1',
description:'D1',
image:require("../assets/image.png")
    }
    ,
        {
id:1,
title:'T1',
description:'D1',
image:require("../assets/image.png")
    }
      
]
    return (
        <Screen>

      <FlatList data={message}
      keyExtractor={message=>message.id.toString()}
      renderItem={({item})=><ListItem
      title={item.title}
      subtitle={item.description}
      image={item.image}/>}
      >

      </FlatList>
        </Screen>
    );
}
const styles = StyleSheet.create({
    
})

export default MessagesScreen;