import { Icons } from "@/src/@types/atoms/Icon.types";
import Image from "next/image";

interface IProps {
  icon: Icons;
  alt: string;
  width?: number;
  height?: number;
}

const Icon = ({ icon, width, height, alt }: IProps) => {
  return (
    <Image
      width={width ?? 18}
      height={height ?? 16}
      src={icon}
      alt={alt}
    ></Image>
  );
};

export default Icon;
