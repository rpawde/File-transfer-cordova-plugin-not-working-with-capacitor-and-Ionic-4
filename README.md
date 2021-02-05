# File-transfer-cordova-plugin-with-capacitor-and-Ionic-4
Description of the problem:
Downloading a file in the Ionic 4/Capacitor application with file-transfer Cordova plugin is not working on Android. It works fine on iOS but immediately fails with 401 error on Android. I tried to debug it in Android Studio and it looks like this plugin method is not even hit..

Affected platform

- Android

OS of the development machine

- Windowse

Other information:
ionic info output
```
Ionic:

   ionic (Ionic CLI)             : 4.5.0 (/Users/alexryltsov/.nvm/versions/node/v10.14.2/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 4.0.0
   @angular-devkit/build-angular : 0.12.3
   @angular-devkit/schematics    : 7.2.3
   @angular/cli                  : 7.2.3
   @ionic/angular-toolkit        : 1.2.3

Capacitor:

   capacitor (Capacitor CLI) : 1.0.0-beta.17
   @capacitor/core           : 1.0.0-beta.17

Cordova:

   cordova (Cordova CLI) : 8.1.2 (cordova-lib@8.1.1)
   Cordova Platforms     : none
   Cordova Plugins       : no whitelisted plugins (4 plugins total)

System:

   Android SDK Tools : 26.1.1 (/Users/alexryltsov/Library/Android/sdk/)
   NodeJS            : v10.14.2 (/Users/alexryltsov/.nvm/versions/node/v10.14.2/bin/node)
   npm               : 6.5.0
   OS                : macOS Mojave
   Xcode             : Xcode 10.1 Build version 10B61
```
Capacitor version:
see above

node version:
see above

npm version:
see above

CocoaPods version:
1.5.3

Steps to reproduce:
download any file from valid link (having HTTPS!) using file-transfer cordova plugin fails with 401 error
