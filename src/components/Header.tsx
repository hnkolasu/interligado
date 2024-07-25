import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-row justify-between bg-green-950 font-sans text-orange-50 p-8">
      <Link
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        to="/"
      >
        🦀 NicasWare
      </Link>
      <Link
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        to="/sobre"
      >
        Sobre
      </Link>
      <Link
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        to="/design"
      >
        Design
      </Link>
      <Link
        className="text-stone-50 p-2 px-4 border-[1px] border-solid border-stone-50 rounded-full hover:text-stone-300 hover:border-stone-300 "
        to="/desenvolvimento"
      >
        Desenvolvimento
      </Link>
    </div>
  );
}
export default Header;
