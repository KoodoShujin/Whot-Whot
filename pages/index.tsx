import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import Button from "@/src/components/atoms/Button";
import Layout from "@/src/components/template/Layout";

const Home = () => {
  return (
    <>
      <Layout title={"Landing Page"}>
        <div className="txt-h3 txt-black5">Welcome To KoodoShujin</div>
        <div className="txt-h5 txt-black25">WHOT WHOT</div>
        <Button>Click To Play</Button>
      </Layout>
    </>
  );
};

export default Home;
