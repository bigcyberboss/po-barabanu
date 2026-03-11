import AnimateOnScroll from "./AnimateOnScroll";

const audiences = [
  {
    emoji: "🧒",
    age: "8–13 лет",
    title: "Дети",
    description: "Развить координацию, чувство ритма и творческое мышление через музыку",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    emoji: "🎸",
    age: "14–18 лет",
    title: "Подростки",
    description: "Выплеснуть эмоции, найти хобби, которое может стать делом жизни",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    emoji: "🔥",
    age: "18–35 лет",
    title: "Взрослые",
    description: "Новое хобби, новые эмоции и возможность отвлечься от рутины",
    color: "from-primary/20 to-accent/5",
  },
  {
    emoji: "⭐",
    age: "35+ лет",
    title: "Для мечтателей",
    description: "Осуществить давнюю мечту — никогда не поздно начать",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    emoji: "🥁",
    age: "Любой опыт",
    title: "Продвинутые",
    description: "Прокачать технику, освоить новые стили и выйти на новый уровень",
    color: "from-green-500/20 to-green-600/5",
  },
];

export default function SectionAudience() {
  return (
    <section className="section">
      <AnimateOnScroll animation="fade-in-up">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-title">
            Для <span className="text-gradient">кого</span> наши уроки
          </h2>
          <p className="section-subtitle mx-auto">
            Мы работаем с учениками любого возраста и уровня подготовки
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {audiences.map((item, i) => (
          <AnimateOnScroll
            key={item.title}
            animation="scale-in"
            delay={i * 100}
          >
            <div className={`card group relative overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-xs text-primary font-medium">{item.age}</span>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
