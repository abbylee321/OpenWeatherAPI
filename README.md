# OPENWEATHER API DATA COLLECTION

In this assignment, I’m calling the OpenWeather API and changing from sunrise and sunset time, when a user clicks a button.

## STYLE / DESIGN

I styled how I wanted 2 versions to look : night vs day. 

![Sketch](https://github.com/abbylee321/OpenWeatherAPI/blob/master/Design%20Inspiration%20-%20API.png)




## DEVELOPMENT
Using my style guide, I built out the elements of the HTML first. There were two parts to this assignment : learning how to do the Javascript to create user interactions on screen and manipulating the data. I think I focused too much on the former, so I didn’t spend enough time on learning how to pull the data and using the async function. Last semester, I used APIs with p5.js and the process in Javascript it very different. I got locked out of my account 2 times where I made more than 400 calls with my API Key. I spent a lot of time trying to debug why that was happening, and had trouble testing one small change in my code without being locked out. Cassie gave a good recommendation to download the JSON for testing purposes, so that’s what I did. In going into the coding lab and working with Billy, we realized my 400+ calls were because I used a function to call my async function, essentially nesting my functions.

Once that was solved, I manipulated multiple elements on the screen to change. Using document.createElementbyID was my friend here in changing multiple interface items with button clicked. The next step of this project would be to allow the user to switch between sunrise and sunset modes consistently. I think I need to create a boolean for this. Also, I display the sunrise time in real time. Right now, the data is  only loaded on the button click. 


