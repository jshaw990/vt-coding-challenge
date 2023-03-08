import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

import IBlogPost from '../../../types/blogPost.type';
import BlogPostService from '../services/blogPost.services'

import BlogPostCard from './BlogPostCard';

export default function BlogSearchContainer() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[] | undefined>()

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const postData = await BlogPostService.getAll()
  
      if (postData.length > 0) {
        setBlogPosts(postData)
      }
    }
    fetchBlogPosts()
  }, [])

  return (
    <Grid container>
        {
        blogPosts === undefined ? <CircularProgress /> : blogPosts.map((data, id) => {
            return (
            <Grid item xs={12} md={4} alignItems="stretch"  key={id}>
                <BlogPostCard post={data} />
            </Grid>
            )
        })
        }
    </Grid>
  );
}
