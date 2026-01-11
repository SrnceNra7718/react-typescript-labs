import React from 'react';

export const Bonus = () => {
  const [loadingState, setLoadingState] = React.useState<'loading' | 'loaded'>('loading');
  const [color, setColor] =
    React.useState<`rgb(${number}, ${number}, ${number})`>('rgb(255, 0, 0)');

  setLoadingState('loading');
  return (
    <div>
      {loadingState} {color}
    </div>
  );
};
