import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Icon, Input, Button } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { LoginAction } from './../redux/actions/AuthAction';

const Login = () => {
    let [username, setUsername] = useState('');
    console.log(username)
    let dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Icon types='material' name="android" color="#3DDC84" size={100} />
            <Input 
                placeholder="Username"
                onChangeText={e => setUsername(e)}
            />
            <View>
                <Button 
                    title="Login"
                    containerStyle={{
                        alignItems: 'center'
                    }}
                    buttonStyle={{
                        backgroundColor: '#3DDC84',
                        width: '15%'
                    }}
                    onPress={() => dispatch(LoginAction({username}))}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',

    }
})
export default Login;
