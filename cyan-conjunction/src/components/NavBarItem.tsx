import type React from "react";

{
  /* <button class="px-2"><slot /></button> */
}

export default function NavBarItem({
  children,
  scrollToId,
}: {
  children: React.ReactNode;
  scrollToId: string;
}) {
  return (
    <button
      onClick={() => {
        const element = document.getElementById(scrollToId);
        //@ts-ignore
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }}
    >
      {children}
    </button>
  );
}
