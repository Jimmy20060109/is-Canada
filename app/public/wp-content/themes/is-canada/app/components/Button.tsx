// 可复用的按钮组件
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
  };

  const className = `${baseClasses} ${variantClasses[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
