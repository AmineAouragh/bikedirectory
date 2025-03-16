import { supabase } from "./supabase"

export default async function handler(req, res){

    if (req.method == "POST"){

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


        } catch (error) {
            console.error("Error inserting data: ", error.message) 
            res.status(500).json({ message: "Server error", error: error.message })
        }

    } 
}