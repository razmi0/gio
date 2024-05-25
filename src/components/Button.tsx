type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-full px-4 py-2 font-semibold bg-fuchsia-500 text-white ring-1 ring-offset-2 ring-fuchsia-200"
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
