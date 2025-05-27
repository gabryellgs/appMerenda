import React from "react";
import { Text, View, Image, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import { style } from "./styles";

import Fundo from '../../assets/fundo.png'; // imagem de fundo
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

export default function Login () {
    return (
        <ImageBackground source={Fundo} style={style.container} blurRadius={2}>
            <View style={style.boxTop}>
                <Text style={style.text}>Merenda Escolar | Cardápio do Aluno</Text>
            </View>

            <View style={style.boxMid}>
                <Text style={style.textInput}>EMAIL</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.input} />
                    <MaterialIcons 
                        name="email"
                        size={20}
                        color={'gray'}
                    />
                </View>
                 <Text style={style.textInput}>SENHA</Text>
                 <View style={style.boxInput}>
                    <TextInput style={style.input} />
                    <MaterialIcons 
                        name="remove-red-eye"
                        size={20}
                        color={'gray'}
                    />
                </View>
                <Text style={style.textoAviso}>Apenas e-mails “escolar.ifrn.edu.br” são aceitos</Text>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.bottom}>
                    <Text style={style.text2}>ENTRAR COMO ALUNO</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}