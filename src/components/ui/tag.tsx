export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="flex items-center gap-2 px-3 py-1 text-sm rounded-xl cursor-default text-blue-500 bg-blue-500/10 hover:bg-blue-500/20 duration-300">
      {children}
    </span>
  );
};
