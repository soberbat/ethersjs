"use client";
import React, { useEffect } from "react";
import { Button, Wrapper } from "./ConnectWallet.styles";
import { ethers, parseEther } from "ethers";
import { ExternalProvider } from "@ethersproject/providers";

export default function ConnectWallet() {
  useEffect(() => {
    window.ethereum !== "undefined" && connectWallet();
  }, []);

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);
  };

  return (
    <Wrapper>
      <Button>Connect it</Button>
    </Wrapper>
  );
}
