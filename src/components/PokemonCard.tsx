import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useState, useEffect, useRef } from 'react';
import ImageColors from 'react-native-image-colors'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigator';


interface Props {
    pokemon: SimplePokemon
}

const windowWidth = Dimensions.get('window').width


export const PokemonCard = ({ pokemon }: Props) => {

    const navigation = useNavigation<any>()

    const [bgColor, setBgColor] = useState('grey')

    const isMounted = useRef(true)

    useEffect(() => {

        if (!isMounted.current) return;

        ImageColors.getColors(pokemon.picture, { fallback: 'grey' })
            .then(colors => {
                if (colors.platform === 'android') {
                    setBgColor(colors.dominant || 'grey')
                } if (colors.platform === 'ios') {
                    setBgColor(colors.background || 'grey')
                }

            })

        return () => {
            isMounted.current = false
        }

    }, [pokemon])


    return (

        <TouchableOpacity
            activeOpacity={0.8}
            onPress={
                () => navigation.navigate('PokemonScreen', { simplePokemon: pokemon, color: bgColor })
            }
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor

            }}>
                <View>
                    <Text style={styles.name}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>


                <View style={styles.containerPokebola}>

                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={styles.pokebola}
                    />
                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={styles.pokemonImage}
                />

            </View>
        </TouchableOpacity >

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        width: 160,
        marginBottom: 25,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 10,
        left: 10
    },
    containerPokebola: {
        width: 150,
        height: 150,
        position: 'absolute',
        bottom: -50,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    },
    pokebola: {
        width: 120,
        height: 120,
        position: 'absolute',
        buttom: -25,
        right: -25,
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        buttom: -5,
        top: 10
    },
})