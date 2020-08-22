# React Native Dark Mode 🌝 ➙ 🌚

This POC covers how to detect and support dark mode in React Native apps i.e. sets its appearance based on the platform OS. The platform OS will have two theme modes, dark or light. By default, when the app will start, it is going to have the theme based on the platform OS but the user is going to have an option to switch between the themes.

# Run this POC
```sh
git clone https://github.com/moneyjain21/react-native-dark-mode.git
cd react-native-dark-mode
npm install
```

For <b><i>Android</i></b> run the following command to your terminal:
```sh
react-native run-android
```

For <b><i>iOS</i></b> run the following command to your terminal:
```sh
react-native run-ios
```



# Installation
create a new project, here {projectName} can be any name you wish to give to your app, for eg. darkMode
```sh
react-native init {projectName}
```
 navigate inside the project directory:
```sh
cd {projectName}
```
Install the following dependencies:
```sh
yarn add styled-components react-native-appearance
```
##### or
```sh
npm install styled-components
npm install react-native-appearance
```

#### If you are using RN Version >= 0.60
Automatic linking will be done.

####  RN Version < 0.60
Run `react-native link`

### For Android do the following configuration:
open the file `android/app/src/main/AndroidManifest.xml` and add the `uiMode` flag. i.e.
```sh
android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode"
```
Next, open `android/app/src/main/java/com/{projectName}/MainActivity.java` (here {projectName} will be in small letters i.e. darkmode).
Now, add the following lines:
```sh
import android.content.Intent;
import android.content.res.Configuration;

// inside public class MainActivity extends ReactActivity

@Override
 public void onConfigurationChanged(Configuration newConfig) {
 super.onConfigurationChanged(newConfig);
 Intent intent = new Intent("onConfigurationChanged");
 intent.putExtra("newConfig", newConfig);
 sendBroadcast(intent);
 }
 ```

### For iOS do the following:
```sh
cd ios && pod install
```


