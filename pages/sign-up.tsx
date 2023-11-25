import ChooseAvatar from "@/src/components/organism/sign-up/ChooseAvatar";
import SetupPlayer from "@/src/components/organism/sign-up/SetupPlayer";
import SignUpLayout from "@/src/components/template/SignUpLayout";

const SignUp = () => {
  return (
    <SignUpLayout title={"Set up your player"}>
      <div className="sign-up__container">
        <ChooseAvatar />
        <SetupPlayer />
      </div>
    </SignUpLayout>
  );
};

export default SignUp;
