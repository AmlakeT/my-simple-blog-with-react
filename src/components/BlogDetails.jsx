import useFetch from "./useFetch";
import {useParams }from 'react-router-dom'
const BlogDetails = () => {

    const {id} = useParams();
    const {data:blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div className=" px-10 py-10  space-y-5">
     {isPending && <div className="font-bold items-center text-6xl"> You mother fucker wait...</div>}
      {error && <div>{error}</div>}
      {blog && (
       <article className="mb-2 space-y-2" >
           <h2 className=" text-2xl font-serif text-amber-600">{blog.title}</h2>
           <p>Written by {blog.author}</p>
           <div>{blog.body}</div>
      </article> )} 
    </div>
  );
}
 
export default BlogDetails;