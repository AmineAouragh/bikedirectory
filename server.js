const express = require('express') 
require('dotenv').config()
import { supabase } from '@/pages/api/supabase.js'

const app = express() 

app.use(express.json())

const PORT = 8080

app.post('/submit-bike-shop', async (req, res) => {
    const [ ]
    const { data, error } = await supabase
    .from('bike_types')
    .insert({
        shop_name: 
    })
})


app.listen(PORT, () => {
    console.log("App listening at port: ", PORT)
})