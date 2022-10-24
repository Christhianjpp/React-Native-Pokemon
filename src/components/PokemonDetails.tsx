import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: PokemonFull
}

export const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            style={{
                ...StyleSheet.absoluteFillObject,
            }}
            showsVerticalScrollIndicator={false}
        >
            {/* Types y peso */}
            <View style={{
                ...styles.container,
                marginTop: 380
            }}>
                <Text style={styles.title}> Types</Text>
                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.types.map(({ type }) => (
                            <Text style={{
                                ...styles.regularText,
                                marginRight: 10
                            }}
                                key={type.name}
                            >
                                {type.name}
                            </Text>

                        ))
                    }

                </View>
                <Text style={styles.title}> Peso</Text>
                <Text style={styles.regularText}>{pokemon.weight}kg</Text>

            </View>


            {/* Sprites */}
            <View style={styles.container}>
                <Text style={styles.title}> Types</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprite}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprite}
                />
            </ScrollView>
            {/* Habilidades */}
            <View style={styles.container}>
                <Text style={styles.title}>Habilidades base</Text>

                <View style={{ flexDirection: 'row' }}>

                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text style={{
                                ...styles.regularText,
                                marginRight: 10
                            }}
                                key={ability.name}
                            >
                                {ability.name}
                            </Text>

                        ))
                    }

                </View>

            </View>

            {/* Movimientos */}
            <View style={styles.container}>
                <Text style={styles.title}>Movimientos</Text>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    {
                        pokemon.moves.map(({ move }) => (
                            <Text style={{
                                ...styles.regularText,
                                marginRight: 10
                            }}
                                key={move.name}
                            >
                                {move.name}
                            </Text>

                        ))
                    }
                </View>
            </View>

            {/* Stats */}
            <View style={styles.container}>
                <Text style={styles.title}>Stats</Text>

                <View >

                    {
                        pokemon.stats.map((stat, i) => (
                            <View style={{
                                flexDirection: 'row'
                            }}
                                key={stat.stat.name + i}>

                                <Text style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                    width: 150
                                }}

                                >
                                    {stat.stat.name}
                                </Text>
                                <Text style={{
                                    ...styles.regularText,
                                    fontWeight: 'bold'
                                }}

                                >
                                    {stat.base_stat}
                                </Text>

                            </View>
                        ))
                    }
                </View>


                {/* Sprite final */}
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprite}
                    />
                </View>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 19
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})