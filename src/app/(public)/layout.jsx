import { Footer, Header } from "@/components/shared";

const Layout = ({ children }) => {
  return (
    <>
       {children}
      <Footer />
    </>
  );
};

export default Layout;
