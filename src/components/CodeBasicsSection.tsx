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
          js: 'let array = [] \n//dodawanie elementu do końca tablicy\narray.push(12) \n//usuwanie ostatniego elementu tablicy, zwraca ten element\nlet ostani = array.pop()\n\n//wybranie drugiego elementu tablicy\n//numerowanie elementów tablicy zaczyna się od 0\nlet array2 = [1,2,\'3\',\'4\'] \nlet drugi = array2[1]',
          php: '<?php\n  $array = []; \n  //dodawanie elementu do końca tablicy\n  $array[] = 12; \n  //usuwanie ostatniego elementu tablicy, zwraca ten element\n  $ostani = array_pop($array);\n  \n  //wybranie drugiego elementu tablicy\n  //numerowanie elementów tablicy zaczyna się od 0\n  $array2 = [1,2,\'3\',\'4\']; \n  $drugi = $array2[1];\n?>',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  //deklaracja 10-elementowej tablicy liczb\n  int tablica_liczb[10];\n  //dodanie wartości do tablicy\n  tablica_liczb[0] = 1;\n  tablica_liczb[1] = 2;\n  //długość tablicy wykrywana automatycznie jeśli są podane elementy tablicy przy deklaracji\n  string tablica[] = {\'a\', \'b\', \'c\'};\n  //drugi element tablicy\n  int drugi = tablica[1];\n  //Nie da się łatwo zwiększyć/zmiejszyć rozmiar tablicy w C++.\n  //Aby to zrobić trzeba utworzyć nową tablicę i przekopiować zawartość starej.\n  return 0;\n}',
        }}
      />
      <h3 className="text-3xl my-6 text-center">Instrukcje warunkowe - if</h3>
      <CodeSnippet
        code={{
          js: 'let liczba = 2;\n if(liczba === 3){\n  console.log("Ten tekst się wydrukuje jak liczba jest 3")\n} else if(liczba === 1){\n  console.log("Ten tekst się wydrukuje jak liczba jest 4")\n} else{\n  console.log("Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony")\n}',
          php: '<?php\n  $liczba = 2;\n  if($liczba == 3){\n    echo "Ten tekst się wydrukuje jak liczba jest 3"; \n  } elseif($liczba == 1){\n    echo "Ten tekst się wydrukuje jak liczba jest 4"; \n  } else{\n    echo "Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony"; \n  } \n?>',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  int liczba = 2;\n  if(liczba == 3){\n    cout<<"Ten tekst się wydrukuje jak liczba jest 3";\n  } else if(liczba == 1){\n    cout<<"Ten tekst się wydrukuje jak liczba jest 4";\n  } else{\n    cout<<"Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony";\n  }\n  return 0;\n}',
        }}
      />
      <h3 className="text-3xl my-6 text-center">Instrukcje warunkowe - switch</h3>
      <CodeSnippet
        code={{
          js: 'let liczba = 2;\n if(liczba === 3){\n  console.log("Ten tekst się wydrukuje jak liczba jest 3")\n} else if(liczba === 1){\n  console.log("Ten tekst się wydrukuje jak liczba jest 4")\n} else{\n  console.log("Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony")\n}',
          php: '<?php\n  $liczba = 2;\n  if($liczba == 3){\n    echo "Ten tekst się wydrukuje jak liczba jest 3"; \n  } elseif($liczba == 1){\n    echo "Ten tekst się wydrukuje jak liczba jest 4"; \n  } else{\n    echo "Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony"; \n  } \n?>',
          cpp: '#include <iostream>\nusing namespace std;\n\nint main() {\n  int liczba = 2;\n  if(liczba == 3){\n    cout<<"Ten tekst się wydrukuje jak liczba jest 3";\n  } else if(liczba == 1){\n    cout<<"Ten tekst się wydrukuje jak liczba jest 4";\n  } else{\n    cout<<"Ten tekst się wydrukuje jak żaden z poprzednich warunków nie będzie spełniony";\n  }\n  return 0;\n}',
        }}
      />
    </section>
  );
}

export default CodeBasicsSection;
