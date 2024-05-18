import { ReactNode } from 'react';
import Header from './Header.tsx';

type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-2">{children}</main>
    </>
  );
}
