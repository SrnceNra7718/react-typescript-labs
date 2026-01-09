import type { ComponentPropsWithoutRef } from 'react';

export const Button = (props: ComponentPropsWithoutRef<'button'>) => {
  return (
    <Button
      {...props}
      className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white"
    >
      {props.children}
    </Button>
  );
};
