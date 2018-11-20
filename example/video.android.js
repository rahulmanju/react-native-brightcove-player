import * as React from 'react'
import VideoPlayer from "./rn-video-player/index";

export interface VideoPlayerParams {
    source: {uri?: string} | number
}

export const RNVideoPlayer = (p: VideoPlayerParams) => (
    <VideoPlayer video={p.source}  />
)
