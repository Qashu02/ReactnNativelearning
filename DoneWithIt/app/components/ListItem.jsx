import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ImageComponent,
} from "react-native";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";



function ListItem({
  style,
  title,
  subTitle,
  image,
  ImageComponent,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (<>

      <TouchableHighlight onPress={onPress}>
        <View style={[styles.container, style]}>
        {ImageComponent}
{image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: 'white',
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: 'red',
    textAlign:'left'
  },
  title: {

textAlign:'left',
fontWeight:'500'
  },
});

export default ListItem;
