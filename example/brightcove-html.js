import React, {Component} from 'react';
import {
    StyleSheet,
    Dimensions, View
} from 'react-native';
import {BrightcovePlayer} from 'react-native-brightcove-player';
import HTML from "react-native-render-html";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'green'
    },
    player: {
        flex: 1
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
    video: {
        width: '100%',
        height: 220
    },
    html: {
        flex: 1,
        padding: 8
    }
});
const videoRenderer = (attr) => (
    <BrightcovePlayer
        accountId="6008340455001"
        videoId="6009486850001"
        policyKey="BCpkADawqM2HRDvtLxjif_KyjnhHtg7RS8advAhVCOHvDc2kHo9587NU_BE0VXSDoAaRCarG8hBlBqtrLvKXUh2SRVSAURawe8BPjFcVjCdfRgBqR6kdwzsf6LT0ojMErgEMKusg7um0tBFz"
        style={styles.video}
        play={true}
        autoPlay={true}
        fullscreen={false}
    />
)


const htmlContent = '<div id="dslc-theme-content"><div id="dslc-theme-content-inner"><p>Hear what Boria has to say, for this crucial encounter</p>\n<p><iframe src="https://sportsguru.com/skillup-uploads/prod-images/2018/11/WhatsApp-Video-2018-11-15-at-6.59.28-PM.mp4" width="270" height="480" frameborder="0" allowfullscreen="allowfullscreen"></iframe></p>\n</div></div>'
const renderers = {
    iframe: videoRenderer
}


const padding = 8

const imagesMaxWidth = Dimensions.get('window').width - padding * 2


const defaultProps = {
    renderers,
    imagesMaxWidth,
    imagesInitialDimensions: {
        width: imagesMaxWidth,
        height: imagesMaxWidth
    },
    width: 0,
    height: 0
}

export default class BrightCoveHTML extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HTML
                    {...defaultProps}
                    style={styles.html}
                    html={htmlContent}/>
            </View>
        );
    }
}

