import AnimateOnScroll from "./AnimateOnScroll";

export default function SectionAbout() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/bg-silhouette.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="relative z-10 section">
        <AnimateOnScroll animation="fade-in-up">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">
              Школа барабанов{" "}
              <span className="text-gradient">&laquo;По барабану&raquo;</span>
            </h2>

            <div className="space-y-5 text-muted text-base sm:text-lg leading-relaxed text-left">
              <p className="text-foreground font-display font-semibold text-lg sm:text-xl text-center">
                Научим играть так, чтобы вам было всё по барабану!
              </p>

              <p>
                Сбросьте стресс, зарядитесь энергией и почувствуйте ритм. Наша
                школа — это больше, чем просто уроки музыки. Это состояние души.
              </p>

              <p>
                В сумасшедшем ритме города мы помогаем найти ваш собственный. Мы
                даем инструмент для мощного энергетического выплеска,
                самовыражения и настоящей радости.
              </p>

              <p>
                Здесь вам будет по барабану на все трудности и комплексы. Только
                вы, барабаны и ритм, который бьется в такт вашему сердцу.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
