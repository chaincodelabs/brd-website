interface ButtonProps {
  className?: string;
  text?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ className, text = "Continue", href, onClick, disabled = false }: ButtonProps) {
  const buttonContent = (
    <div className={`flex items-center gap-[-10px] ${disabled ? 'opacity-75 cursor-not-allowed' : ''} ${className}`}>
      {/* Text Frame */}
      <div className={`bg-black border-[#fb6a5b] border-2 border-solid box-border content-stretch flex items-center justify-center px-4 py-3 relative shrink-0 shadow-lg shadow-[#fb6a5b]/25 ${disabled ? 'opacity-50' : ''}`}>
        <span className="font-medium leading-[normal] relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.4px] uppercase whitespace-pre font-pixelify !no-underline">
          {text}
        </span>
      </div>
    </div>
  );

  if (href && !disabled) {
    return (
      <a href={href} className="inline-block !no-underline">
        {buttonContent}
      </a>
    );
  }

  if (onClick && !disabled) {
    return (
      <button onClick={onClick} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  return buttonContent;
}

export default Button;
