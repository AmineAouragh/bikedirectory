const express = require('express') 
require('dotenv').config()
const cors = require('cors')
const { createClient } = require('@supabase/supabase-js')

const app = express() 

app.use(express.json())
app.use(cors())

const PORT = 8080
const supabaseUrl = process.env.SUPABASE_URL 
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY 
 
const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function getShopId(shopName){
    try {
        const  { data, error } = await supabase
        .from('bike_shops') 
        .select('id') 
        .eq('shop_name', shopName)

        if (error) throw error 
        console.log(data)
        return data[0].id 
    } catch (error) {
        console.error("Error while trying to get bike shop id ", error.message) 
        return null
    }
}

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
            shopStreetAddress,
            availableBikeTypes,
            rentalDurationOptions
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
        .select('id')

        const shopId = data[0].id

        if (!shopId){
            console.log("No shop ID found.")
        }

            try {
                const { data, error } = await supabase
                .from('bike_types')
                .insert(availableBikeTypes.map(type => ({
                    bike_type: type,
                    shop_fk: shopId
                })))
                if (error) throw error 
                } catch (error) {
                    console.log("Error inserting bike types ", error.message) 
                    res.status(500).json({ message: "Server error", error: error.message })
            }
        

        try {
            const { data, error } = await supabase
            .from('bike_rental_options')
            .insert(rentalDurationOptions.map(option => ({
                    rental_duration: option,
                    shop_fk: shopId
            })))   
            if (error) throw error 
        } catch (error) {
            console.log("Error inserting bike rental options ", error.message) 
            res.status(500).json({ message: "Server error", error: error.message })
        }


        res.status(201).json({ message: "Bike shop submitted successfully.", data })
    } catch (error){
        console.error("Error inserting data: ", error.message) 
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

app.get('/bike-shops', async (req, res) => {
    try {
        const { data: bike_shops, error } = await supabase
        .from('bike_shops')
        .select(`
            *, 
            bike_types (
              bike_type
            ),
            bike_rental_options (
              rental_duration
            )
        `)
        

        if (error) throw error 

        res.status(200).json({ message: "Bike shops fetched successfully: ", bike_shops })
    } catch (error) {
        console.error("Error while fetching bike shops: ", error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

app.listen(PORT, () => {
    console.log("App listening at port: ", PORT)
})