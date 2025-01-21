import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ActivityIndicatorBase, Button, FlatList } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import listingsApi from '../api/listings';
import AppText from '../components/AppText';


function ListingHalls({navigation}) {
    const [listings,setListings]=useState([])
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(false)
useEffect(()=>{
    loadListings();
},[])
    const loadListings= async ()=>{
      setLoading(true)
        const response= await listingsApi.getListings();
    setLoading(false)
        setListings(response.data)
        if(!response.ok) return setError(true);
        setError(false)
    }
    return (
      <Screen >
          {
            
            error && <><AppText>Reload the App </AppText>
            
            <Button title='Reload'onPress={loadListings}/>
            </>
            
           
          }
<ActivityIndicator animating={loading} size={50} />
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