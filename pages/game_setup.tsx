import FormSection from "@/src/components/organism/game_setup/FormSection";
import Layout from "@/src/components/template/Layout";

const Setup = () => {
  return (
    <Layout title={"Game Setup Page"}>
      <div className="txt-h3 txt-black5">Setup Your Game</div>

      <FormSection />
    </Layout>
  );
};

export default Setup;
