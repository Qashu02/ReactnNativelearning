import React from 'react';
import { FlatList } from 'react-native';
import Card from '../components/Card';

const halls=[{
    id:1,
    name:'Royals',
    price:'$100',
    image:require('../assets/Hall1.jpg')
},{
    id:2,
    name:'Diamond',
    price:'$1000',
    image:require('../assets/Hall2.jpg')
}]
function ListingHalls(props) {
    return (
     <FlatList data={halls}
     keyExtractor={(halls)=>halls.id.toString()}
     renderItem={({item})=><Card title={item.name}/>} />
    );
}

export default ListingHalls;