
import  { StyleSheet,Text} from 'react-native';
function AppText({children}) {
    return (
     <Text style={styles.text}>
        {children}
     </Text>
    );
}
const styles = StyleSheet.create({
    text:{
    fontSize:18,
    fontFamily:'Aria',
    fontWeight:'bold',
    textAlign:'center',
  color:'white'

    }
})

export default AppText;