import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { $kontaktaOssIsOpen } from "@/store/KontaktaOss";
import { useStore } from "@nanostores/react";

export default function KontaktaOssDialog() {
  const isOpen = useStore($kontaktaOssIsOpen);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        const userWantsToClose = window.confirm("vill du stänga formuläret?");
        userWantsToClose && $kontaktaOssIsOpen.set(false);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Kontakta oss, så återkommer vi så fort vi kan!
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className=" space-y-3">
            <div className="flex gap-2">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Förnamn</Label>
                <Input id="picture" placeholder="Förnamn" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="picture">Efternamn</Label>
                <Input id="picture" placeholder="Efternamn" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="picture">Meddelande</Label>
              <Textarea placeholder="Meddelande" className=" w-full" />
            </div>
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button>Vi ber om ursäkt, hemsidan är under konstruktion</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
