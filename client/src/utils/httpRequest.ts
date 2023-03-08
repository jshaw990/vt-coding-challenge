import IBlogPost from "../../../types/blogPost.type"

const BASE_URL = 'http://localhost:8080/api/blog'

const getRequest = async (url: string = '', skip: number = 0) => {
    try {
        const baseUrl = url.length > 0 ? `${BASE_URL}/${url}` : `${BASE_URL}/?skip=${skip}`
        const request = await fetch(baseUrl, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const blogPostsJson = await request.json();

        if (!Array.isArray(blogPostsJson)) {
            return blogPostsJson
        }

        const blogPosts: IBlogPost[] = blogPostsJson.concat().map((post: any) => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            content: post.content,
            image: post.image,
            published_at: post.published_at
        }));

        return blogPosts
    } catch (error) {
        console.error(error)
        return []
    }
}

export default getRequest