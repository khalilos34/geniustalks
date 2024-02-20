import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Image from "next/image";

const UserAvatar = ({
  name,
  image,
  className,
}: {
  name?: string | null;
  image?: string | null;
  className?: string | null;
}) => {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {image && (
        <Image
          src={image}
          alt={image}
          width={40}
          height={40}
          className="rounded-full"
        />
      )}
      <AvatarFallback
        delayMs={1000}
        className="dark:text-black text-lg dark:bg-white"
      >
        {name &&
          name
            .split(" ")
            .map((name) => name[0])
            .join("")}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
