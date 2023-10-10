"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    emailAddress: "",
    studentName: "",
    amountPaid: "",
    dateOfPayment: "",
    paymentMethod: "",
  });

  const allFieldsFilled = Object.values(formData).every(
    (field) => field !== "",
  );

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
      mutate(formData);
    }
  };

  const { mutate, status } = useMutation({
    mutationFn: async (data: typeof formData) =>
      await axios.post("/api/send", data),
    onSuccess: () => {
      setFormData({
        emailAddress: "",
        studentName: "",
        amountPaid: "",
        dateOfPayment: "",
        paymentMethod: "",
      });
    },
  });

  return (
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
        disabled={!allFieldsFilled}
        className="col-span-2 w-full rounded-md bg-slate12 py-1.5 font-medium text-slate1 transition-colors duration-200 ease-in hover:bg-slate11 disabled:cursor-not-allowed disabled:bg-slate5 disabled:text-slate11"
      >
        Send
      </button>
    </form>
  );
}
