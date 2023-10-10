import Form from "~/components/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="max-w-2xl">
        <p className="text-center text-5xl font-bold">
          Magic Beats Receipt Form
        </p>
        <Form />
        <p className="mt-4 text-center font-medium italic text-slate11">
          Note: All values entered in the form will remain exactly the same in
          the email.
        </p>
      </section>
    </main>
  );
}
