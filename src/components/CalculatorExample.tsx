function CalculatorExample() {
  return (
    <section
      className="p-8 dark:bg-gray-800 dark:text-gray-100 scroll-mt-24"
      id="example"
    >
      <div className="container mx-auto p-4 text-center">
        <h2
          className="text-4xl font-bold mb-4 relative
          before:w-44 before:h-1 before:rounded-lg before:bg-violet-400 before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2"
        >
          Przykładowy program
        </h2>
        <p className="dark:text-gray-400 pb-4">
          Kalkulator w każdym z podanych języków
        </p>

        <h3 className="text-3xl py-4 text-center mt-0">Kalkulator w PHP</h3>
        <p className="pb-4">
          Kalkulator używa sesji, dla prawidłowego działania trzeba otworzyć
          stronę w{' '}
          <a
            href="https://kalkulator--lemmoor.repl.co"
            target="_blank"
            className="underline underline-offset-2 hover:text-violet-400"
            rel="noreferrer"
          >
            nowej karcie przegłądarki.
          </a>
        </p>

        <iframe
          title="kalkulator w php"
          src="https://replit.com/@lemmoor/kalkulator?embed=true"
          width="800"
          height="500"
          className="w-full"
        />
      </div>
    </section>
  );
}

export default CalculatorExample;
