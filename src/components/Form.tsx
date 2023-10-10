"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Form() {
  const [emailAddress, setEmailAddress] = useState("");
  const [studentName, setStudentName] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [dateOfPayment, setDateOfPayment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const { mutate, status } = useMutation({
    mutationFn: async () => {
      return await axios.post("/api/send", {
        emailAddress,
        studentName,
        amountPaid,
        dateOfPayment,
        paymentMethod,
      });
    },
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      emailAddress !== "" &&
      studentName !== "" &&
      amountPaid !== "" &&
      dateOfPayment !== "" &&
      paymentMethod !== ""
    )
      mutate();
  };

  return (
    <form className="mt-4 grid grid-cols-2 gap-4">
      <input
        type="text"
        name="to"
        id="to"
        required
        value={emailAddress}
        onChange={(e) => setEmailAddress(e.target.value)}
        disabled={status === "loading"}
        placeholder="Email Address"
        className="col-span-2 rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <input
        type="text"
        name="studentName"
        id="studentName"
        required
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        disabled={status === "loading"}
        placeholder="Student Name"
        className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <input
        type="text"
        name="amountPaid"
        id="amountPaid"
        required
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        disabled={status === "loading"}
        placeholder="Amount Paid"
        className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <input
        type="text"
        name="date"
        id="date"
        required
        value={dateOfPayment}
        onChange={(e) => setDateOfPayment(e.target.value)}
        disabled={status === "loading"}
        placeholder="Date of Payment"
        className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <input
        type="text"
        name="paymentMethod"
        id="paymentMethod"
        required
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        disabled={status === "loading"}
        placeholder="Payment Method"
        className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
      />
      <button
        onClick={handleClick}
        className="col-span-2 w-full rounded-md border border-slate7 bg-slate12 py-1.5 font-medium text-slate1 transition-colors duration-200 ease-in hover:border-slate8 hover:bg-slate11"
      >
        Send
      </button>
    </form>
  );
}
