import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import ConnectWallet from "@/components/ConnectWallet/ConnectWallet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <ConnectWallet />;
}
