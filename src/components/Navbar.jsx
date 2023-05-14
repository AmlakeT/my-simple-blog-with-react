import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-zinc-100 border px-5 py-5 font-serif text-2xl flex justify-between ">
      <h1>The Blogers</h1>
      <div className=" space-x-6 ">
        <Link className =' hover:bg-white px-2 py-2 rounded-xl' to="/">Home</Link>
        <Link className =' hover:bg-white px-2 py-2 rounded-xl' to="/create">New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;