/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { LuClipboard, LuClipboardCheck } from 'react-icons/lu';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeSnippetProps {
  code: {
    php: string;
    cpp: string;
    js: string;
  };
}

function CodeSnippet({ code }: CodeSnippetProps) {
  const [selectedLang, setSelectedLang] = useState<'js' | 'php' | 'cpp'>('js');
  const [codeCopied, setCodeCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code[selectedLang]).then(() => {
      setCodeCopied(true);
      setTimeout(() => {
        setCodeCopied(false);
      }, 1500);
    });
  };

  return (
    <div className="container mx-auto mb-10 relative">
      <div className="flex flex-nowrap dark:bg-gray-800 dark:text-gray-100">
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'js'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('js');
          }}
        >
          JS
        </p>
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'php'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('php');
          }}
        >
          PHP
        </p>
        <p
          className={`px-5 py-3 -mb-0.5 dark:border-gray-100 cursor-pointer ${
            selectedLang === 'cpp'
              ? 'border border-b-0 bg-code rounded-t-lg text-gray-50'
              : 'text-gray-400'
          }`}
          onClick={() => {
            setSelectedLang('cpp');
          }}
        >
          C++
        </p>
        <div
          className="px-5 py-3 -mb-0.5 ml-auto hover:text-violet-400 dark:border-gray-100 cursor-pointer border border-b-0 bg-code rounded-t-lg text-gray-400"
          role="button"
          tabIndex={0}
          onClick={copyCode}
        >
          {codeCopied ? (
            <LuClipboardCheck className="text-inherit w-6 h-6 text-green-500" />
          ) : (
            <LuClipboard className="text-inherit w-6 h-6" />
          )}
        </div>
      </div>
      <div
        className={`p-4 rounded-lg border border-gray-100 rounded-se-none bg-code ${
          selectedLang === 'js' ? 'rounded-ss-none' : ''
        }`}
      >
        <SyntaxHighlighter
          language={selectedLang === 'js' ? 'javascript' : selectedLang}
          style={tomorrowNight}
          showLineNumbers
        >
          {code[selectedLang]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default CodeSnippet;
