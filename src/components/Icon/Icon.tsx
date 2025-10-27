import { ReactElement } from 'react';

type IconProps = {
  viewBox: string;
  sprite: string;
};

function parseViewBox(viewBox: string): { width: number; height: number } {
  const values = viewBox.trim().split(/\s+/);

  if (values.length !== 4) {
    throw new Error('Invalid viewBox format. Expected "x y width height"');
  }

  const width = Number(values[2]);
  const height = Number(values[3]);

  if (isNaN(width) || isNaN(height)) {
    throw new Error('Width and height must be valid numbers');
  }

  return { width, height };
}

export function Icon({ viewBox, sprite }: IconProps): ReactElement {
  const { width, height } = parseViewBox(viewBox);

  return (
    <svg
      viewBox={viewBox}
      width={width}
      height={height}
    >
      <use xlinkHref={`#${sprite}`} />
    </svg>
  );
}
