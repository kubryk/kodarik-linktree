import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "KODARIK — AI Автоматизація бізнес-процесів",
  description:
    "KODARIK — AI автоматизація бізнес-процесів. Оптимізуйте ваш бізнес за допомогою штучного інтелекту та автоматизації.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
