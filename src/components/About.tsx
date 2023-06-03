// import { IoLogoJavascript } from 'react-icons/io';
import { GiAbstract049 } from 'react-icons/gi';

function About() {
  return (
    <section
      className="p-8 pt-14 dark:bg-gray-800 dark:text-gray-100 scroll-mt-24"
      id="about"
    >
      <div className="container mx-auto p-4 mb-6 space-y-2 text-center">
        <h2
          className="text-4xl font-bold mb-4 relative
          before:w-44 before:h-1 before:rounded-lg before:bg-violet-400 before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2"
        >
          Porównanie
        </h2>
        <p className="dark:text-gray-400">
          Dowiedz się gdzie są używane JS, PHP i C++
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <GiAbstract049 className="w-8 h-8 dark:text-violet-400" />
          <h3 className="my-3 text-3xl font-semibold">JavaScript</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center leading-6 max-w-sm">
              Język programowania używany do tworzenia interaktywnych stron
              internetowych i aplikacji. Dzięki dynamicznemu typowaniu i bogatym
              zasobom bibliotek, JavaScript jest popularnym wyborem zarówno dla
              frontendu, jak i backendu aplikacji webowych.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <GiAbstract049 className="w-8 h-8 dark:text-violet-400" />
          <h3 className="my-3 text-3xl font-semibold">PHP</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center leading-6 max-w-sm">
              Skryptowy język programowania. Programy pisane w tym języku nie są
              kompilowane do kodu maszynowego, lecz wykonywane są przez
              specjalną aplikację zwaną interpreterem. PHP jest językiem
              server-side (pracuje po stronie serwera WWW).
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <GiAbstract049 className="w-8 h-8 dark:text-violet-400" />
          <h3 className="my-3 text-3xl font-semibold">C++</h3>
          <div className="space-y-1 leading-tight">
            <p className="text-center leading-6 max-w-sm">
              Język programowania ogólnego przeznaczenia, znany ze swojej
              wydajności i bliskiego związku z językiem C. Jest używany do
              tworzenia aplikacji, systemów operacyjnych, gier komputerowych i
              oprogramowania wbudowanego, ze względu na swoje możliwości
              niskopoziomowe i obiektowe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
