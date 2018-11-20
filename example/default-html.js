import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import HTML from "react-native-render-html";
import {RNVideoPlayer} from "./video";

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
        flex: 1,
        width: '100%',
        height: 220,
        backgroundColor: 'red'
    },
    html: {
        padding: 8,
        width:'100%',
        height:'100%',
        backgroundColor:'green'
    }
});
const videoRenderer = (attr: { src: string }) => (
    <RNVideoPlayer source={{uri: attr.src}} />
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

export default class DefaultHTML extends Component {
    render() {
        return (
            <HTML
                {...defaultProps}
                style={styles.html}
                html={htmlContent}/>
        );
    }
}


