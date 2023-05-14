
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

  const {isPending, error, data: blogs} = useFetch('http://localhost:8000/blogs')

  return (
    <div className=" ">

      {isPending && <div className="font-bold items-center text-6xl"> You mother fucker wait...</div>}
      {blogs && <BlogList bloges ={blogs} />} 
      {error && <div>{error}</div>}
    
    </div>  
  )    
    }      
 
export default Home;