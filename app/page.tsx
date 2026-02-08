import { Container } from "@/components/container";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="layout">
      <Container>
        <div className="left-line"></div>
        <NavBar />
        <Hero />
        <div className="right-line"></div>

      </Container>
    </div>
  );
}
