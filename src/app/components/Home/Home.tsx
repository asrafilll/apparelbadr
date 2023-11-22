import Image from "next/image";
import { HeroSection } from "./component/HeroSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <div>
        <Image
          src={"/placeholder.png"}
          alt="Placeholder catalogue"
          width={280}
          height={380}
          style={{ objectFit: "contain" }}
        />
        <div>
          <div>Gamis A</div>
          <div>Rp250.000</div>
        </div>
      </div>
    </div>
  );
};
