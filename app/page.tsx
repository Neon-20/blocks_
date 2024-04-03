"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!isSignedIn && (
        <Link href="/sign-in">
          <Button variant="default" size="default">
            Enter inside
          </Button>
        </Link>
      )}
    </main>
  );
}
