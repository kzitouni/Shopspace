import React, {useEffect, useState} from "react"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Image from '../../components/Image/Image'
import Blogs from '../../Data/Blogs'
import BlogTitle from "../../components/BlogTitle/BlogTitle"
import BlogBody from "../../components/BlogBody/BlogBody"

export default function BlogPosts({id}){
    const [blogPost, setBlogPost] = useState({})
    useEffect(() => {
        let blogIndex = Blogs.findIndex((item) => item.Title === id)
        if(blogIndex > -1){
            setBlogPost(Blogs[blogIndex])
        }
    }, [])



    return(
        <>
            <NavBar display={true}/>
            <BlogTitle title={blogPost.Title} type={blogPost.Type} date={blogPost.Date_Published} />
            <Image url={blogPost.Image} />
            <BlogBody Data={blogPost.Body || []} />
            <Footer />
        </>
    )
}

BlogPosts.getInitialProps = ({ query: { id } }) => {
    return { id };
  };