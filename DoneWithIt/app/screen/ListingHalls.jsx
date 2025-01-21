import React, { useEffect, useState } from 'react';
import { Button, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';
function ListingHalls({navigation}) {
 const{data:listings,error,loading, request:loadListings}= useApi
 (listingsApi.getListings);
  
useEffect(()=>{
    loadListings();
},[])
    return (
      <Screen >
          {
            
            error && <><AppText>Reload the App </AppText>
            
            <Button title='Reload'onPress={loadListings}/>
            </>
            
           
          }
<ActivityIndicator visible={loading}  />
<FlatList
  data={listings}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => (
    <Card
      title={item.title} // Title
      subTitle={item.price ? `$${item.price}` : 'Price not available'} // Price
      imageUrl={item.images && item.images.length > 0 ? item.images[0].url : 'defaultImageUrl'} // Image
      onPress={() => navigation.navigate('Listings', item)} 
    />
  )}
/>


        </Screen>
    );
}

export default ListingHalls;