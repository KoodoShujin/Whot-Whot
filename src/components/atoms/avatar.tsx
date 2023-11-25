import { Avatars } from "@/src/@types/atoms/Avatar.types";
import Image from "next/image";

interface IProps {
  avatar: Avatars;
  alt: string;
  width?: number;
  height?: number;
}

const Avatar = ({ avatar, width, height, alt }: IProps) => {
  return (
    <Image
      width={width ?? 64}
      height={height ?? 64}
      src={avatar}
      alt={alt}
    ></Image>
  );
};

export default Avatar;
