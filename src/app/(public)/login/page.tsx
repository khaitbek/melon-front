"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FC } from "react";
import { Form, useForm } from "react-hook-form";
import Image from "next/image";

interface LoginPageProps {}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(1, { message: "Password must be at least 1 character." }),
});
const Page: FC<LoginPageProps> = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // ideaProcedure.mutate({
    //   title: values.title,
    //   content: values.content
    // })
  }
  return (
    <>
      <div className="absolute flex flex-col-reverse align-top justify-center lg:flex-row bg-white h-screen w-screen top-0">
        <div className="relative flex flex-col items-center lg:items-start justify-center w-full lg:w-[568px] px-[28px] lg:px-[88px] py-12 h-[100%]">
          <Image
            src={"/images/login-logo.svg"}
            alt="logo"
            width={101}
            height={34}
            className="absolute top-[18px] left-[18px]"
          />
          <div className="text-primary font-inter normal text-[28px] font-extrabold leading-normal mb-2">
            Project Melon
          </div>
          <p className="text-secondary font-inter normal text-[13px] font-normal leading-normal mb-12">
            Admin panel <span className="font-bold">Project melon..</span>
          </p>
          <Form {...form} className="w-full max-w-[392px]">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="relative">
                    <Image
                      src={"/images/user.svg"}
                      alt="icons"
                      width={20}
                      height={20}
                      className="absolute top-[50%] translate-y-[-50%] left-2"
                    />
                    <FormControl>
                      <Input
                        placeholder="Foydalanuvchi nomini kiriting"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <Image
                      src={"/images/lock.svg"}
                      alt="icons"
                      width={20}
                      height={20}
                      className="absolute top-[50%] translate-y-[-50%] left-2"
                    />
                    <FormControl>
                      <Input
                        placeholder="Iltimos, parolingizni kiriting"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant={"green"}>Tizimga kirish</Button>
            </form>
          </Form>
          <p className="text-secondary font-inter normal text-[14px] font-normal leading-[22px] normal absolute bottom-[32px] left-[32px]">
            2023 loyiha qovun..
          </p>
        </div>
        <div className=" hidden lg:flex flex-col items-center justify-center bg-gradient-radial flex-1 px-4 lg:px-12 py-12">
          <Image
            src="/images/logo-main.png"
            alt="main-logo"
            width={458}
            height={458}
            className="w-[250px] lg:w-[458px] object-contain"
          />
          <h1 className="text-white font-inter text-primary normal font-bold text-5xl mt-[37px] leading-[140%]">
            Melon
          </h1>
        </div>
      </div>
    </>
  );
};

export default Page;
