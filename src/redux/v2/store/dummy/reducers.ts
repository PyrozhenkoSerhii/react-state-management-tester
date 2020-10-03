import * as Types from "./types";

type DummyState = {
  case: string;
}

const defaultDummyState: DummyState = {
  case: "",
};

type Action = {
  type: string;
  payload: any;
}

export const dummyReducer1 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer2 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer3 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer4 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer5 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};
