import React from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';
import PerfilButton from '../util/PerfilButton';

function PerfilFisico({ user }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" imageStyle={{ borderRadius: 20}} style={styles.containerImage}>

                <Image source={{ uri: `${user.fotoPerfil}` }}
                    style={styles.fotoPerfil} />

            </ImageBackground>
            <View style={styles.info}>
                <PerfilButton chave="Primeiro Nome" value={user.primeiroNome} />
                <PerfilButton chave="Sobrenome" value={user.sobrenome} />
                <PerfilButton chave="Data Nascimento" value={user.dataNascimento} />
                <PerfilButton chave="Email" value={user.email} />
                <PerfilButton chave="Senha" value={user.senha} />
                <PerfilButton chave="CPF" value={user.cpf} />
            </View>
        </View>
    );
}

export {
    PerfilFisico
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center"
    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#151515',
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50,
        flex: 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    info: {
        flex: 0.7,
    },
    fotoPerfil: {
        height: 100,
        width: 100,
        marginBottom: 50,
        borderRadius: 100
    },
    container: {
        flex: 1,
    },
});