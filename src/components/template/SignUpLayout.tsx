import Head from "next/head";
import { ReactNode } from "react";

interface ILayout {
  title?: String;
  children: ReactNode | ReactNode[];
}

const SignUpLayout = ({ children, title }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <main className="sign-up-layout">
        <div className="app__water-mark"></div>
        {children}
      </main>
    </>
  );
};

export default SignUpLayout;
