import Confetti from 'react-confetti';

type Props = {
  name: string;
};

export default function WinnerMessage({ name }: Props) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-pink-600 bg-opacity-50 rounded-lg w-[400px] flex items-center justify-center h-[300px]">
      <Confetti className="z-30" width={400} height={300} />
      <p className="text-center p-5 text-5xl font-bold z-50 text-white">{`Winner is ${name}!`}</p>
    </div>
  );
}
