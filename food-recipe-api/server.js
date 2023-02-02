const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 7000

const meals = {
    'rice' : {
        ['fried rice'] : {
           [ 'ingredients 1' ]: 
                [
                    'chicken 1.2kg',
                    'thumb sized ginger (chopped or minced',
                    '3 cloves garlic (chopped)',
                    '1 small medium onions',
                    '1 teaspoon salt',
                    '1 1/2 teaspoon curry powder',
                    '3 stem fresh thyme / 1 teaspoon dried thyme'
                ],
            ['ingredients 2'] :
                [
                    '3 cups of rice (basmatti rice)',
                    '2 cups meat stock',
                    '1 cup water',
                    '2 teaspoon curry powder',
                    '1 teaspoon white pepper',
                    '1/2 green bell pepper'
                ],
            ['ingredients 3'] : 
                [
                    '1 bunch spring onion',
                    '1 carrot',
                    '1 bell pepper',
                    'a cup of sweet corn',
                    'a cup of green beans',
                    'half teaspoon salt, garlic powder, curry, thyme',
                    '2 teaspoon white pepper',
                    '1 chicken cube',
                    'diced sausuages'
                ],
            'instructions' :
                [
                    '1 : in a pot lorem ispum ...'
                ]
                
                
                    
                
                
            
                
            },
        ['jollof rice'] : {
                ['ingredients 1'] :
                [
                    '8 cups of rice',
                    '3 medium bell pepper',
                    '5 pieces of tomato',
                    '2 scotch bonnet pepper',
                    'half onion',
                    '3 cloves of galic',
                    '2 ginger'
                ]
            },
        ['coconut rice']:{
            ['ingredients'] :
            [

            ],
            ['instructions']:
            [

            ]
        },
        ['native rice']:{
            ['ingredients']:
            [

            ],
            ['instructions']:
            [
                'lorem'
            ]
        }
        },
        'yam':{
            ['yam peppersoup'] :{
                ['ingredients']:
                [
                    'lorem'
                ]
            }
        },
        'pasta' :{
            ['jollof spagetti'] : {
                ['ingredients'] : 
                [
                    'lorem'
                ],
                'instructions' :
                [
                    'lorem ispum'
                ]
            }
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
    res.json('unknown')
   }



    //  res.json(meals)
})

app.listen(PORT , () => {
    console.log(`The server is running on port ${PORT}!`)
})
