import { supabase } from "./supabase"

export default async function handler(req, res){
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
}