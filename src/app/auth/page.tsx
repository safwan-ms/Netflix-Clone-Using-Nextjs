"use client";

import Input from "@/components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentValue) =>
      currentValue === "login" ? "register" : "login"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.png')] bg-no-repeat bg-fixed bg-center bg-cover">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black lg:bg-black/50 "></div>

      {/* Content */}
      <nav className="relative z-10 px-12 py-5">
        <Image
          src="/images/logo.png"
          alt="logo"
          height={48}
          width={120}
          className="h-12 w-[120px]"
        />
      </nav>

      <div className="relative flex justify-center z-10">
        <div className="bg-black/70 px-16 py-5 md:py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
          <h2 className="text-white text-xl lg:text-4xl mb-6 font-semibold ">
            {variant === "login" ? "Sign in" : "Register"}
          </h2>
          <div className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                label="Username"
                onChange={(event) => setName(event.target.value)}
                id="name"
                type="text"
                value={name}
              />
            )}
            <Input
              label="Email"
              onChange={(event) => setEmail(event.target.value)}
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Password"
              onChange={(event) => setPassword(event.target.value)}
              id="password"
              type="password"
              value={password}
            />

            <button className="bg-red-600 max-w-md py-3 text-white rounded-md mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign up"}
            </button>

            <p className="text-neutral-500 ">
              {variant === "login"
                ? "First time using Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 cursor-pointer hover:underline"
              >
                {variant === "login" ? "Create an account" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
