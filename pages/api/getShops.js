import { supabase } from "./supabase"

export default async function handler(req, res){

  if (req.method === "GET"){
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
          ),
          bike_shop_hours (
            day,
            opening_hour,
            closing_hour, 
            closed
          ),
          images (
            image_url
          )
      `)
      .order('verified', { ascending: false })

      if (error) throw error 

      return res.status(200).json({ bike_shops })
    } catch (error) {
      console.error("Error while fetching bike shops: ", error.message)
      res.status(500).json({ message: "Server error", error: error.message })
    }
  }
}