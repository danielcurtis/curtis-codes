import { useState, useEffect, useRef, FormEvent } from 'react';
import Image from 'next/image';
import styles from './styles/Clippy.module.css';

function Chat() {
  const [input, setInput] = useState<string>('');
  const [humanConvo, setHumanConvo] = useState<string[]>([]);
  const [clippyConvo, setClippyConvo] = useState<string[]>(['Howdy Partner!']);
  const inputRef = useRef<HTMLDivElement>();

  const updateHumanConvo = (e: FormEvent) => {
    e.preventDefault();
    setHumanConvo((convo) => [...convo, input]);
    setClippyConvo((convo) => [...convo, 'I know where u live']);
    setInput('');
  };

  useEffect(() => {
    inputRef.current?.scrollIntoView();
  }, [clippyConvo]);

  return (
    <div className={styles.chat}>
      {clippyConvo.map((msg: string, idx: number) => (
        <>
          <p className={styles.clippy}>{msg}</p>
          <p className={styles.human}>{humanConvo[idx]}</p>
        </>
      ))}
      <form onSubmit={(e) => updateHumanConvo(e)}>
        <input
          className={styles.input}
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

function Clippy() {
  const [toggleChat, setToggleChat] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div>
        <Image
          alt="Clippy"
          src="/clippy.gif"
          width={80}
          height={80}
          quality={100}
          onClick={() => setToggleChat((t: boolean) => !t)}
          className={styles.img}
        />
      </div>
      {toggleChat && <Chat />}
    </div>
  );
}

export default Clippy;
