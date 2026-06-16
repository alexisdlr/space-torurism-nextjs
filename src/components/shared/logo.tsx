import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeMap = {
    sm: 40,
    md: 60,
    lg: 45,
  };
  const sizeClassname = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-18 h-18",
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Image
        src="/assets/shared/logo.svg"
        alt="Space Tourism Logo"
        sizes={`${sizeMap[size]}px`}
        width={sizeMap[size]}
        height={sizeMap[size]}
        className={cn("object-contain", sizeClassname[size])}
      />
    </div>
  );
};

export default Logo;
