import { $kontaktaOssIsOpen } from "@/store/KontaktaOss";

export default function IndexBokaNu() {
  return (
    <button
      onClick={() => $kontaktaOssIsOpen.set(true)}
      className="rounded-full bg-black px-8 py-2 font-semibold text-white shadow-md"
    >
      Boka nu
    </button>
  );
}
