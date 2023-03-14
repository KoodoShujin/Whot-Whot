import Button from "@/src/components/atoms/Button";
import Layout from "@/src/components/template/Layout";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Layout title={"Landing Page"}>
        <div className="txt-h3 txt-black5">Welcome To GameSplat</div>
        <div className="txt-h5 txt-black25">Whot Whot</div>
        <Button
          onClick={() => {
            router.push("/game_setup");
          }}
        >
          Click To Play
        </Button>
      </Layout>
    </>
  );
};

export default Home;
