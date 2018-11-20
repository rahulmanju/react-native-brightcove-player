package com.example;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.PixelFormat;
import android.media.MediaPlayer;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.MediaController;
import android.widget.Toast;
import android.widget.VideoView;

import com.danikula.videocache.HttpProxyCacheServer;

import static com.example.MainApplication.getProxy;

public class VideoActivity
        extends AppCompatActivity {
    private String videoPath;
    private int duration;
    private static ProgressDialog progressDialog;
    VideoView myVideoView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.content_video);
        Intent i = getIntent();
        if (i != null) {
            myVideoView = (VideoView) findViewById(R.id.videoView);
            videoPath = i.getStringExtra("VIDEO_URL");
            duration = i.getIntExtra("DURATION", 0);
            progressDialog = ProgressDialog.show(
                    VideoActivity.this,
                    "",
                    "Buffering video...",
                    true
            );
            progressDialog.setCancelable(true);
            PlayVideo();
        } else {
            Toast.makeText(
                    VideoActivity.this,
                    "VideoURL not found",
                    Toast.LENGTH_SHORT
            ).show();
        }
    }

    private void PlayVideo() {
        try {
            getWindow().setFormat(PixelFormat.TRANSLUCENT);
            MediaController mediaController = new MediaController(VideoActivity.this);
            mediaController.setAnchorView(myVideoView);
            HttpProxyCacheServer proxy = getProxy(VideoActivity.this);
            String proxyUrl = proxy.getProxyUrl(videoPath);
            myVideoView.setMediaController(mediaController);
            myVideoView.setVideoPath(proxyUrl);
            myVideoView.requestFocus();
            myVideoView.setOnPreparedListener(
                    new MediaPlayer.OnPreparedListener() {

                        public void onPrepared(MediaPlayer mp) {
                            progressDialog.dismiss();
                            mp.setOnSeekCompleteListener(
                                    new MediaPlayer.OnSeekCompleteListener() {

                                        @Override
                                        public void onSeekComplete(MediaPlayer mediaPlayer) {
                                            myVideoView.start();
                                        }

                                    }
                            );
                            myVideoView.seekTo(duration * 1000);
                        }

                    }
            );
        } catch (Exception e) {
            progressDialog.dismiss();
            finish();
        }
    }

}

