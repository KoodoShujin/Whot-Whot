import { ButtonVariants } from "@/src/@types/atoms/Button.types";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Icon from "../../atoms/Icon";
import { Icons } from "@/src/@types/atoms/Icon.types";
import IconInput from "../../atoms/IconInput";

const SetupPlayer = () => {
  return (
    <section className="setup-player-su">
      <header className="setup-player-su__header">
        <h2 className="setup-player-su__head-text">Setup Your Player</h2>
      </header>
      <main className="setup-player-su__main beautiful-scrollbar">
        <form className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[40px]">
            <Input placeholder="Username" value={""} onChange={() => {}} />
            <Input placeholder="Email" value={""} onChange={() => {}} />
            <IconInput
              input={{ placeholder: "Password", value: "", onChange: () => {} }}
              rightIcon={{
                icon: Icons.HIDE,
                width: 24,
                height: 24,
                className: "cursor-pointer",
                onClick: (e) => {
                  e?.stopPropagation();
                },
              }}
            />
          </div>
          <div className="flex flex-row gap-[24px]">
            <Button variant={ButtonVariants.BLACK75_MD_FILL}>
              <Icon icon={Icons.GOOGLE_OUTLINE} width={24} height={24} />
              Google
            </Button>
            <Button variant={ButtonVariants.PRIMARY_MD_FILL}>Sign Up</Button>
          </div>
        </form>
      </main>
      <footer className="setup-player-su__footer">
        Already Have an Account?, <span> SIGN IN </span>
      </footer>
    </section>
  );
};

export default SetupPlayer;
