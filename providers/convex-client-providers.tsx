"use client";

import { useAuth, ClerkProvider } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { 
    AuthLoading,
    Authenticated,
    ConvexReactClient
} from "convex/react";

interface ConvexClientProviderProps {
    children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convexClient = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
    return (
        <ClerkProvider>
            <ConvexProviderWithClerk
                client={convexClient}
                useAuth={useAuth}
            >
                <Authenticated>
                    {children}
                </Authenticated>
                <AuthLoading>
                    <div className="h-full w-full flex flex-col justify-center items-center">
                        <p>Loading...</p>
                    </div>
                </AuthLoading>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    )
};
