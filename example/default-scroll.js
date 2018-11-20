import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import {RNVideoPlayer} from "./video";

export default class DefaultScroll extends Component {
    state = {
        playing: false,
        currentTime: 0,
        duration: 0,
        bufferProgress: 0,
        fullscreen: false,
        disableControl: false,
        volume: 1
    };

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.videoContainer}>
                    <RNVideoPlayer source={{uri: 'https://sportsguru.com/skillup-uploads/prod-images/2018/11/WhatsApp-Video-2018-11-15-at-6.59.28-PM.mp4'}} />
                 </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    videoContainer: {
        flex: 1,
        paddingTop: 0,
        flexDirection: 'column',
        height: 1000
    },
    player: {
        flex: 1,
        height: 220,
        width: '100%'
    },
    content: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    control: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15
    },
    scrollView: {
        width: '100%'
    }
});
