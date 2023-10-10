export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="max-w-2xl">
        <p className="text-center text-5xl font-bold">
          Magic Beats Receipt Form
        </p>
        <form className="mt-4 grid grid-cols-2 gap-4">
          <input
            type="text"
            name="to"
            id="to"
            required
            placeholder="Email Address"
            className="col-span-2 rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
          <input
            type="text"
            name="studentName"
            id="studentName"
            required
            placeholder="Student Name"
            className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
          <input
            type="text"
            name="amountPaid"
            id="amountPaid"
            required
            placeholder="Amount Paid"
            className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
          <input
            type="text"
            name="date"
            id="date"
            required
            placeholder="Date of Payment"
            className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
          <input
            type="text"
            name="paymentMethod"
            id="paymentMethod"
            required
            placeholder="Payment Method"
            className="rounded-md border border-slate7 bg-slate3 px-3 py-1.5 transition-colors duration-200 ease-in placeholder:text-slate11 hover:border-slate8 focus:border-slate9 focus:outline-none"
          />
        </form>
        <p className="mt-4 text-center font-medium italic text-slate11">
          Note: All values entered in the form will remain exactly the same in
          the email.
        </p>
      </section>
    </main>
  );
}
