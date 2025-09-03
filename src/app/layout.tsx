import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Генератор рекомендательного письма</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="container mx-auto px-4 py-8 space-y-4 flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
