import { ReactNode } from "react";

interface SectionHeaderProps {
  icon: ReactNode;
  comment: string;
  title: ReactNode;
  iconClassName?: string;
}

export default function SectionHeader({
  icon,
  comment,
  title,
  iconClassName = "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconClassName}`}
      >
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
        <span className="font-mono text-sm font-normal text-blue-500 dark:text-blue-400">
          {comment}
        </span>
        <br />
        {title}
      </h2>
    </div>
  );
}
