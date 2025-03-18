import { supabase } from './supabase'

export default async function handler(req, res){

    if (req.method === "POST"){
        try {
            const { searchQuery } = req.body 

            if (!searchQuery || searchQuery.trim() === "") {
                return res.status(400).json({ message: "Search query is required." });
            }

            const { data: bike_shops, error } = await supabase
            .from('bike_shops')
            .select(`
                shop_name, 
                shop_description,
                shop_country,
                shop_city,
                shop_street_address,
                bike_types (
                  bike_type
                ),
                bike_rental_options (
                  rental_duration
                )
            `)
            .or(`shop_country.ilike.%${searchQuery}%,shop_city.ilike.%${searchQuery}%`)

            if (error) throw error 

            return res.status(200).json({ message: "Bike shops fetched successfully", bike_shops })

        } catch (error) {
            console.error("Error fetching bike shops: ", error.message) 
            return res.status(500).json({ message: "Server error", error: error.message })
        }
    }

}