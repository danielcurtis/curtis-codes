import React, { ReactNode, useState } from 'react';
import Draggable from 'react-draggable';
import styles from './styles/Window.module.css';

type Props = {
  title: string;
  setShowWindow: Function;
  children: ReactNode;
};

function Window({ title, setShowWindow, children }: Props) {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <Draggable handle=".title-bar">
      <div className={`window ${isMinimized ? styles.sm : styles.lg}`}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button
              aria-label="Maximize"
              onClick={() => setIsMinimized((m: boolean) => !m)}
            />
            <button
              aria-label="Close"
              onClick={() => setShowWindow((w: boolean) => !w)}
            />
          </div>
        </div>

        <div className="window-body">
          <div>{children}</div>
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
