import AnimateOnScroll from "./AnimateOnScroll";

const features = [
  {
    emoji: "🥁",
    title: "Профессиональная установка",
    description: "Занятия на качественной барабанной установке - всё оборудование уже в студии",
  },
  {
    emoji: "🎸",
    title: "Любые стили",
    description: "Рок, поп, джаз, метал, фанк - подберём программу под ваши музыкальные вкусы",
  },
  {
    emoji: "🤝",
    title: "Индивидуальный подход",
    description: "Каждый ученик уникален - программа адаптируется под ваш темп и цели",
  },
  {
    emoji: "⏰",
    title: "Гибкое расписание",
    description: "Занимайтесь в удобное время - подстраиваемся под ваш график",
  },
  {
    emoji: "📍",
    title: "Удобное расположение",
    description: "Караимская 21 - легко добраться, есть бесплатная парковка",
  },
  {
    emoji: "📈",
    title: "Отслеживание прогресса",
    description: "Фиксируем ваши достижения - вы видите как растёт мастерство",
  },
];

export default function SectionEquipment() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-cymbal.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-title">
              Почему <span className="text-gradient">выбирают</span> нас?
            </h2>
            <p className="section-subtitle mx-auto">
              У нас есть все для комфортного{" "}
              <br className="sm:hidden" />
              и эффективного обучения
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
              <div className="card group text-center">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="font-display font-bold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
