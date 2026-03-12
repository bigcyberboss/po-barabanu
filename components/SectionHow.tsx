import AnimateOnScroll from "./AnimateOnScroll";

const steps = [
  {
    number: "01",
    title: "Записываетесь",
    description: "Заполните простую форму или напишите в Telegram - мы подберём удобное время",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Пробный урок",
    description: "Знакомитесь с преподавателем, пробуете инструмент, получаете первые навыки",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Программа",
    description: "Составляем индивидуальную программу под ваши цели и музыкальные предпочтения",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Результат",
    description: "Играете любимые песни, выступаете на концертах и получаете удовольствие",
    icon: (
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

export default function SectionHow() {
  return (
    <section className="section">
      <AnimateOnScroll animation="fade-in-up">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">
            Как <span className="text-gradient">проходит</span> обучение
          </h2>
          <p className="section-subtitle mx-auto">
            От первого урока до уверенной игры - 4 простых шага
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <AnimateOnScroll
            key={step.number}
            animation="fade-in-up"
            delay={i * 150}
          >
            <div className="card group text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>
              <div className="text-xs font-mono text-primary/60 mb-2">{step.number}</div>
              <h3 className="font-display font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
