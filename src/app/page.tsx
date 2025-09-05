"use client";

import { useState } from "react";

export default function Page() {
  const [intro, setIntro] = useState("");
  const [hrName, setHrName] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [vacancyUrl, setVacancyUrl] = useState("");
  const [projectName, setProjectName] = useState("");
  const [isResume, setIsResume] = useState(false);
  const [isTg, setIsTg] = useState(false);

  const [result, setResult] = useState("");

  const handleGenerate = () => {
    setResult(
      `${intro}${hrName}!\n\nМеня зовут Павел, я Frontend-разработчик. Откликаюсь на вакансию "${vacancy}" (${vacancyUrl}). Ваш стек и задачи совпадают с моим опытом — уверен, смогу начать быстро приносить пользу с первого спринта.\n\nМой опыт:\n- Яндекс, Авто.ру — создавал новые блоки с нуля (отзывы, тесты и обзоры), перерабатывал ключевые элементы интерфейса, интегрировал систему сбора фидбэка, оптимизировал кодовую базу (переезд на новые ручки, рефакторинг), писал юнит- и скриншотные тесты.\n- Data & Finance Technologies — разрабатывал админ-панель финансового приложения: сложные компоненты с бизнес-логикой на React + Material UI/Ant Design, рефакторинг и улучшение архитектуры.\n- Архитектурно-дизайнерское бюро — разрабатывал и поддерживал корпоративный сайт на Next.js: адаптивная и кросс-браузерная верстка, работа с формами, оптимизация производительности, покрытие тестами.\n\nСтек, в котором я уверен: TypeScript/JavaScript, React, Redux Toolkit, Next.js, SASS/CSS Modules/Tailwind, Material UI/Ant Design/PrimeReact/Storybook, React-Hook-Form/Zod, Jest, Puppeteer.\n\nЧто для вас важно в моем опыте:\n- Опыт в крупном highload-продукте (Авто.ру), где интерфейсы должны быть надёжными и удобными.\n- Фулл-сайкл задач: от разработки фич с нуля до рефакторинга и оптимизации.\n- Качество кода: покрытие тестами, UI-кит, ревью, понятные PR-ы.\n- Производительность и UX: ускорение загрузки, отзывчивость интерфейсов, работа с метриками.\n\nМне близки ваши задачи, и в этих направлениях у меня уже есть релевантный опыт. Буду рад обсудить, как мои навыки могут помочь ${projectName}!${
        isResume ? "\n\nК письму также прикрепляю мое резюме." : ""
      }\n${
        isTg ? "\nКонтакты для связи: https://t.me/pahanchickt" : ""
      }\nМое портфолио: https://ternopavel.ru/\n\nХорошего дня,\nПавел.`
    );
  };

  return (
    <div className="grid grid-cols-2 gap-6 p-6 min-h-screen bg-gray-50">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex gap-2 align-center">
            <input
              type="radio"
              value={intro}
              onChange={() => setIntro("Привет, ")}
              name="intro"
              id="intro01"
            />
            <label htmlFor="intro01">Привет, ...</label>
          </div>
          <div className="flex gap-2 align-center">
            <input
              type="radio"
              value={intro}
              onChange={() => setIntro("Здравствуйте, ")}
              name="intro"
              id="intro02"
            />
            <label htmlFor="intro02">Здравствуйте, ...</label>
          </div>
          <div className="flex gap-2 align-center">
            <input
              type="radio"
              value={intro}
              onChange={() => setIntro("Здравствуйте")}
              name="intro"
              id="intro03"
            />
            <label htmlFor="intro03">Здравствуйте!</label>
          </div>
        </div>
        <input
          type="text"
          placeholder="Имя HR/команды"
          value={hrName}
          onChange={(e) => setHrName(e.target.value)}
          className="border p-2 rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Название вакансии"
          value={vacancy}
          onChange={(e) => setVacancy(e.target.value)}
          className="border p-2 rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Ссылка на вакансию"
          value={vacancyUrl}
          onChange={(e) => setVacancyUrl(e.target.value)}
          className="border p-2 rounded-xl shadow-sm"
        />
        <input
          type="text"
          placeholder="Название проекта"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="border p-2 rounded-xl shadow-sm"
        />
        <div className="flex gap-4">
          <div className="flex gap-2 align-center">
            <input
              type="checkbox"
              checked={isResume}
              onChange={(e) => setIsResume(e.target.checked)}
              name="isResume"
              id="isResume"
            />
            <label htmlFor="isResume">Резюме</label>
          </div>
          <div className="flex gap-2 align-center">
            <input
              type="checkbox"
              checked={isTg}
              onChange={(e) => setIsTg(e.target.checked)}
              name="isTg"
              id="isTg"
            />
            <label htmlFor="isTg">Телеграм</label>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleGenerate}
            className="bg-yellow-500 text-white rounded-xl py-2 px-4 shadow hover:bg-yellow-600 transition grow-1"
          >
            Сгенерировать
          </button>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="bg-yellow-500 text-white rounded-xl py-2 px-4 shadow hover:bg-yellow-600 transition"
          >
            Скопировать текст
          </button>
        </div>
      </div>

      <div>
        <textarea
          readOnly
          value={result}
          className="w-full h-full border p-2 rounded-xl shadow-sm"
        />
      </div>
    </div>
  );
}
