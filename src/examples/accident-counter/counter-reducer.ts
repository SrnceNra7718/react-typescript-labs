export const initialState = {
  count: 0,
  draftCount: 0,
};

type Action = {
  type: string;
  payload?: unknown;
};

interface IncrementAction extends Action {
  type: 'increment';
}

interface DecrementAction extends Action {
  type: 'decrement';
}

interface SetCountAction extends Action {
  type: 'set-Count';
  payload?: number;
}

export type CounterAction = IncrementAction | DecrementAction | SetCountAction;

// Improvement: Define a proper Action type instead of using 'any'.

export const counterReducer = (state = initialState, action: CounterAction): { count: number } => {
  console.log({ action });
  const { count } = state;

  switch (action.type) {
    case 'increment': {
      const newCount = count + 1;
      return { count: newCount };
    }
    case 'decrement': {
      const newCount = count - 1;
      return { count: newCount };
    }
    case 'set-Count': {
      if (typeof action.payload === 'number') {
        return { count: action.payload };
      }
    }
  }

  // if (action.type === 'increment') {
  //   const newCount = count + 1;
  //   return { count: newCount };
  // }

  // if (action.type === 'decrement') {
  //   const newCount = count - 1;
  //   return { count: newCount };
  // }

  // if (action.type === 'set-Count' && typeof action.payload === 'number') {
  //   return { count: action.payload };
  // }

  return state;
};
