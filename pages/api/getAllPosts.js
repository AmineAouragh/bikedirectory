import { supabase } from "./supabase";

export default async function hanler(req, res) {
    if (req.method == "GET") {
        try {
            const { data: blog_posts, error } = await supabase
            .from('blog_posts')
            .select('*')

            if (error) throw error 

            return res.status(200).json({ blog_posts })
        } catch (error) {
            console.error('Error while fetching blog posts: ', error.message) 
            res.status(500).json({ message: 'Server error: ', error: error.message })
        }
    }
}