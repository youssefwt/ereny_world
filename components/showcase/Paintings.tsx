import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { promises } from "fs";
import path from "path";
import MobileGallery from "./MobileGallery";

export async function PaintingsGallery() {
  const imageDirectory = path.join(process.cwd(), "/public/paintings");
  const imageFilenames = await promises.readdir(imageDirectory);
  const paintings = imageFilenames.map((file) => `/paintings/${file}`);
  return (
    <>
      <ParallaxScroll
        images={paintings}
        className="w-full p-0 h-full hidden md:block"
      />
      <MobileGallery images={paintings} />
    </>
  );
}
