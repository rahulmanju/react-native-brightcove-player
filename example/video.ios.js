import * as React from 'react'
import {StyleSheet} from 'react-native'
import Video from 'react-native-video'

export interface VideoPlayerParams {
    source: {uri?: string} | number
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        width: '100%',
        height: 220,
        backgroundColor: 'black'
    }
})

export const RNVideoPlayer = (p: VideoPlayerParams) => (
    <Video source={p.source} style={styles.video} controls={true} paused={false}/>
)
