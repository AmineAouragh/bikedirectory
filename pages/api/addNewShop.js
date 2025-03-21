import { supabase } from "./supabase"


const formatShopName = (name) => {
    return name.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')
}

async function uploadLogoToBucket(shopName, file){

    if (!file){
        console.error('No file selected')
        return 
    }

    console.log("File MIME Type:", file.type)

    const formattedShopName = formatShopName(shopName) 
    const filePath = `${formattedShopName}/${file.name}`

    const { data, error } = await supabase
    .storage 
    .from('bike-shops-bucket') 
    .upload(filePath, file)

    if (error) {
        console.error("Error uploading bike shop logo to bucket", error.message) 
        return null 
    }

    return data.path

}

async function getPublicUrl(filePath){

    const { data } = supabase
    .storage 
    .from('bike-shops-bucket')
    .getPublicUrl(filePath)

    return data.publicUrl

}

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
                openingHours,
            } = req.body

            //const path = await uploadLogoToBucket(shopName, logoFile)
            //const publicUrl = await getPublicUrl(path) 

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

            try {
                const { data, error } = await supabase
                .from('bike_shop_hours')
                .insert(openingHours.map(({ day, opening, closing, isClosed }) => ({
                        day: day,
                        opening_hour: opening,
                        closing_hour: closing, 
                        closed: isClosed,
                        shop_fk: shopId
                })))   
                if (error) throw error 
            } catch (error) {
                console.log("Error inserting bike shop hours", error.message) 
                res.status(500).json({ message: "Server error", error: error.message })
            }

            res.status(201).json({ message: "Bike shop submitted successfully.", data })


        } catch (error) {
            console.error("Error inserting data: ", error.message) 
            res.status(500).json({ message: "Server error", error: error.message })
        }

    } 
}