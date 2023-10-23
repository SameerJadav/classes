"use client";

import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "~/components/Form";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [isAllowed, setIsAllowed] = useState<boolean>(
    localStorage.getItem("isAllowed") === "true",
  );

  const allowedEmails = [
    "sameerjadav010@gmail.com",
    "niharparmar9978@gmail.com",
  ];

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailAllowed = allowedEmails.includes(email);
    isEmailAllowed
      ? toast.success("Access granted")
      : toast.error("Access denied");
    setIsAllowed(isEmailAllowed);
    localStorage.setItem("isAllowed", String(isEmailAllowed));
  };

  return isAllowed ? (
    <main className="flex h-screen items-center justify-center px-4">
      <section className="max-w-2xl">
        <p className="text-center text-2xl font-bold md:text-5xl">
          Magic Beats Receipt Form
        </p>
        <Form />
        <p className="mt-4 text-center font-medium italic text-slate11">
          Note: All values entered in the form will remain exactly the same in
          the email.
        </p>
      </section>
      <Toaster />
    </main>
  ) : (
    <main className="flex h-screen items-center justify-center">
      <form
        className="flex w-full max-w-lg flex-col gap-4"
        onSubmit={handleLogin}
      >
        <div className="flex flex-1 items-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="flex-1 rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-md bg-slate12 px-3 py-1.5 text-slate1"
          >
            Login
          </button>
        </div>
      </form>
      <Toaster />
    </main>
  );
}
