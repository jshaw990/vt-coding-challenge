import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import IBlogPost from '../../../types/blogPost.type';

interface IProps {
    post: IBlogPost
}

function BlogPostCard(props: IProps) {
    return (
        <Box 
            sx={{ 
                p: 3, 
                m: 2, 
                textAlign: 'center', 
                border: 1, 
                borderRadius: '24px', 
                borderColor: '#17173A', 
                boxShadow: 1 
            }}
        >
            <Link to={props.post.slug}>
                <img 
                    src={props.post.image} 
                    alt={props.post.title} 
                    width='300px' 
                    style={{ borderRadius: '24px', marginBottom: '16px' }} 
                />
                <Typography variant='h6' component='div' flexGrow={1}>
                    {props.post.title}
                </Typography>
            </Link>
        </Box>
    )
}

export default BlogPostCard