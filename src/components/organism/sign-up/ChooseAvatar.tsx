import { Avatars } from "@/src/@types/atoms/Avatar.types";
import Avatar from "../../atoms/avatar";

const ChooseAvatar = () => {
  const avatars: Avatars[] = "a"
    .repeat(30)
    .split("")
    .map((a) => Avatars.SMILEY);

  return (
    <section className="choose-avatar-su">
      <header className="choose-avatar-su__header">
        <h2 className="choose-avatar-su__head-text">Choose Your Avatar</h2>
        <div className="flex gap-[24px]">
          <div className="choose-avatar-su__preview-box">
            <Avatar
              avatar={Avatars.SMILEY}
              alt={""}
              width={38.4}
              height={38.4}
            />
          </div>
          <div className="choose-avatar-su__preview-question-box">??</div>
        </div>
      </header>
      <main className="choose-avatar-su__main beautiful-scrollbar">
        <div className="choose-avatar-su__avatar-container">
          {avatars?.map((ava) => {
            return (
              <div className="m-auto cursor-pointer">
                <Avatar avatar={ava} alt={""} />
              </div>
            );
          }) ?? []}
        </div>
      </main>
    </section>
  );
};

export default ChooseAvatar;
