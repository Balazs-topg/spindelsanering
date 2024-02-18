import { useState } from "react";

interface FaqCard {
  title: string;
  desc: string;
}
export default function FaqCard({ title, desc }: FaqCard) {
  const [isOpen, setIsOpen] = useState(false);
  console.log("hydrated");
  return (
    <button
      className="block rounded-2xl bg-white px-6 py-4 text-left shadow"
      onClick={() => setIsOpen((ps) => !ps)}
    >
      <strong className="block text-lg font-semibold">{title}</strong>
      {isOpen ? <p className=" mt-2">{desc} </p> : <></>}
    </button>
  );
}
