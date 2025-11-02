"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/pagination");
  }, [router]);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      리다이렉트 중...
    </div>
  );
}
