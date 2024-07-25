import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className="w-[100vw] h-[100vh] bg-lime-900 font-sans flex flex-col">
      <Header />
      <div className="flex h-full justify-center items-center">{children}</div>
      {/* <Footer/>  */}
    </div>
  );
}
export default Layout;
