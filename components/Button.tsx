interface ButtonProps {
  className?: string;
  text?: string;
  href?: string;
  onClick?: () => void;
}

function Button({ className, text = "Continue", href, onClick }: ButtonProps) {
  const buttonContent = (
    <div className={`flex items-center gap-[-10px] ${className}`}>
      {/* Text Frame */}
      <div className="bg-black border-[#fb6a5b] border-2 border-solid box-border content-stretch flex items-center justify-center px-4 py-3 relative shrink-0 shadow-lg shadow-[#fb6a5b]/25">
        <p className="font-medium leading-[normal] relative shrink-0 text-[24px] text-nowrap text-white tracking-[2.4px] uppercase whitespace-pre font-pixelify !no-underline">
          {text}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block !no-underline">
        {buttonContent}
      </a>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  return buttonContent;
}

export default Button;
