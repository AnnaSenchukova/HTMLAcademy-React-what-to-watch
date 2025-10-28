import { ReactElement } from 'react';

type ImageVariant = 'preview' | 'poster' | 'bg';
type ImageSize = 'big' | 'small';

type FilmImageProps = {
  variant: ImageVariant;
  name: string;
  title: string;
  classModSize?: ImageSize;
};

export function FilmImage({ variant, name, title, classModSize }: FilmImageProps): ReactElement {
  const getClassName = () => {
    const baseClassName = `film-card__${variant}`;
    if (variant === 'poster') {
      return `${baseClassName} ${baseClassName}--${classModSize}`;
    }
    return baseClassName;
  };

  const className = getClassName();
  const alt = `${title} ${variant}`;

  const getImageConfig = () => {
    switch (variant) {
      case 'preview':
        return {
          src: `img/${name}.jpg`,
          width: 280,
          height: 175,
        };

      case 'poster':
        return {
          src: `img/${name}-poster.jpg`,
          width: 218,
          height: 327,
        };

      case 'bg':
        return {
          src: `img/bg-${name}.jpg`,
        };

      default:
        throw new Error(`Unknown ${alt}`);
    }
  };

  const config = getImageConfig();

  return (
    <div className={className}>
      <img
        src={config.src}
        alt={alt}
        {...('width' in config && { width: config.width })}
        {...('height' in config && { height: config.height })}
      />
    </div>
  );
}
