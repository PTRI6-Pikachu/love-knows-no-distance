Sigele's Notes: 

--The front end lives mostly in App.js and the "screens" file. App.js is the entry point; screens represents the various pages of the front end, components represent the 'pieces' that make up each. The components file is very much a work in progress.

--"onPress" is one of the main listener funcs in Native; it takes the place of pretty much all the key/mouse listeners in standard React.

--I'm using React Navigator API to handle routing between pages. The docs are particularly accessible.

--You'll notice the code is not very DRY; I haven't worked on the front end since Mid portion, so I'm a little rusty on styling components, passing down props, etc. Please bear with me, and feel free to refactor as needed!

--I'm simulating the project using Expo (for bundling) and XCode (for mobile UI simulation). Setting up mobile dev environment it a HUGE hassle; I can only recommend making an Expo account and checking out the Expo docs (https://docs.expo.dev/) to get help with your specific config. If you're only planning to be on back end it might not be necessary.

--other useful resources:

React Docs:
https://reactnavigation.org/docs/
https://reactnative.dev/docs/
https://reactnative.dev/docs/environment-setup

Simulators*:
https://developer.android.com/studio
https://developer.apple.com/xcode/


*you can technically use these as IDEs, but considering we've worked in VSCode up until now I don't see the point in overcomplicating things.