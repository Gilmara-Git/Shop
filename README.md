<h1 align="center">Project developed during React Native - Practical Guide Course</h1>

<h1 align="center">Shop</h1>

<h1 align="center"><img src="https://ik.imagekit.io/cnbmdh4b9w/Screenshot_3_iRDm704Jm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649208539616"></h1>


## About

This **Shop** app displays a list of distinct products that can be added to a **cart** and later you can make an order.
If you click on a product, a **product detail** page is displayed and user can also add it a **cart** from there.

<p>User is able to increase, decrease items from the <strong>cart</strong>  or delete an item at once, no matter the previous quantity selected. The total amount in the <strong>cart</strong> reflects the change.</p>
Then, users can place their orders, but clicking on Order.
<p>After placing an order they can go to the menu on the top left and navigate to Orders.</p>
<p>Each user has an admin access, so they can add|create new products, delete or edit an existing one(except the price field). This is all being managed|controlled by react-redux store (Actions and reducers) </p>
<h1 align='center'><img src='https://ik.imagekit.io/cnbmdh4b9w/ezgif.com-gif-maker__5__FnEwHwJ12.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1649533857489'/></h1>

## Motivation
Practice **React Native** fundamentals such as Components, styling, font, Images, Button(TouchableOpacity, TouchableNativeFeedback), Lists (ScrollView and FlatList), navigation and state management with Redux) and Typescript.

## Improvements
Applied my own customized style for components and pages.
Used 'Dimensions API' to adjust fontSize on buttons whenever screen width is smaller than 350.

## Technologies used
- React Native
- Typescript 
- Expo
- React Navigation v4 (stackNavigator and  drawerNavigator)
- Redux (Global state management)
- Used Lib 'moment' on models > 'order.js' to output 'date' in details on Android as the built in JS method(toLocaleDateString) only outputs 'date' in details on iOS. This is due to how JS engine works in Android.

## Course Instructor:
<p>Maximilian Schwarzmüller</p>

## Platform
<p>Udemy</p>


