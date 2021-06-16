import React from 'react';
import {StyleSheet,Text} from 'react-native'
import {Container,Spinner} from 'native-base'


const emptyContainer = () => {
    return(
        <Container style={styles.emptycontainer}>
        <Spinner/>
        </Container>
    )
}
const styles = StyleSheet.create({
    emptycontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default emptyContainer;