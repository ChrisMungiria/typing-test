import { ReactNode } from "react";

interface DifficultyLayoutProps {
  children: ReactNode;
}

const DifficultyLayout = ({ children }: DifficultyLayoutProps) => {
  return (
    <section className="flex min-h-screen flex-col items-center p-24 bg-background text-slate-100">
      {children}
    </section>
  );
};

export default DifficultyLayout;
