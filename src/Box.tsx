import { useState } from 'react';

type Props = {
  children: any;
};

function Box({ children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" type="button" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
