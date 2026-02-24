import Particles from "./components/Particles";
import LinkCard from "./components/LinkCard";
import GlitchText from "./components/GlitchText";

import { FaTelegramPlane, FaYoutube, FaTiktok, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPeople } from "react-icons/io5";
import { HiMegaphone } from "react-icons/hi2";
import { PiPiggyBankFill } from "react-icons/pi";

const links = [
  { icon: <FaTelegramPlane size={20} />, label: "Написати мені", desc: "Telegram — зв'язок зі мною", href: "https://t.me/pro_kodarik" },
  { icon: <IoPeople size={20} />, label: "Telegram спільнота", desc: "Обговорення та спільнота", href: "https://t.me/kodarik_community" },
  { icon: <HiMegaphone size={20} />, label: "Telegram канал", desc: "Новини та контент", href: "https://t.me/my_home_dev" },
  { icon: <FaYoutube size={20} />, label: "YouTube", desc: "Відео про AI та автоматизацію", href: "https://www.youtube.com/@kodarik" },
  { icon: <FaTiktok size={20} />, label: "TikTok", desc: "Короткі відео та тренди", href: "https://www.tiktok.com/@pro_kodarik" },
  { icon: <FaXTwitter size={20} />, label: "X (Twitter)", desc: "Оновлення та думки", href: "https://x.com/Flock350618" },
  { icon: <FaGithub size={20} />, label: "GitHub", desc: "Open-source проєкти", href: "https://github.com/kubryk" },
  { icon: <PiPiggyBankFill size={20} />, label: "Підтримати канал", desc: "Monobank — банка на розвиток", href: "https://send.monobank.ua/jar/9etZWxsRDC", accent: true },
];

const services = [
  { icon: "⚡", label: "CRM системи" },
  { icon: "🤖", label: "AI чат-боти" },
  { icon: "📊", label: "Аналітика" },
  { icon: "🔄", label: "Інтеграції" },
  { icon: "📧", label: "Email маркетинг" },
  { icon: "🧠", label: "AI асистенти" },
];

export default function Home() {
  return (
    <>
      {/* Animated background */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow--1" />
      <div className="bg-glow bg-glow--2" />
      <div className="bg-glow bg-glow--3" />
      <Particles />

      <main className="container">
        {/* Profile Section */}
        <header className="profile">
          <GlitchText className="profile__name">
            <span className="profile__name-bracket">&lt;</span>
            KODARIK
            <span className="profile__name-bracket">/&gt;</span>
          </GlitchText>
          <p className="profile__title">AI Автоматизація бізнес-процесів</p>
          <p className="profile__author">Ярослав Гаврилюк</p>
          <div className="profile__status">
            <span className="status-dot" />
            Доступний для співпраці
          </div>
        </header>

        {/* Links Section */}
        <nav className="links" aria-label="Соціальні мережі та сервіси">
          {links.map((link, i) => (
            <LinkCard
              key={i}
              href={link.href}
              icon={link.icon}
              label={link.label}
              desc={link.desc}
              accent={link.accent}
              index={i}
            />
          ))}
        </nav>

        {/* Services Section */}
        <section className="services">
          <h2 className="services__title">Що я автоматизую</h2>
          <div className="services__grid">
            {services.map((s, i) => (
              <div key={i} className="service-chip">
                <span className="service-chip__icon">{s.icon}</span>
                {s.label}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="footer__text">
            © {new Date().getFullYear()} KODARIK
          </p>
        </footer>
      </main>
    </>
  );
}
