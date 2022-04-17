import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Button } from 'react-native'
import colors from '../assets/colors/colors'
import Entypo from 'react-native-vector-icons/Entypo'

Entypo.loadFont()

const height = Dimensions.get('window').height

const Details = ({ route, navigation }) => {
    const { item } = route.params
    return (
        <View style={styles.container}>
            <ImageBackground source={item.imageBig} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.titleWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                        <Entypo name="location-pin" size={24} color={colors.white} />
                        <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <Entypo name="heart" size={32} color={colors.orange} />
                </View>
                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Price</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.prices}</Text>
                            <Text style={styles.infoSubText}> /Person</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Rating</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.ratings}</Text>
                            <Text style={styles.infoSubText}> /5</Text>
                        </View>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>Duration</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.duration}</Text>
                            <Text style={styles.infoSubText}> /Hours</Text>
                        </View>
                    </View>
                </View>


                {/* button */}
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You have booked a trip!')}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backgroundImage: {
        height: height * 0.6,
        justifyContent: 'space-between'
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 20,
        marginTop: -20
    },
    backIcon: {
        marginLeft: 20,
        marginTop: 50
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginBottom: 40,
    },
    itemTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 32,
        color: colors.white
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 16,
        color: colors.white,
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30,
        marginHorizontal: 20
    },
    descriptionTitle: {
        fontFamily: 'Lato_700Bold',
        fontSize: 24,
        color: colors.black
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Lato_900Black_Italic',
        color: colors.darkGray,
        height: 85
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    infoItem: {},
    infoTitle: {
        fontFamily: 'Lato_900Black_Italic',
        fontSize: 12,
        color: colors.gray,
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    infoText: {
        fontFamily: 'Lato_900Black_Italic',
        fontSize: 28,
        color: colors.orange
    },
    infoSubText: {
        fontFamily: 'Lato_700Bold',
        fontSize: 14,
        color: colors.gray
    },
    buttonWrapper: {
        marginHorizontal: 20,
        marginTop: 40,
        backgroundColor: colors.orange,
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'Lato_900Black_Italic',
        fontSize: 18,
        color: colors.white
    }
})


export default Details