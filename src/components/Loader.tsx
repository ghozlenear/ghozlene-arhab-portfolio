import { useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.png';
import Asterisk from '../assets/Asterisk.png';
import Flower from '../assets/flower.png';
import SoftFlower from '../assets/Soft Flower.png';

type Props = {
  visible: boolean;
};

const Loader = ({ visible }: Props) => {
  const images = [Flower, Asterisk, SoftFlower];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % images.length), 700);
    return () => clearInterval(t);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-100 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Center piece */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <img src={images[idx]} alt="" className="w-10 h-10 animate-spin" />
        <h1 className="font-['Italiana',serif] text-black text-3xl">Loading…</h1>
      </div>
    </div>
  );
};

export default Loader;
