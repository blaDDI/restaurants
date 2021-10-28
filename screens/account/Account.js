import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

//import firebase from 'firebase/app';
import * as firebase from 'firebase/app'


import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

const Account = () => {
    const [login, setLogin] = useState(null);


        firebase.auth().onAuthStateChanged((user) => {
            user !== null ? (setLogin(true)) : setLogin(false)
        });


    if(login == null) {  
        return <Text>Cargando</Text>
    }
    return login ? <UserLogged/> : <UserGuest/>
}

export default Account

const styles = StyleSheet.create({})
