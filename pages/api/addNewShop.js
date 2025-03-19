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
                rentalDurationOptions,
                monOpening,
                monClosing, 
                tueOpening,
                tueClosing, 
                wedOpening, 
                wedClosing, 
                thuOpening, 
                thuClosing, 
                friOpening, 
                friClosing, 
                satOpening, 
                satClosing, 
                sunOpening, 
                sunClosing
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
                shop_street_address: shopStreetAddress,
                mon_opening: monOpening,
                mon_closing: monClosing,
                tue_opening: tueOpening,
                tue_closing: tueClosing, 
                wed_opening: wedOpening, 
                wed_closing: wedClosing, 
                thu_opening: thuOpening, 
                thu_closing: thuClosing,
                fri_opening: friOpening, 
                fri_closing: friClosing,
                sat_opening: satOpening, 
                sat_closing: satClosing, 
                sun_opening: sunOpening, 
                sun_closing: sunClosing
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