// ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="p-6 bg-white  rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        Contáctame
      </h2>
      {submitted ? (
        <p className="text-green-600 text-center font-semibold">
          ¡Gracias por tu mensaje!
        </p>
      ) : (
        //
        <form
          action="hhttps://docs.google.com/forms/d/e/1FAIpQLSeXBUgFK3s8_eW681XLdE8adv0G7symdr4duCEykOGxN4W0ow/viewform?usp=dialoge"
          method="POST"
          target="_blank"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input
            type="email"
            name="email" // <-- reemplaza por el tuyo
            placeholder="Tu correo"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            name="mensaje" // <-- reemplaza por el tuyo
            placeholder="Tu mensaje"
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}
