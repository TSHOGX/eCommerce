"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/account";
  const callbackUrl = "/account";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setFormValues({ email: "", password: "" });

      const res = await signIn("credentials", {
        redirect: false,
        email: formValues.email,
        password: formValues.password,
        callbackUrl,
      });

      setLoading(false);

      console.log(res);
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        setError("invalid email or password");
      }
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  return (
    <div className=" flex justify-center">
      <form onSubmit={onSubmit}>
        {error && <div>Error: {error}</div>}
        <a
          className="uppercase text-white bg-gray-800 hover:bg-gray-900 font-medium rounded text-sm px-8 py-4"
          onClick={() => signIn("google", { callbackUrl })}
          role="button"
        >
          Continue with Google
        </a>
      </form>
    </div>
  );
};
