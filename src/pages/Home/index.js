import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Keyboard, Modal } from 'react-native';


export default function Home() {

    const [gasolina, setGasolina] = useState("");
    const [alcool, setAlcool] = useState("");
    const [resultado, setResultado] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    function somar() {

        const valor = (alcool / gasolina).toFixed(2);

        if (valor >= 0.70) {
            setResultado("Compensa usar Gasolina");
            setModalVisible(true);
            Keyboard.dismiss();
            return;
        }

        setResultado("Compensa usar Álcool");

        setModalVisible(true);

        Keyboard.dismiss();
    }

    function fecharModal() {
        setModalVisible(!modalVisible);
    }

    return (
        <View style={styles.container}>

            <View style={styles.areaImg}>

                <Image
                    source={require("../../imgs/logo.png")}
                    style={styles.img}
                />

                <Text style={styles.textImg}>Qual a melhor opção?</Text>

            </View>

            <View style={styles.areaCalcular} >

                <Text style={styles.text}>Álcool (preço por litro):</Text>

                <TextInput
                    placeholder="Digite o preço atual do Álcool"
                    style={styles.input}
                    value={alcool}
                    onChangeText={(text) => setAlcool(text)}

                />

                <Text style={styles.text}>Gasolina (preço por litro):</Text>

                <TextInput
                    placeholder="Digite o preço atual da Gasolina"
                    style={styles.input}
                    value={gasolina}
                    onChangeText={(text) => setGasolina(text)}

                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={somar}
                >

                    <Text style={styles.textBtn}>Calcular</Text>

                </TouchableOpacity>

            </View>

            {resultado &&
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                >

                    <View
                        style={styles.container}
                    >

                        <Image
                            source={require("../../imgs/gas.png")}
                            style={[styles.img, { marginTop: 50 }]}
                        />

                        <Text style={[styles.textImg, { color: "#3FCF2F" }]}>
                            {resultado}
                        </Text>



                        <View style={styles.resultado}>

                            <Text style={styles.tituloResultado}>
                                Com os preços:
                            </Text>

                            <Text style={styles.valorResultado}>
                                Álcool: R$ {alcool}
                            </Text>

                            <Text style={styles.valorResultado}>
                                Gasolina: R$ {gasolina}
                            </Text>

                            <TouchableOpacity style={styles.btnModal} onPress={fecharModal}>
                                <Text style={styles.textBntModal}>Calcular Novamente</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </Modal>
            }


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#333232'
    },
    img: {
        width: 200,
        height: 200
    },
    areaImg: {
        paddingTop: '30%',
        paddingBottom: '15%',
    },
    textImg: {
        color: '#FFF',
        fontSize: 20,
        paddingTop: 20,
        fontWeight: 'bold'
    },
    areaCalcular: {
        width: '100%'
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    },
    input: {
        backgroundColor: '#FFF',
        height: 50,
        padding: 10,
        borderRadius: 5,
        fontSize: 13,
        marginTop: 10,
        marginBottom: 10
    },
    btn: {
        backgroundColor: '#E72727',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    resultado: {
        width: '80%',
        alignItems: 'center',
        padding: 20
    },
    tituloResultado: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    valorResultado: {
        fontSize: 15,
        fontWeight: '300',
        color: "#FFF",
        marginTop: 15
    },
    btnModal: {
        borderWidth: 1,
        borderColor: "#E72727",
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    textBntModal: {
        color: "#E72727",
        fontWeight: '800',
        fontSize: 15
    }
});
