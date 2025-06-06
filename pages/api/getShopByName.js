import { supabase } from "./supabase"

export default async function handler(req, res){

  if (req.method === "GET"){
    
    try {

      const shop_name = req.query.shop_name
      console.log("Shop name value used in supabase: ", shop_name)

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
      .eq('shop_name', shop_name)

      console.log(bike_shops)
      if (error) throw error 

      return res.status(200).json({ bike_shops })
    } catch (error) {
      console.error("Error while fetching bike shop: ", error.message)
      res.status(500).json({ message: "Server error", error: error.message })
    }
  }
}