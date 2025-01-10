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
import Icon from "./Icon";
import colors from "../config/colors";


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
  <GestureHandlerRootView>
<Swipeable renderRightActions={
  renderRightActions
}>

      <TouchableHighlight onPress={onPress}>
        <View style={[styles.container, style]}>
        {ImageComponent}
{image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText numberOfLines={1} style={styles.title}>{title}</AppText>
            <AppText numberOfLines={2} style={styles.subTitle}>{subTitle}</AppText>
          </View>
  <Icon name={'chevron-right'} backgroundColor="none" color={colors.medium} size={30} />
        </View>
      </TouchableHighlight>
</Swipeable>
  </GestureHandlerRootView>
  
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: 'white',
    alignItems:'center'
  
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex:1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
    fontSize:14,
    textAlign:'left'
  },
  title: {

textAlign:'left',
fontWeight:'500'
  },
});

export default ListItem;
