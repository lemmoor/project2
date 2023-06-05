import CodeSnippet from './CodeSnippet';

function CodeBasicsSection() {
  return (
    <section
      className="p-8 dark:bg-gray-800 dark:text-gray-100 scroll-mt-24"
      id="code"
    >
      <div className="container mx-auto p-4space-y-2 text-center">
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
      <h3 className="text-3xl my-6 text-center">Zmienne</h3>
      <CodeSnippet
        code={{
          js: '//string\nlet string = "Hello world!"\n//int\nlet int = 123\n//boolean\nlet boolean = false\n//stała \nconst zmienna = "Stała zmienna"\n//Wypisywanie danych \nconsole.log(zmienna)',
          php: '//string\n$string = "Hello world!";\n//int\n$int = 123;\n//boolean\n$zmienna_boolean = true;\n//stała \ndefine("STALA_ZMIENNA", "Ta treść nigdy nie może być zmieniona");\n//Wypisywanie danych \necho STALA_ZMIENNA;',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  //string\n  string s1 = "Hello world!";\n  //int\n  int liczba = 123;\n  //boolean\n  bool b = false;\n  //stała \n  const string stala = "Stała zmienna";\n  //Wypisywanie danych\n  cout<<stala;\n  return 0;\n}',
        }}
      />
      <h3 className="text-3xl my-6 text-center">Tablice</h3>
      <CodeSnippet
        code={{
          js: 'let array = []; \narray.push(12) \narray.pop()',
          php: '$array = [];',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  int tablica_liczb[10];\n  return 0;\n}',
        }}
      />
      <h3 className="text-3xl my-6 text-center">Instrukcje warunkowe - if</h3>
      <CodeSnippet
        code={{
          js: '//todo: js if',
          php: '//todo: php if',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  //todo: c++ if\n  return 0;\n}',
        }}
      />
    </section>
  );
}

export default CodeBasicsSection;
