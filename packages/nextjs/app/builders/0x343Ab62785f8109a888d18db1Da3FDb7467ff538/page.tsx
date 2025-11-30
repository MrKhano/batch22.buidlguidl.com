import type { NextPage } from "next";
import { getAddress } from "viem";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const BuilderPage: NextPage = () => {
  const address = "0x343Ab62785f8109a888d18db1Da3FDb7467ff538";
  const checkSumAddress = getAddress(address);
  const name = "Wizz";
  const bio = "A blockchain developer exploring the world of Ethereum and decentralized applications";

  return (
    <div className="flex items-center flex-col grow pt-32 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen">
      <div className="px-5 max-w-2xl">
        <div className="flex flex-col items-center mb-8 animate-[bounce_2s_forwards]">
          <div className="border-4 border-white shadow-2xl rounded-full">
            <BlockieAvatar address={address} size={120} />
          </div>
          <h1 className="text-4xl font-bold mt-4 text-white drop-shadow-lg">{name}</h1>
          <p className="text-lg text-center text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
            {checkSumAddress?.slice(0, 6)}...{checkSumAddress?.slice(-4)}
          </p>
        </div>

        <div className="bg-base-100 p-6 rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-center">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;
