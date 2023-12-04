"use client";

import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { cn } from "~/lib/utils";

const CORRECT_PASSWORD = "203";

interface FormData {
  emailAddress: string;
  studentName: string;
  amountPaid: string;
  dateOfPayment: string;
  paymentMethod: string;
}

const initialFormData: FormData = {
  emailAddress: "",
  studentName: "",
  amountPaid: "",
  dateOfPayment: "",
  paymentMethod: "",
};

export default function Form() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
  }, []);

  const allFieldsFilled = Object.values(formData).every(
    (field) => field !== "",
  );

  const handlePasswordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setPassword("");
    } else {
      toast.error("Incorrect Password");
      setPassword("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (allFieldsFilled) {
      submitFormData(formData);
    }
  };

  const { mutate: submitFormData, status } = useMutation({
    mutationFn: async (data: FormData) => await axios.post("/api/send", data),
    onSuccess: () => {
      setFormData(initialFormData);
      toast.success("Receipt sent");
    },
    onError: () => toast.error("Something went wrong, try again later"),
  });

  return isAuthenticated ? (
    <section className="max-w-2xl">
      <p className="text-center text-2xl font-bold md:text-5xl">
        Magic Beats Receipt Form
      </p>
      <form className="mt-4 grid grid-cols-2 gap-4">
        <input
          type="text"
          name="emailAddress"
          id="to"
          required
          value={formData.emailAddress}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Email Address"
          className="col-span-2 rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
        />
        <input
          type="text"
          name="studentName"
          id="studentName"
          required
          value={formData.studentName}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Student Name"
          className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
        />
        <input
          type="text"
          name="amountPaid"
          id="amountPaid"
          required
          value={formData.amountPaid}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Amount Paid"
          className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
        />
        <input
          type="text"
          name="dateOfPayment"
          id="date"
          required
          value={formData.dateOfPayment}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Date of Payment"
          className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
        />
        <input
          type="text"
          name="paymentMethod"
          id="paymentMethod"
          required
          value={formData.paymentMethod}
          onChange={handleChange}
          disabled={status === "loading"}
          placeholder="Payment Method"
          className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
        />
        <button
          onClick={handleClick}
          disabled={!allFieldsFilled || status === "loading"}
          className={cn(
            "col-span-2 w-full rounded-md border border-transparent bg-slate12 py-1.5 font-medium text-slate1 transition-colors duration-200 ease-in hover:bg-slate11 disabled:cursor-not-allowed disabled:bg-slate5 disabled:text-slate11",
            status === "loading" && "border-yellow9",
          )}
        >
          {status === "loading" ? "Sending..." : "Send"}
        </button>
        <Toaster />
      </form>
      <p className="text-balance mt-4 text-center font-medium italic text-slate11">
        Note: All values entered in the form will remain exactly the same in the
        email.
      </p>
    </section>
  ) : (
    <form
      onSubmit={handlePasswordSubmit}
      className="flex flex-col gap-4 md:flex-row"
    >
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <button
        type="submit"
        className="col-span-2 w-full rounded-md border border-transparent bg-slate12 px-2 py-1 font-medium text-slate1 transition-colors duration-200 ease-in hover:bg-slate11 disabled:cursor-not-allowed disabled:bg-slate5 disabled:text-slate11"
      >
        Submit
      </button>
      <Toaster />
    </form>
  );
}
