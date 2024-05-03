import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <Button variant="outline">Click me</Button>
      <p>I am Authenticated user</p>
      <div>
      <UserButton />
      </div>
    </div>
  );
}
