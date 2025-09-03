export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[550px] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Упс! Такой страницы не существует.</p>
      <button className="bg-[#edab00] text-black px-4 py-2 rounded">
        Вернуться на главную
      </button>
    </div>
  );
}
