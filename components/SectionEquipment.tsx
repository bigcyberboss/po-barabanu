import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Профессиональная установка",
    description: "Занятия на качественных барабанных установках - всё оборудование уже в студии",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Любые стили",
    description: "Рок, поп, джаз, метал, фанк - подберём программу под ваши музыкальные вкусы",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Индивидуальный подход",
    description: "Каждый ученик уникален - программа адаптируется под ваш темп и цели",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    title: "Гибкое расписание",
    description: "Занимайтесь в удобное время - подстраиваемся под ваш график",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Удобное расположение",
    description: "Караимская 21 - легко добраться, есть бесплатная парковка",
  },
  {
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
    title: "Отслеживание прогресса",
    description: "Фиксируем ваши достижения - вы видите как растёт мастерство",
  },
];

export default function SectionEquipment() {
  return (
    <section className="section">
      <AnimateOnScroll animation="fade-in-up">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">
            Почему <span className="text-gradient">выбирают</span> нас
          </h2>
          <p className="section-subtitle mx-auto">
            Всё для комфортного и эффективного обучения
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {features.map((item, i) => (
          <AnimateOnScroll
            key={item.title}
            animation="fade-in-up"
            delay={i * 80}
          >
            <div className="card group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
