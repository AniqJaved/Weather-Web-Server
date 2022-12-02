
# Weather-Web-Server

### Participants

Github : @AniqJaved 

Discord : AniqJaved#4687

### Description

This is a weather app where you can search the weather details of a particular area. 

### Preview


![](weather.gif)



## Set up Project Requirements

You need following requirement to setup your project:

### Prerequisites

- Node (https://node.org/)

### Install Project

Here are the steps to be taken after that:


1. Clone the repository:

git clone https://github.com/AniqJaved/Weather-Web-Server.git


2. Change directory:
    ```bash
    cd Weather-Web-Server
    ```
3. Install dependencies
    ```bash
    npm install
    ```
4. Start the server
    ```bash
    nodemon src/app.js -e js.hbs
    ```
5. Change directory , install dependencies and start the store-front
    ```bash
    cd ..
    cd my-store-front
    yarn install
    yarn dev
    ```

## Live Preview
Try it out at: https://aniq-weather-application.herokuapp.com/weather


##Further details


# Local Server
To run in a local server use : nodemon src/app.js -e js.hbs

Or

As i have added the nodemon as devdependey so you can simply use: npm start dev

It is becasuse previously we have nodemon as global but then we installed it as: npm i nodemon --save-dev

It means it will run only during the development enviroment. Cool.....


