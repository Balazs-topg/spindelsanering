import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { $kontaktaOssIsOpen } from "@/store/KontaktaOss";
import { useStore } from "@nanostores/react";

export default function KontaktaOssBtn() {
  const isOpen = useStore($kontaktaOssIsOpen);

  return (
    <>
      <button
        onClick={() => $kontaktaOssIsOpen.set(!isOpen)}
        className="rounded-full bg-black px-5 py-2 text-white shadow-md"
      >
        Kontakta oss
      </button>
    </>
  );
}
