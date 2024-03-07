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

  function onSubmit(values: any) {
    form.reset();
    window.location.href = "formular-mottaget";
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        const userWantsToClose = window.confirm("vill du stänga formuläret?");
        userWantsToClose && $kontaktaOssIsOpen.set(false);
      }}
    >
      <DialogContent className=" max-h-[calc(100dvh-8rem)] overflow-auto">
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
                        <Input placeholder="Förnamn" {...field} />
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
                        <Input placeholder="Efternamn" {...field} />
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
                        <Input placeholder="E-post" {...field} />
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
                        <Input placeholder="Telefon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="adress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Adress *</FormLabel>
                    <FormControl>
                      <Input placeholder="Adress" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ort"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ort *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ort" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
            <DialogFooter className=" mt-4">
              <Button type="submit">
                Vi ber om ursäkt, hemsidan är under konstruktion
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
