"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import Hint from "@/components/hint";
const NewButton = () => {
    return (
        <Dialog>
        <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
            <DialogTrigger asChild>
                <Hint 
                label="Create a new organization" side="right" align="center"
                sideOffset={5} alignOffset={5}
                >
                <div className="aspect-square">
                    <button className="bg-white/25 h-full w-full rounded-md
                    flex items-center justify-center opacity-60 hover:opacity:100 transition">
                        <Plus  className="text-white"/>
                    </button>
                </div>
                </Hint>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                <CreateOrganization routing="hash" />
            </DialogContent>
        </Dialog>
    )
};

export default NewButton;