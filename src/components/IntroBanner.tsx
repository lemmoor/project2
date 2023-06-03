import { useEffect, useState } from 'react';

function IntroBanner() {
  const [textContent, setTextContent] = useState('JS');
  useEffect(() => {
    const changeText = () => {
      setTimeout(() => {
        setTextContent('JS ');
      }, 0);
      setTimeout(() => {
        setTextContent('PHP');
      }, 2400);
      setTimeout(() => {
        setTextContent('C++');
      }, 4800);
    };
    changeText();
    const intervalID = setInterval(changeText, 7200);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <section className="mb-16 bg-violet-400 grid place-content-center">
      <h1 className="mb-1 text-4xl md:text-6xl dark:text-gray-900 w-[27rem] py-36">
        Podstawy <br className="block md:hidden" />
        <span className="inline-flex font-mono h-20 pt-2 overflow-x-hidden animate-type whitespace-nowrap text-brand-accent will-change-transform">
          {textContent}
        </span>
        <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform" />
      </h1>
    </section>
  );
}

export default IntroBanner;
