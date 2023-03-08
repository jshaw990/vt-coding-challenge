import { useEffect, useState } from 'react';
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'

import IBlogPost from '../../../types/blogPost.type';
import BlogPostService from '../services/blogPost.services'

import BlogPostCard from './BlogPostCard';

export default function BlogSearchContainer() {
  const [blogPosts, setBlogPosts] = useState<IBlogPost[]>([])
  const postsLoadedCurrently = blogPosts.length
  
  const fetchBlogPosts = async () => {
    const postData = await BlogPostService.getAll(postsLoadedCurrently)

    if (postData.length > 0) {
      setBlogPosts(blogPosts.concat(postData))
    }
  }

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  function getMoreBlogs() {
    fetchBlogPosts()
  }

  return (
    <div style={{textAlign: 'center'}}>
      <Grid container justifyContent={ blogPosts.length === 0 ? 'center' : 'start'}>
      {
        blogPosts.length === 0 ? <CircularProgress /> : (
          <>
              {blogPosts.map((data) => (
                <Grid item xs={12} md={4} alignItems="stretch" key={data.id}>
                  <BlogPostCard post={data} />
                </Grid>
              ))}
          </>
        )
      }
      </Grid>
      <Button 
        variant='outlined' 
        style={{ backgroundColor: '#FFFFFF', color: '#17173A', borderColor: '#17173A'}}
        onClick={getMoreBlogs} 
      >
        Load more
      </Button>
    </div>
  );
}
