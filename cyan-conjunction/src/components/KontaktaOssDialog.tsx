"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { $kontaktaOssIsOpen } from "@/store/KontaktaOss";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useStore } from "@nanostores/react";
import { Loader2 } from "lucide-react";
import { object, string, minLength, email, optional } from "valibot";

const schema = object({
  firstName: string("Förnamn är obligatoriskt", [
    minLength(3, "Minst 3 tecken"),
  ]),
  lastName: string("Efternamn är obligatoriskt", [
    minLength(3, "Minst 3 tecken"),
  ]),
  email: string("E-post är obligatoriskt", [email("Ange en giltig e-post")]),
  tel: string("Telefonnummer är obligatoriskt", [
    minLength(3, "Minst 3 tecken"),
  ]),
  adress: string("Adress är obligatoriskt", [minLength(5, "Minst 5 tecken")]),
  ort: string("Ort är obligatoriskt", [minLength(3, "Minst 3 tecken")]),
  message: optional(string("")),
});

export default function KontaktaOssDialog() {
  const isOpen = useStore($kontaktaOssIsOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmitRes, setFormSubmitRes] = useState("");
  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false);

  const form = useForm({
    resolver: valibotResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      adress: "",
      ort: "",
      message: "",
    },
  });

  async function onSubmit(values: any) {
    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) formData.append(key, values[key]);
    }
    formData.append("_captcha", "false");
    formData.append("_subject", "Formulär: Spindelsanering Goteborg");
    setIsLoading(true);
    const response = await fetch(
      "https://form-to-email-production.up.railway.app/info@spindelsanering-goteborg.se",
      {
        method: "post",
        body: formData,
      },
    ).catch(() => {
      setError(true);
      setIsLoading(false);
    });
    if (response && response.ok) {
      setIsLoading(false);
      setError(false);
      setSuccessfullySubmitted(true);
      const html = await response.text();
      setFormSubmitRes(html);
      form.reset();
    } else {
      console.log("response is not ok");
      setSuccessfullySubmitted(false);
      setIsLoading(false);
      setError(true);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={() => $kontaktaOssIsOpen.set(false)}>
      <DialogContent className=" max-h-[calc(100dvh-8rem)] overflow-auto">
        <>
          <DialogHeader>
            <DialogTitle>
              Kontakta oss, så återkommer vi så fort vi kan!
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogDescription className="space-y-4">
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Förnamn *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Förnamn"
                            autoComplete="given-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Efternamn *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Efternamn"
                            autoComplete="family-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>E-post *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="E-post"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tel"
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Telefon *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Telefon"
                            autoComplete="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-2">
                  <div className="grow">
                    <FormField
                      control={form.control}
                      name="adress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Adress *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Adress"
                              autoComplete="street-address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grow">
                    <FormField
                      control={form.control}
                      name="ort"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ort *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Ort"
                              autoComplete="address-level2"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meddelande</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Meddelande"
                          {...field}
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </DialogDescription>
              <DialogFooter className="mt-4 items-center">
                {!!error && (
                  <div className="font-semibold text-red-500">
                    Vi ber om ursäkt, någonting gick fel
                  </div>
                )}
                {!!successfullySubmitted && (
                  <div className="font-semibold text-green-500">
                    Ditt svar har skickats!
                  </div>
                )}

                <Button disabled={isLoading} type="submit">
                  Skicka
                  {isLoading && (
                    <Loader2 className="ml-2 size-6 animate-spin" />
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </>
      </DialogContent>
    </Dialog>
  );
}
