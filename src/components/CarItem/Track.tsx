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
  const containerClass = classNames(
    'border-t-2 border-b-2 relative pl-1 border-l-2',
  );

  return (
    <div style={{ width: `${TRACK_LENGTH + 60}px` }} className={containerClass}>
      <motion.div
        animate={
          animation.isAnimating ? { x: TRACK_LENGTH } : { x: animation.x }
        }
        transition={
          animation.isAnimating
            ? { duration: animation.duration, ease: 'linear' }
            : { duration: 0 }
        }
        onUpdate={onUpdate}
        onAnimationComplete={onComplete}
      >
        <PiCarProfileFill color={car.color} size={60} className="z-10" />
      </motion.div>
      <CarInfo car={car} />
    </div>
  );
}
