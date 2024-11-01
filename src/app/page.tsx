import { V0LandingPageComponent } from "@/components/v0-landing-page";
import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <div className="max-w-4xl mx-auto px-4">
      <V0LandingPageComponent />
      </div>
    </div>
  )
}