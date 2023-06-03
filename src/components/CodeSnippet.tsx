/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { LuClipboard } from 'react-icons/lu';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function CodeSnippet() {
  const [selectedLang, setSelectedLang] = useState<'JS' | 'PHP' | 'CPP'>('JS');
  const codeString =
    'console.log("Hello World"); \nfunction Test(){\n  return 12;\n}';
  return (
    <div className="container mx-auto mb-10 relative">
      <div className="flex flex-nowrap dark:bg-gray-800 dark:text-gray-100">
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'JS'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('JS');
          }}
        >
          JS
        </p>
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'PHP'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('PHP');
          }}
        >
          PHP
        </p>
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'CPP'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('CPP');
          }}
        >
          C++
        </p>
        <div className="px-5 py-3 -mb-0.5 ml-auto hover:text-violet-400 dark:border-gray-100 cursor-pointer border border-b-0 bg-code rounded-t-lg text-gray-400">
          <LuClipboard className="text-inherit w-6 h-6" />
        </div>
      </div>
      <div
        className={`p-4 rounded-lg border border-gray-100 rounded-se-none bg-code ${
          selectedLang === 'JS' ? 'rounded-ss-none' : ''
        }`}
      >
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNight}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
