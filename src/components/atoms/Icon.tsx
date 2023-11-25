import { Icons } from "@/src/@types/atoms/Icon.types";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface IProp {
  icon: Icons;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
}

const Icon = ({ icon, width, height, alt, className, onClick }: IProp) => {
  return (
    <Image
      width={width ?? 18}
      height={height ?? 16}
      src={icon}
      alt={alt ?? ""}
      className={className}
      onClick={onClick}
    ></Image>
  );
};

export type { IProp as IconProp };
export default Icon;
