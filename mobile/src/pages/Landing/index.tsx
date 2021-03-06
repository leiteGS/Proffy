import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
//style
import styles from './styles'

//images
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClasses from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../../services/api';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateStudyPages() {
        navigate('study')
    }

    const [connections, setConnections] = useState(0)

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;

            setConnections(total)
        })
    }, [])

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.buttons, styles.buttonPrimary]} onPress={handleNavigateStudyPages}>
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.buttons, styles.buttonSecondary]}>
                    <Image source={giveClasses} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {connections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>

        </View>
    )
}

export default Landing; 