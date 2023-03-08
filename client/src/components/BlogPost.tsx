import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Skeleton from '@mui/material/Skeleton'

import BlogPostService from '../services/blogPost.services'

import IBlogPost from '../../../types/blogPost.type';

export default function App() {
  const [blogPost, setBlogPost] = useState<IBlogPost | undefined>()

  const { slug } = useParams()

  useEffect(() => {
    const fetchBlogPosts = async () => {
        if (slug === undefined) return
      
        const postData = await BlogPostService.getBySlug(slug)
        
        setBlogPost(postData)
    }
    fetchBlogPosts()
  }, [slug])

  return (
    <div className='blog-post'>
        <Container maxWidth='md'>
            <Box sx={{  }}>
                {
                    blogPost === undefined 
                    ? <div>
                        <Skeleton height='150px'/>
                        <Skeleton width='70%' height='300px' />
                        <Skeleton height='70vh' />
                    </div>
                    : <div>
                            <div dangerouslySetInnerHTML={{ __html: blogPost.content.toString() }} />
                        </div>
                }
            </Box>
        </Container>
    </div>
  )
}