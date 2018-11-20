package com.example;

import android.app.Application;
import android.content.Context;

import com.danikula.videocache.HttpProxyCacheServer;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.brentvatne.react.ReactVideoPackage;
import jp.manse.BrightcovePlayerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new ReactVideoPackage(),
            new BrightcovePlayerPackage(),
            new BridgePackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  private HttpProxyCacheServer proxy;

  public static HttpProxyCacheServer getProxy(Context context) {
    MainApplication app = (MainApplication) context.getApplicationContext();
    return app.proxy == null ? (app.proxy = app.newProxy()) : app.proxy;
  }

  private HttpProxyCacheServer newProxy() {
    return new HttpProxyCacheServer(this);
  }
}
