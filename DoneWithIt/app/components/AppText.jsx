
import  { StyleSheet,Text} from 'react-native';
function AppText({children ,style}) {
    return (
     <Text style={[styles.text, style]}>
        {children}
     </Text>
    );
}
const styles = StyleSheet.create({
    text:{
    
    fontFamily:'Aria',
    fontWeight:'bold',
    textAlign : 'center'
   

    }
})

export default AppText;