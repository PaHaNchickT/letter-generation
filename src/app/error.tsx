"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
};

export default function Error({ error }: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center h-[550px] text-center">
      <h1 className="text-6xl font-bold mb-4">Что-то пошло не так!</h1>
      <p className="text-xl mb-8">{`"${error.message}"`}</p>
      <button className="bg-[#edab00] text-black px-4 py-2 rounded">
        Вернуться на главную
      </button>
    </div>
  );
}
