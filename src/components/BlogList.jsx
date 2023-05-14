import { Link } from 'react-router-dom';

const BlogList = ({ bloges }) => {
  
    return (
        <div className=" px-10 py-10  space-y-5">
           {bloges.map((blog) =>(
                <div key={blog.id} className=" pl-3 rounded hover:bg-slate-300 border-b-2 bottom-2">
                    
                    <Link to = {`/blogs/${blog.id}`}>
                    <h1 className=" text-xl text-amber-600  font-serif pb-2">{blog.title}</h1>
                    <p>Written By {blog.author}</p>
                    </Link>
                  
                    
                </div>
            ))}     
        </div>
      );
}
 
export default BlogList;