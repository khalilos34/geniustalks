import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./ui/UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky z-50 top-0 bg-white dark:bg-gray-900 ">
      <nav className="flex flex-col sm:flex-row max-w-7xl items-center mx-auto p-5 pl-2">
        <Logo />
        <div className="flex flex-1 items-center space-x-4 justify-end">
          <UserButton session={session} />

          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
