

## React native Redux Saga Axios login Boilerplate

It is a simple boiler plate project for using the combination of [react-native](https://facebook.github.io/react-native/), [redux](https://redux.js.org/) and [saga](https://github.com/redux-saga/redux-saga).

This application simply lands in a login page, and user can enter username and password to land in his profile screen. Application typically concentrated on understanding the flow of data in react and redux. [Side effects (asynchronous operations)](https://redux.js.org/docs/faq/Actions.html#actions-side-effects) are handled by saga. So kept the project as simple as possible, there is no fancy ui and only minimal node modules included for start development with this tech stack.

Node modules used - 

 1. axios
 2. react
 3. react-native
 4. react-navigation
 5. react-redux
 6. redux
 7. redux-saga

*Login page*

<img src="https://image.ibb.co/kzxaDm/Simulator_Screen_Shot_i_Phone_6_2018_01_31_at_18_19_19.png" width="350" height="665" alt="login page"/>

--
*Profile page*

<img src="https://image.ibb.co/bT8RKR/Simulator_Screen_Shot_i_Phone_6_2018_01_31_at_18_19_38.png" width="350" height="665" alt="Profile page"/>

--
*login error alert*

<img src="https://image.ibb.co/giXWm6/Simulator_Screen_Shot_i_Phone_6_2018_01_31_at_18_19_52.png" width="350" height="665" alt="login error message"/>


### Usage
clone this project

Run the below commands one by one 

`npm install`

 `npm start`

`npm run ios`      or       `npm run android`

In another command prompt/ bash start the mock server for mock login process. simple node server runs at 8080 which logs in if username 'admin' and password 'admin'. Can be modified as per usage or use a different API itself

`npm run mock`






### Create react native guide :- 

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

Below you'll find information about performing common tasks. The most recent version of create react native guide is available [here](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).



