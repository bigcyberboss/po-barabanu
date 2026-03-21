import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    emoji: "✍️",
    title: "Запись",
    description: (
      <>
        Заполните простую форму
        <br />или напишите в Telegram
        <br />- мы подберём удобное время
      </>
    ),
  },
  {
    emoji: "🥁",
    title: "Пробный урок",
    description: (
      <>
        Знакомитесь с преподавателем,
        <br />пробуете инструмент,
        <br />получаете первые навыки
      </>
    ),
  },
  {
    emoji: "🎯",
    title: "Программа",
    description: (
      <>
        Составляем индивидуальную программу
        <br />под ваши цели
        <br />и музыкальные предпочтения
      </>
    ),
  },
  {
    emoji: "🔥",
    title: "Результат",
    description: (
      <>
        Играете любимые песни,
        <br />выступаете на концертах
        <br />и получаете удовольствие
      </>
    ),
  },
];

export default function SectionHow() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-orange.jpg"
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
              Как <span className="text-gradient">проходит</span> обучение?
            </h2>
            <p className="section-subtitle mx-auto">
              От заветного желания до уверенной игры{" "}
              <br className="sm:hidden" />
              – 4 простых шага
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimateOnScroll
              key={step.title}
              animation="fade-in-up"
              delay={i * 150}
            >
              <div className="card group text-center h-full">
                <span className="text-4xl mb-4 block">{step.emoji}</span>
                <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
