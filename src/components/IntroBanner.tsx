import { useEffect, useState } from 'react';

function IntroBanner() {
  const [textContent, setTextContent] = useState('JS');
  useEffect(() => {
    const time = 10;
    const changeText = () => {
      setTimeout(() => {
        setTextContent('JS ');
      }, time * 0);
      setTimeout(() => {
        setTextContent('PHP');
      }, time * 200);
      setTimeout(() => {
        setTextContent('C++');
      }, time * 400);
    };
    changeText();
    const intervalID = setInterval(changeText, time * 600);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <section
      className="bg-violet-400 grid place-content-center scroll-mt-24"
      id="top"
    >
      <h1 className="mb-1 text-4xl md:text-6xl overflow-y-hidden dark:text-gray-900 w-64 md:w-[27rem] py-36">
        Podstawy&nbsp;
        <span className="inline-flex font-mono h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform line-clamp-1">
          {textContent}
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform" />
      </h1>
    </section>
  );
}

export default IntroBanner;
