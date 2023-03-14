import Head from "next/head";
import { ReactNode } from "react";

interface ILayout {
  title?: String;
  children: ReactNode | ReactNode[];
}

const Layout = ({ children, title }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="app">
        <div className="app__water-mark"></div>
        {children}
      </main>
    </>
  );
};

export default Layout;
