import * as React from "react";

const { createContext, useReducer } = React;

const UPDATE_DATA = "UPDATE_DATA";

interface UpdateActionType {
  type: typeof UPDATE_DATA,
  payload: {
    dataUrl: string;
  }
}
interface IState {
  dataUrl: string;
}

export const updateData = (dataUrl: string): UpdateActionType => ({
  type: UPDATE_DATA,
  payload: {
    dataUrl,
  },
});

const initialState: IState = {
  dataUrl: null,
};

const reducer = (state: IState = initialState, action: UpdateActionType): IState => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        dataUrl: action.payload.dataUrl,
      };
    default:
      return state;
  }
};

type IFrequencyContext = IState & {
  updateData?: (dataUrl: string) => void,
}

const defaultContext: IFrequencyContext = { ...initialState };

export const FrequencyContext = createContext(defaultContext);

export const FrequencyStore = ({ children }: {children: React.ReactNode}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateContextData = (dataUrl: string) => {
    dispatch(updateData(dataUrl));
  };

  return (
    <FrequencyContext.Provider value={{
      ...state,
      updateData: updateContextData,
    }}
    >
      {children}
    </FrequencyContext.Provider>
  );
};
