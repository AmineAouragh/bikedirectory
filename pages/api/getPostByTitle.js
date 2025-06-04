import { supabase } from "./supabase"

export default async function handler(req, res) {
    if (req.method == "GET"){
        try {
            const blog_post_title = req.query.blog_post_title 
            
            const { data: blog_posts, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('title', blog_post_title)
            if (error) throw error

            return res.status(200).json({ blog_posts })
        } catch (error) {
            console.error('Error while fetching blog post: ', error.message) 
            res.status(500).json({ message: "Server error", error: error.message })
        }
    }
}