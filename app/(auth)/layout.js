const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-full bg-slate-800 flex-col gap-4">
      {children}
      <span className="font-bold text-white">By team - ZeroThreshold</span>
    </div>
  );
};

export default Layout;
