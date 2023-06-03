import CodeSnippet from './CodeSnippet';

function CodeBasicsSection() {
  return (
    <section
      className="p-8 dark:bg-gray-800 dark:text-gray-100 scroll-mt-24"
      id="code"
    >
      <div className="container mx-auto p-4 mb-6 space-y-2 text-center">
        <h2
          className="text-4xl font-bold mb-4 relative
          before:w-44 before:h-1 before:rounded-lg before:bg-violet-400 before:absolute before:-top-8 before:left-1/2 before:-translate-x-1/2"
        >
          Podstawowe konstrukcje
        </h2>
        <p className="dark:text-gray-400">
          Zmienne, tablice, instrukcje warunkowe, pętle
        </p>
      </div>
      <CodeSnippet />
    </section>
  );
}

export default CodeBasicsSection;
