import { FaFlagCheckered } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PiCarProfileFill } from 'react-icons/pi';
import classNames from 'classnames';
import { AnimationState, Car } from '../../types/types.ts';
import CarInfo from './CarInfo.tsx';
import config from '../../data/config.ts';

const { TRACK_LENGTH } = config;

type Props = {
  car: Car;
  animation: AnimationState;
  onUpdate: (latest: { x: number }) => void;
  onComplete: () => void;
};

export default function Track({ car, animation, onUpdate, onComplete }: Props) {
  const containerClass = classNames('relative pl-2');

  return (
    <div
      style={{ width: `${TRACK_LENGTH + 100}px` }}
      className={containerClass}
    >
      <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-pink-600 absolute left-2 bottom-[6px]" />

      <FaFlagCheckered
        size={50}
        className="opacity-25 absolute top-1/2 -translate-y-1/2 right-[-5px] pr-1 border-r-2"
      />
      <motion.div
        animate={
          animation.isAnimating ? { x: TRACK_LENGTH } : { x: animation.x }
        }
        transition={
          animation.isAnimating
            ? { duration: animation.duration, ease: 'easeInOut' }
            : { duration: 0 }
        }
        onUpdate={onUpdate}
        onAnimationComplete={onComplete}
      >
        <PiCarProfileFill color={car.color} size={80} className="z-10" />
      </motion.div>
      <CarInfo car={car} />
    </div>
  );
}
