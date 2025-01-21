/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';

import App from './App';
import {name as appName} from './app.json';
import service from './service';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => service);

// appregistry registercomponent wasn t called after installing react native track player

// getting this error                                                                                                                                                      Error: Exception in HostObject::get for prop 'TrackPlayerModule': com.facebook.react.internal.turbomodule.core.TurboModuleInteropUtils$ParsingException: Unable to parse @ReactMethod annotation from native module method: TrackPlayerModule.add(). Details: Unable to parse JNI signature. Detected unsupported return class: kotlinx.coroutines.Job
