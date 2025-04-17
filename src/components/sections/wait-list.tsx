"use client";
import { translationsAtom } from "@/stores/language-atom";
import { useAtomValue } from "jotai";
import { useState } from "react";

export const WaitListSection = () => {
  const t = useAtomValue(translationsAtom);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError(t.waitList.form.error.invalid);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      await response.json();

      if (!response.ok) {
        switch (response.status) {
          case 400:
            setError(t.waitList.form.error.invalid);
            break;
          case 409:
            setError(t.waitList.form.error.exists);
            break;
          case 500:
            setError(t.waitList.form.error.internal);
            break;
          default:
            setError(t.waitList.form.error.unknown);
            break;
        }
        return;
      }

      setError("");
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("Falha na conexão. Verifique sua internet e tente novamente.");
    }
  };

  return (
    <section id="waitlist" className="w-full flex flex-col py-20">
      <div className="sm:max-w-[1200px] max-w-[1440px] w-full flex flex-col justify-center items-center gap-5 mx-auto">
        <div className="flex flex-col justify-center items-center gap-2">
          <span
            className="py-1 px-3 text-sm rounded-full cursor-default border border-blue-500/20 text-blue-500 bg-blue-500/10 duration-300 hover:bg-blue-500/20"
            data-aos="fade-down"
          >
            {t.waitList.copywrite.tag}
          </span>
          <h1
            className="mb-2 sm:text-4xl text-3xl text-center text-pretty font-bold"
            data-aos="fade-left"
          >
            {t.waitList.copywrite.title}
          </h1>
          <p
            className="max-w-[510px] text-sm text-center text-pretty text-gray-600"
            data-aos="fade-right"
          >
            {t.waitList.copywrite.description}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-[528px] w-full flex flex-wrap items-center"
        >
          <div className="w-full flex justify-center items-center relative">
            <input
              type="email"
              required
              placeholder={t.waitList.form.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={success}
              className="w-full p-4 pr-[150px] rounded-full border border-gray-200 bg-white disabled:text-gray-500 disabled:opacity-80"
              data-aos="fade-right"
            />
            <button
              type="submit"
              disabled={success}
              className="py-4 px-6 absolute right-0 rounded-full cursor-pointer font-medium border border-blue-500 text-white bg-blue-500 hover:border-blue-600 hover:bg-blue-600 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              data-aos="fade-left"
            >
              {t.waitList.form.button}
            </button>
          </div>
        </form>
        {success && (
          <p className="text-sm text-center text-green-600" data-aos="fade-up">
            {t.waitList.form.success}
          </p>
        )}
        {error && (
          <p className="text-sm text-center text-red-600" data-aos="fade-up">
            {error}
          </p>
        )}
        <p className="text-sm text-center text-gray-600" data-aos="fade-up">
          {t.waitList.disclaimer}
        </p>
      </div>
    </section>
  );
};
