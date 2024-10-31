import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="flex items-center p-5 bg-green-500">
        <div className="hidden lg:flex lg:flex-1">Search</div>
        <UserButton />
        </div>
    );
}

export default Navbar;