This project is combination react-native and react-native-web. It implemented using monorepo approach of 
packaging with the help of Yarn. Redux store with sample User entity is also available along with
redux-persist.

To install dependencies: 
`yarn` in project directory

To run project mobile projects:
`yarn workspace mobile start`
`yarn workspace mobile android`

To run web project:
`yarn workspace web start`

To build android: 
Run `./gradlew assembleRelease` in mobile/android folder.

To push APK to android mobile device:
`adb install -r app/build/outputs/apk/release/app-release.apk`

To build web:
`yarn workspace web build`
