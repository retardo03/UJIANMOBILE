  
import React, { useEffect } from 'react';
import { View, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getuser } from './../redux/actions/AuthAction';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    let dataKucing = useSelector(state => state.auth.dataKucing);
    let dispatch = useDispatch();
    
    
    useEffect(() =>{
        dispatch(getuser())
    }, [dispatch])

    return (
        <View style={{backgroundColor: 'black', flex:1}}>
            <FlatList 
                keyExtractor={(index) => index.toString()}
                data={dataKucing}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Detail', {detail: item})}
                        style={{backgroundColor: 'white', flex:1}}
                    >
                        <Image
                        style={{width: 200, height: 200}}
                        source={{
                            uri: item.url
                        }}
                    />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default Home;