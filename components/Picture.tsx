interface PictureProps {
  src: string;
  src2x: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function Picture({ 
  src, 
  src2x, 
  alt, 
  className = "", 
  width, 
  height 
}: PictureProps) {
  return (
    <picture className={className}>
      {/* High DPI displays (2x and above) */}
      <source 
        media="(min-resolution: 2dppx)" 
        srcSet={`${src2x} 2x, ${src} 1x`}
      />
      
      {/* Standard displays (1x) */}
      <source 
        media="(max-resolution: 1.99dppx)" 
        srcSet={src}
      />
      
      {/* Fallback img with both versions */}
      <img 
        src={src} 
        srcSet={`${src2x} 2x, ${src} 1x`}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </picture>
  );
}
