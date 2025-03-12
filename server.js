const express = require('express') 
require('dotenv').config()
import { supabase } from '@/pages/api/supabase.js'

const app = express() 

app.use(express.json())

const PORT = 8080

app.post('/submit-bike-shop', async (req, res) => {
    try {
        const {
            shopName,
            shopWebsite,
            shopDescription,
            email,
            phoneNumber,
            shopCountry,
            shopCity,
            shopStreetAddress
        } = req.body 

        const { data, error } = await supabase
        .from('bike_shops')
        .insert([
            {
                shop_name: shopName,
                shop_website: shopWebsite,
                shop_description: shopDescription,
                email: email,
                phone_number: phoneNumber, 
                shop_country: shopCountry, 
                shop_city: shopCity,
                shop_street_address: shopStreetAddress
            }
        ])
        if (error) throw error 

        res.status(201).json({ message: "Bike shop submitted successfully.", data })
    } catch (error){
        console.error("Error inserting data: ", error.message) 
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

app.listen(PORT, () => {
    console.log("App listening at port: ", PORT)
})