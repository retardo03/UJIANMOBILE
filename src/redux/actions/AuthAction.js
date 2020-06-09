import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage'


export const getuser =()=>{
    return async dispatch =>{
        try {
            let res=await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',{
                headers:{
                    " X-Api-Key" : "f1347ff7-9111-42ae-a6c8-a32921baeaaf"
                }
            })
            dispatch({
               type : 'GETUSER',
               payload:res.data
            })
        } catch (error) {
    
        }
    }
}

export const LoginAction=(data)=>{
    return async dispatch=>{
        try {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const KeepLogin=()=>{
    return async dispatch=>{
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
     } catch (error) {
         
     }
    }
}
export const imageAction = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'GAMBAR',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const logoutAction = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGOUT'
            })
            await AsyncStorage.removeItem('username')
        } catch (error) {
            
        }
    }
}