import Image from "next/image";
import { Animation } from "@/components/rive";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-3/4 h-2/4 flex items-center justify-center">
        <Animation></Animation>
      </div>
    </div>
  );
}
