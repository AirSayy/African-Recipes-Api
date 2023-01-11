const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const meals = {
    'akara' : {
        'type of meal' : 'Breakfast',
        'origin': 'Nigeria',
    },

    'yam' : {
        'type of meal' : 'Lunch',
        'preparation-type': 'Boiled',
    },

    'coconut-rice' : {
        'type of meal' : 'Lunch',
        'origin': 'Nigeria',
    },

    'pap' : {
        'type of meal' : 'oops',
        'origin': 'oops',
    }
}

app.get('/' , (request , response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:mealName' , (req , res) => {
   const mealName =  req.params.mealName.toLowerCase()
   if(meals[mealName]){
    res.json(meals[mealName])
   }
   else{
    res.json(meals['Pap'])
   }



    // res.json(meals)
})

app.listen(PORT , () => {
    console.log(`The server is running on port ${PORT}!`)
})