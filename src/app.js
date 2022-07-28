const path= require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./util/geocode');
const forecast = require('./util/forecast');

//Starting express package
const app = express();

//Getting heroku port number
const port = process.env.PORT || 8000;

//Define path for express configuration
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath) 


//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        res.render('index',{
            title: 'Weather',
            name: 'Aniq',
            text: "No address in search bar"
        })
    }

    else{
        geocode(req.query.address,(error,{latitude,longitude,location}={})=>{  //We are using object desturcutinng here. So data is coming form the geocode.js and then latitude = data.latitude. It is similar to const {latitude,longitude} = data.
            if(error){
                return res.send({error})
            }
        
            forecast(latitude,longitude,(error,forecastdata)=>{
                if(error){
                    return res.send({error})
                }
                res.send({
                    "Location":location,
                    "Forecast": forecastdata
                });
            });
            
        });
    }
    
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About',
        name: 'Aniq'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        title: 'Help',
        name: 'Aniq',
        helpText: "Here you can get the information regarding the application"   
    })
})

app.get('/help/*',(req,res) =>{
    res.render('help',{
        title: 'Help',
        name: 'Aniq',
        helpText: "Help article not found"   
    });
})

app.get('*',(req,res)=>{
    res.render('404',{
        title: '404',
        name: 'Aniq',
        errorMessage: "404 Page not found"   
    });
})


app.listen(port,() => {
    console.log(`server is up on port ${port}`)
})