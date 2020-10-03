import * as Types from "./types";

type DummyState = {
  case: string;
  fieldOne: string;
  fieldTwo: string;
}

const defaultDummyState: DummyState = {
  case: "",
  fieldOne: "",
  fieldTwo: "",
};

type Action = {
  type: string;
  payload: any;
}

export const dummyReducer1 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.DUMMY_CASE_1: return { ...state, case: Types.DUMMY_CASE_1 };
    case Types.DUMMY_CASE_2: return { ...state, case: Types.DUMMY_CASE_2 };
    case Types.DUMMY_CASE_3: return { ...state, case: Types.DUMMY_CASE_3 };
    case Types.DUMMY_CASE_4: return { ...state, case: Types.DUMMY_CASE_4 };
    case Types.DUMMY_CASE_5: return { ...state, case: Types.DUMMY_CASE_5 };
    case Types.DUMMY_CASE_6: return { ...state, case: Types.DUMMY_CASE_6 };
    case Types.DUMMY_CASE_7: return { ...state, case: Types.DUMMY_CASE_7 };
    case Types.DUMMY_CASE_8: return { ...state, case: Types.DUMMY_CASE_8 };
    case Types.DUMMY_CASE_9: return { ...state, case: Types.DUMMY_CASE_9 };
    case Types.DUMMY_CASE_10: return { ...state, case: Types.DUMMY_CASE_10 };
    case Types.DUMMY_CASE_11: return { ...state, case: Types.DUMMY_CASE_11 };
    case Types.DUMMY_CASE_12: return { ...state, case: Types.DUMMY_CASE_12 };
    case Types.DUMMY_CASE_13: return { ...state, case: Types.DUMMY_CASE_13 };
    case Types.DUMMY_CASE_14: return { ...state, case: Types.DUMMY_CASE_14 };
    case Types.DUMMY_CASE_15: return { ...state, case: Types.DUMMY_CASE_15 };
    case Types.DUMMY_CASE_16: return { ...state, case: Types.DUMMY_CASE_16 };
    case Types.DUMMY_CASE_17: return { ...state, case: Types.DUMMY_CASE_17 };
    case Types.DUMMY_CASE_18: return { ...state, case: Types.DUMMY_CASE_18 };
    case Types.DUMMY_CASE_19: return { ...state, case: Types.DUMMY_CASE_19 };
    case Types.DUMMY_CASE_20: return { ...state, case: Types.DUMMY_CASE_20 };
    case Types.DUMMY_CASE_21: return { ...state, case: Types.DUMMY_CASE_21 };
    case Types.DUMMY_CASE_22: return { ...state, case: Types.DUMMY_CASE_22 };
    case Types.DUMMY_CASE_23: return { ...state, case: Types.DUMMY_CASE_23 };
    case Types.DUMMY_CASE_24: return { ...state, case: Types.DUMMY_CASE_24 };
    case Types.DUMMY_CASE_25: return { ...state, case: Types.DUMMY_CASE_25 };
    case Types.DUMMY_CASE_26: return { ...state, case: Types.DUMMY_CASE_26 };
    case Types.DUMMY_CASE_27: return { ...state, case: Types.DUMMY_CASE_27 };
    case Types.DUMMY_CASE_28: return { ...state, case: Types.DUMMY_CASE_28 };
    case Types.DUMMY_CASE_29: return { ...state, case: Types.DUMMY_CASE_29 };
    case Types.DUMMY_CASE_30: return { ...state, case: Types.DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer2 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.SECOND_DUMMY_CASE_1: return { ...state, case: Types.SECOND_DUMMY_CASE_1 };
    case Types.SECOND_DUMMY_CASE_2: return { ...state, case: Types.SECOND_DUMMY_CASE_2 };
    case Types.SECOND_DUMMY_CASE_3: return { ...state, case: Types.SECOND_DUMMY_CASE_3 };
    case Types.SECOND_DUMMY_CASE_4: return { ...state, case: Types.SECOND_DUMMY_CASE_4 };
    case Types.SECOND_DUMMY_CASE_5: return { ...state, case: Types.SECOND_DUMMY_CASE_5 };
    case Types.SECOND_DUMMY_CASE_6: return { ...state, case: Types.SECOND_DUMMY_CASE_6 };
    case Types.SECOND_DUMMY_CASE_7: return { ...state, case: Types.SECOND_DUMMY_CASE_7 };
    case Types.SECOND_DUMMY_CASE_8: return { ...state, case: Types.SECOND_DUMMY_CASE_8 };
    case Types.SECOND_DUMMY_CASE_9: return { ...state, case: Types.SECOND_DUMMY_CASE_9 };
    case Types.SECOND_DUMMY_CASE_10: return { ...state, case: Types.SECOND_DUMMY_CASE_10 };
    case Types.SECOND_DUMMY_CASE_11: return { ...state, case: Types.SECOND_DUMMY_CASE_11 };
    case Types.SECOND_DUMMY_CASE_12: return { ...state, case: Types.SECOND_DUMMY_CASE_12 };
    case Types.SECOND_DUMMY_CASE_13: return { ...state, case: Types.SECOND_DUMMY_CASE_13 };
    case Types.SECOND_DUMMY_CASE_14: return { ...state, case: Types.SECOND_DUMMY_CASE_14 };
    case Types.SECOND_DUMMY_CASE_15: return { ...state, case: Types.SECOND_DUMMY_CASE_15 };
    case Types.SECOND_DUMMY_CASE_16: return { ...state, case: Types.SECOND_DUMMY_CASE_16 };
    case Types.SECOND_DUMMY_CASE_17: return { ...state, case: Types.SECOND_DUMMY_CASE_17 };
    case Types.SECOND_DUMMY_CASE_18: return { ...state, case: Types.SECOND_DUMMY_CASE_18 };
    case Types.SECOND_DUMMY_CASE_19: return { ...state, case: Types.SECOND_DUMMY_CASE_19 };
    case Types.SECOND_DUMMY_CASE_20: return { ...state, case: Types.SECOND_DUMMY_CASE_20 };
    case Types.SECOND_DUMMY_CASE_21: return { ...state, case: Types.SECOND_DUMMY_CASE_21 };
    case Types.SECOND_DUMMY_CASE_22: return { ...state, case: Types.SECOND_DUMMY_CASE_22 };
    case Types.SECOND_DUMMY_CASE_23: return { ...state, case: Types.SECOND_DUMMY_CASE_23 };
    case Types.SECOND_DUMMY_CASE_24: return { ...state, case: Types.SECOND_DUMMY_CASE_24 };
    case Types.SECOND_DUMMY_CASE_25: return { ...state, case: Types.SECOND_DUMMY_CASE_25 };
    case Types.SECOND_DUMMY_CASE_26: return { ...state, case: Types.SECOND_DUMMY_CASE_26 };
    case Types.SECOND_DUMMY_CASE_27: return { ...state, case: Types.SECOND_DUMMY_CASE_27 };
    case Types.SECOND_DUMMY_CASE_28: return { ...state, case: Types.SECOND_DUMMY_CASE_28 };
    case Types.SECOND_DUMMY_CASE_29: return { ...state, case: Types.SECOND_DUMMY_CASE_29 };
    case Types.SECOND_DUMMY_CASE_30: return { ...state, case: Types.SECOND_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer3 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.THIRD_DUMMY_CASE_1: return { ...state, case: Types.THIRD_DUMMY_CASE_1 };
    case Types.THIRD_DUMMY_CASE_2: return { ...state, case: Types.THIRD_DUMMY_CASE_2 };
    case Types.THIRD_DUMMY_CASE_3: return { ...state, case: Types.THIRD_DUMMY_CASE_3 };
    case Types.THIRD_DUMMY_CASE_4: return { ...state, case: Types.THIRD_DUMMY_CASE_4 };
    case Types.THIRD_DUMMY_CASE_5: return { ...state, case: Types.THIRD_DUMMY_CASE_5 };
    case Types.THIRD_DUMMY_CASE_6: return { ...state, case: Types.THIRD_DUMMY_CASE_6 };
    case Types.THIRD_DUMMY_CASE_7: return { ...state, case: Types.THIRD_DUMMY_CASE_7 };
    case Types.THIRD_DUMMY_CASE_8: return { ...state, case: Types.THIRD_DUMMY_CASE_8 };
    case Types.THIRD_DUMMY_CASE_9: return { ...state, case: Types.THIRD_DUMMY_CASE_9 };
    case Types.THIRD_DUMMY_CASE_10: return { ...state, case: Types.THIRD_DUMMY_CASE_10 };
    case Types.THIRD_DUMMY_CASE_11: return { ...state, case: Types.THIRD_DUMMY_CASE_11 };
    case Types.THIRD_DUMMY_CASE_12: return { ...state, case: Types.THIRD_DUMMY_CASE_12 };
    case Types.THIRD_DUMMY_CASE_13: return { ...state, case: Types.THIRD_DUMMY_CASE_13 };
    case Types.THIRD_DUMMY_CASE_14: return { ...state, case: Types.THIRD_DUMMY_CASE_14 };
    case Types.THIRD_DUMMY_CASE_15: return { ...state, case: Types.THIRD_DUMMY_CASE_15 };
    case Types.THIRD_DUMMY_CASE_16: return { ...state, case: Types.THIRD_DUMMY_CASE_16 };
    case Types.THIRD_DUMMY_CASE_17: return { ...state, case: Types.THIRD_DUMMY_CASE_17 };
    case Types.THIRD_DUMMY_CASE_18: return { ...state, case: Types.THIRD_DUMMY_CASE_18 };
    case Types.THIRD_DUMMY_CASE_19: return { ...state, case: Types.THIRD_DUMMY_CASE_19 };
    case Types.THIRD_DUMMY_CASE_20: return { ...state, case: Types.THIRD_DUMMY_CASE_20 };
    case Types.THIRD_DUMMY_CASE_21: return { ...state, case: Types.THIRD_DUMMY_CASE_21 };
    case Types.THIRD_DUMMY_CASE_22: return { ...state, case: Types.THIRD_DUMMY_CASE_22 };
    case Types.THIRD_DUMMY_CASE_23: return { ...state, case: Types.THIRD_DUMMY_CASE_23 };
    case Types.THIRD_DUMMY_CASE_24: return { ...state, case: Types.THIRD_DUMMY_CASE_24 };
    case Types.THIRD_DUMMY_CASE_25: return { ...state, case: Types.THIRD_DUMMY_CASE_25 };
    case Types.THIRD_DUMMY_CASE_26: return { ...state, case: Types.THIRD_DUMMY_CASE_26 };
    case Types.THIRD_DUMMY_CASE_27: return { ...state, case: Types.THIRD_DUMMY_CASE_27 };
    case Types.THIRD_DUMMY_CASE_28: return { ...state, case: Types.THIRD_DUMMY_CASE_28 };
    case Types.THIRD_DUMMY_CASE_29: return { ...state, case: Types.THIRD_DUMMY_CASE_29 };
    case Types.THIRD_DUMMY_CASE_30: return { ...state, case: Types.THIRD_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer4 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.FOURTH_DUMMY_CASE_1: return { ...state, case: Types.FOURTH_DUMMY_CASE_1 };
    case Types.FOURTH_DUMMY_CASE_2: return { ...state, case: Types.FOURTH_DUMMY_CASE_2 };
    case Types.FOURTH_DUMMY_CASE_3: return { ...state, case: Types.FOURTH_DUMMY_CASE_3 };
    case Types.FOURTH_DUMMY_CASE_4: return { ...state, case: Types.FOURTH_DUMMY_CASE_4 };
    case Types.FOURTH_DUMMY_CASE_5: return { ...state, case: Types.FOURTH_DUMMY_CASE_5 };
    case Types.FOURTH_DUMMY_CASE_6: return { ...state, case: Types.FOURTH_DUMMY_CASE_6 };
    case Types.FOURTH_DUMMY_CASE_7: return { ...state, case: Types.FOURTH_DUMMY_CASE_7 };
    case Types.FOURTH_DUMMY_CASE_8: return { ...state, case: Types.FOURTH_DUMMY_CASE_8 };
    case Types.FOURTH_DUMMY_CASE_9: return { ...state, case: Types.FOURTH_DUMMY_CASE_9 };
    case Types.FOURTH_DUMMY_CASE_10: return { ...state, case: Types.FOURTH_DUMMY_CASE_10 };
    case Types.FOURTH_DUMMY_CASE_11: return { ...state, case: Types.FOURTH_DUMMY_CASE_11 };
    case Types.FOURTH_DUMMY_CASE_12: return { ...state, case: Types.FOURTH_DUMMY_CASE_12 };
    case Types.FOURTH_DUMMY_CASE_13: return { ...state, case: Types.FOURTH_DUMMY_CASE_13 };
    case Types.FOURTH_DUMMY_CASE_14: return { ...state, case: Types.FOURTH_DUMMY_CASE_14 };
    case Types.FOURTH_DUMMY_CASE_15: return { ...state, case: Types.FOURTH_DUMMY_CASE_15 };
    case Types.FOURTH_DUMMY_CASE_16: return { ...state, case: Types.FOURTH_DUMMY_CASE_16 };
    case Types.FOURTH_DUMMY_CASE_17: return { ...state, case: Types.FOURTH_DUMMY_CASE_17 };
    case Types.FOURTH_DUMMY_CASE_18: return { ...state, case: Types.FOURTH_DUMMY_CASE_18 };
    case Types.FOURTH_DUMMY_CASE_19: return { ...state, case: Types.FOURTH_DUMMY_CASE_19 };
    case Types.FOURTH_DUMMY_CASE_20: return { ...state, case: Types.FOURTH_DUMMY_CASE_20 };
    case Types.FOURTH_DUMMY_CASE_21: return { ...state, case: Types.FOURTH_DUMMY_CASE_21 };
    case Types.FOURTH_DUMMY_CASE_22: return { ...state, case: Types.FOURTH_DUMMY_CASE_22 };
    case Types.FOURTH_DUMMY_CASE_23: return { ...state, case: Types.FOURTH_DUMMY_CASE_23 };
    case Types.FOURTH_DUMMY_CASE_24: return { ...state, case: Types.FOURTH_DUMMY_CASE_24 };
    case Types.FOURTH_DUMMY_CASE_25: return { ...state, case: Types.FOURTH_DUMMY_CASE_25 };
    case Types.FOURTH_DUMMY_CASE_26: return { ...state, case: Types.FOURTH_DUMMY_CASE_26 };
    case Types.FOURTH_DUMMY_CASE_27: return { ...state, case: Types.FOURTH_DUMMY_CASE_27 };
    case Types.FOURTH_DUMMY_CASE_28: return { ...state, case: Types.FOURTH_DUMMY_CASE_28 };
    case Types.FOURTH_DUMMY_CASE_29: return { ...state, case: Types.FOURTH_DUMMY_CASE_29 };
    case Types.FOURTH_DUMMY_CASE_30: return { ...state, case: Types.FOURTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer5 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.FIFTH_DUMMY_CASE_1: return { ...state, case: Types.FIFTH_DUMMY_CASE_1 };
    case Types.FIFTH_DUMMY_CASE_2: return { ...state, case: Types.FIFTH_DUMMY_CASE_2 };
    case Types.FIFTH_DUMMY_CASE_3: return { ...state, case: Types.FIFTH_DUMMY_CASE_3 };
    case Types.FIFTH_DUMMY_CASE_4: return { ...state, case: Types.FIFTH_DUMMY_CASE_4 };
    case Types.FIFTH_DUMMY_CASE_5: return { ...state, case: Types.FIFTH_DUMMY_CASE_5 };
    case Types.FIFTH_DUMMY_CASE_6: return { ...state, case: Types.FIFTH_DUMMY_CASE_6 };
    case Types.FIFTH_DUMMY_CASE_7: return { ...state, case: Types.FIFTH_DUMMY_CASE_7 };
    case Types.FIFTH_DUMMY_CASE_8: return { ...state, case: Types.FIFTH_DUMMY_CASE_8 };
    case Types.FIFTH_DUMMY_CASE_9: return { ...state, case: Types.FIFTH_DUMMY_CASE_9 };
    case Types.FIFTH_DUMMY_CASE_10: return { ...state, case: Types.FIFTH_DUMMY_CASE_10 };
    case Types.FIFTH_DUMMY_CASE_11: return { ...state, case: Types.FIFTH_DUMMY_CASE_11 };
    case Types.FIFTH_DUMMY_CASE_12: return { ...state, case: Types.FIFTH_DUMMY_CASE_12 };
    case Types.FIFTH_DUMMY_CASE_13: return { ...state, case: Types.FIFTH_DUMMY_CASE_13 };
    case Types.FIFTH_DUMMY_CASE_14: return { ...state, case: Types.FIFTH_DUMMY_CASE_14 };
    case Types.FIFTH_DUMMY_CASE_15: return { ...state, case: Types.FIFTH_DUMMY_CASE_15 };
    case Types.FIFTH_DUMMY_CASE_16: return { ...state, case: Types.FIFTH_DUMMY_CASE_16 };
    case Types.FIFTH_DUMMY_CASE_17: return { ...state, case: Types.FIFTH_DUMMY_CASE_17 };
    case Types.FIFTH_DUMMY_CASE_18: return { ...state, case: Types.FIFTH_DUMMY_CASE_18 };
    case Types.FIFTH_DUMMY_CASE_19: return { ...state, case: Types.FIFTH_DUMMY_CASE_19 };
    case Types.FIFTH_DUMMY_CASE_20: return { ...state, case: Types.FIFTH_DUMMY_CASE_20 };
    case Types.FIFTH_DUMMY_CASE_21: return { ...state, case: Types.FIFTH_DUMMY_CASE_21 };
    case Types.FIFTH_DUMMY_CASE_22: return { ...state, case: Types.FIFTH_DUMMY_CASE_22 };
    case Types.FIFTH_DUMMY_CASE_23: return { ...state, case: Types.FIFTH_DUMMY_CASE_23 };
    case Types.FIFTH_DUMMY_CASE_24: return { ...state, case: Types.FIFTH_DUMMY_CASE_24 };
    case Types.FIFTH_DUMMY_CASE_25: return { ...state, case: Types.FIFTH_DUMMY_CASE_25 };
    case Types.FIFTH_DUMMY_CASE_26: return { ...state, case: Types.FIFTH_DUMMY_CASE_26 };
    case Types.FIFTH_DUMMY_CASE_27: return { ...state, case: Types.FIFTH_DUMMY_CASE_27 };
    case Types.FIFTH_DUMMY_CASE_28: return { ...state, case: Types.FIFTH_DUMMY_CASE_28 };
    case Types.FIFTH_DUMMY_CASE_29: return { ...state, case: Types.FIFTH_DUMMY_CASE_29 };
    case Types.FIFTH_DUMMY_CASE_30: return { ...state, case: Types.FIFTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer6 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.SIXTH_DUMMY_CASE_1: return { ...state, case: Types.SIXTH_DUMMY_CASE_1 };
    case Types.SIXTH_DUMMY_CASE_2: return { ...state, case: Types.SIXTH_DUMMY_CASE_2 };
    case Types.SIXTH_DUMMY_CASE_3: return { ...state, case: Types.SIXTH_DUMMY_CASE_3 };
    case Types.SIXTH_DUMMY_CASE_4: return { ...state, case: Types.SIXTH_DUMMY_CASE_4 };
    case Types.SIXTH_DUMMY_CASE_5: return { ...state, case: Types.SIXTH_DUMMY_CASE_5 };
    case Types.SIXTH_DUMMY_CASE_6: return { ...state, case: Types.SIXTH_DUMMY_CASE_6 };
    case Types.SIXTH_DUMMY_CASE_7: return { ...state, case: Types.SIXTH_DUMMY_CASE_7 };
    case Types.SIXTH_DUMMY_CASE_8: return { ...state, case: Types.SIXTH_DUMMY_CASE_8 };
    case Types.SIXTH_DUMMY_CASE_9: return { ...state, case: Types.SIXTH_DUMMY_CASE_9 };
    case Types.SIXTH_DUMMY_CASE_10: return { ...state, case: Types.SIXTH_DUMMY_CASE_10 };
    case Types.SIXTH_DUMMY_CASE_11: return { ...state, case: Types.SIXTH_DUMMY_CASE_11 };
    case Types.SIXTH_DUMMY_CASE_12: return { ...state, case: Types.SIXTH_DUMMY_CASE_12 };
    case Types.SIXTH_DUMMY_CASE_13: return { ...state, case: Types.SIXTH_DUMMY_CASE_13 };
    case Types.SIXTH_DUMMY_CASE_14: return { ...state, case: Types.SIXTH_DUMMY_CASE_14 };
    case Types.SIXTH_DUMMY_CASE_15: return { ...state, case: Types.SIXTH_DUMMY_CASE_15 };
    case Types.SIXTH_DUMMY_CASE_16: return { ...state, case: Types.SIXTH_DUMMY_CASE_16 };
    case Types.SIXTH_DUMMY_CASE_17: return { ...state, case: Types.SIXTH_DUMMY_CASE_17 };
    case Types.SIXTH_DUMMY_CASE_18: return { ...state, case: Types.SIXTH_DUMMY_CASE_18 };
    case Types.SIXTH_DUMMY_CASE_19: return { ...state, case: Types.SIXTH_DUMMY_CASE_19 };
    case Types.SIXTH_DUMMY_CASE_20: return { ...state, case: Types.SIXTH_DUMMY_CASE_20 };
    case Types.SIXTH_DUMMY_CASE_21: return { ...state, case: Types.SIXTH_DUMMY_CASE_21 };
    case Types.SIXTH_DUMMY_CASE_22: return { ...state, case: Types.SIXTH_DUMMY_CASE_22 };
    case Types.SIXTH_DUMMY_CASE_23: return { ...state, case: Types.SIXTH_DUMMY_CASE_23 };
    case Types.SIXTH_DUMMY_CASE_24: return { ...state, case: Types.SIXTH_DUMMY_CASE_24 };
    case Types.SIXTH_DUMMY_CASE_25: return { ...state, case: Types.SIXTH_DUMMY_CASE_25 };
    case Types.SIXTH_DUMMY_CASE_26: return { ...state, case: Types.SIXTH_DUMMY_CASE_26 };
    case Types.SIXTH_DUMMY_CASE_27: return { ...state, case: Types.SIXTH_DUMMY_CASE_27 };
    case Types.SIXTH_DUMMY_CASE_28: return { ...state, case: Types.SIXTH_DUMMY_CASE_28 };
    case Types.SIXTH_DUMMY_CASE_29: return { ...state, case: Types.SIXTH_DUMMY_CASE_29 };
    case Types.SIXTH_DUMMY_CASE_30: return { ...state, case: Types.SIXTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer7 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.SEVENTH_DUMMY_CASE_1: return { ...state, case: Types.SEVENTH_DUMMY_CASE_1 };
    case Types.SEVENTH_DUMMY_CASE_2: return { ...state, case: Types.SEVENTH_DUMMY_CASE_2 };
    case Types.SEVENTH_DUMMY_CASE_3: return { ...state, case: Types.SEVENTH_DUMMY_CASE_3 };
    case Types.SEVENTH_DUMMY_CASE_4: return { ...state, case: Types.SEVENTH_DUMMY_CASE_4 };
    case Types.SEVENTH_DUMMY_CASE_5: return { ...state, case: Types.SEVENTH_DUMMY_CASE_5 };
    case Types.SEVENTH_DUMMY_CASE_6: return { ...state, case: Types.SEVENTH_DUMMY_CASE_6 };
    case Types.SEVENTH_DUMMY_CASE_7: return { ...state, case: Types.SEVENTH_DUMMY_CASE_7 };
    case Types.SEVENTH_DUMMY_CASE_8: return { ...state, case: Types.SEVENTH_DUMMY_CASE_8 };
    case Types.SEVENTH_DUMMY_CASE_9: return { ...state, case: Types.SEVENTH_DUMMY_CASE_9 };
    case Types.SEVENTH_DUMMY_CASE_10: return { ...state, case: Types.SEVENTH_DUMMY_CASE_10 };
    case Types.SEVENTH_DUMMY_CASE_11: return { ...state, case: Types.SEVENTH_DUMMY_CASE_11 };
    case Types.SEVENTH_DUMMY_CASE_12: return { ...state, case: Types.SEVENTH_DUMMY_CASE_12 };
    case Types.SEVENTH_DUMMY_CASE_13: return { ...state, case: Types.SEVENTH_DUMMY_CASE_13 };
    case Types.SEVENTH_DUMMY_CASE_14: return { ...state, case: Types.SEVENTH_DUMMY_CASE_14 };
    case Types.SEVENTH_DUMMY_CASE_15: return { ...state, case: Types.SEVENTH_DUMMY_CASE_15 };
    case Types.SEVENTH_DUMMY_CASE_16: return { ...state, case: Types.SEVENTH_DUMMY_CASE_16 };
    case Types.SEVENTH_DUMMY_CASE_17: return { ...state, case: Types.SEVENTH_DUMMY_CASE_17 };
    case Types.SEVENTH_DUMMY_CASE_18: return { ...state, case: Types.SEVENTH_DUMMY_CASE_18 };
    case Types.SEVENTH_DUMMY_CASE_19: return { ...state, case: Types.SEVENTH_DUMMY_CASE_19 };
    case Types.SEVENTH_DUMMY_CASE_20: return { ...state, case: Types.SEVENTH_DUMMY_CASE_20 };
    case Types.SEVENTH_DUMMY_CASE_21: return { ...state, case: Types.SEVENTH_DUMMY_CASE_21 };
    case Types.SEVENTH_DUMMY_CASE_22: return { ...state, case: Types.SEVENTH_DUMMY_CASE_22 };
    case Types.SEVENTH_DUMMY_CASE_23: return { ...state, case: Types.SEVENTH_DUMMY_CASE_23 };
    case Types.SEVENTH_DUMMY_CASE_24: return { ...state, case: Types.SEVENTH_DUMMY_CASE_24 };
    case Types.SEVENTH_DUMMY_CASE_25: return { ...state, case: Types.SEVENTH_DUMMY_CASE_25 };
    case Types.SEVENTH_DUMMY_CASE_26: return { ...state, case: Types.SEVENTH_DUMMY_CASE_26 };
    case Types.SEVENTH_DUMMY_CASE_27: return { ...state, case: Types.SEVENTH_DUMMY_CASE_27 };
    case Types.SEVENTH_DUMMY_CASE_28: return { ...state, case: Types.SEVENTH_DUMMY_CASE_28 };
    case Types.SEVENTH_DUMMY_CASE_29: return { ...state, case: Types.SEVENTH_DUMMY_CASE_29 };
    case Types.SEVENTH_DUMMY_CASE_30: return { ...state, case: Types.SEVENTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer8 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.EIGHT_DUMMY_CASE_1: return { ...state, case: Types.EIGHT_DUMMY_CASE_1 };
    case Types.EIGHT_DUMMY_CASE_2: return { ...state, case: Types.EIGHT_DUMMY_CASE_2 };
    case Types.EIGHT_DUMMY_CASE_3: return { ...state, case: Types.EIGHT_DUMMY_CASE_3 };
    case Types.EIGHT_DUMMY_CASE_4: return { ...state, case: Types.EIGHT_DUMMY_CASE_4 };
    case Types.EIGHT_DUMMY_CASE_5: return { ...state, case: Types.EIGHT_DUMMY_CASE_5 };
    case Types.EIGHT_DUMMY_CASE_6: return { ...state, case: Types.EIGHT_DUMMY_CASE_6 };
    case Types.EIGHT_DUMMY_CASE_7: return { ...state, case: Types.EIGHT_DUMMY_CASE_7 };
    case Types.EIGHT_DUMMY_CASE_8: return { ...state, case: Types.EIGHT_DUMMY_CASE_8 };
    case Types.EIGHT_DUMMY_CASE_9: return { ...state, case: Types.EIGHT_DUMMY_CASE_9 };
    case Types.EIGHT_DUMMY_CASE_10: return { ...state, case: Types.EIGHT_DUMMY_CASE_10 };
    case Types.EIGHT_DUMMY_CASE_11: return { ...state, case: Types.EIGHT_DUMMY_CASE_11 };
    case Types.EIGHT_DUMMY_CASE_12: return { ...state, case: Types.EIGHT_DUMMY_CASE_12 };
    case Types.EIGHT_DUMMY_CASE_13: return { ...state, case: Types.EIGHT_DUMMY_CASE_13 };
    case Types.EIGHT_DUMMY_CASE_14: return { ...state, case: Types.EIGHT_DUMMY_CASE_14 };
    case Types.EIGHT_DUMMY_CASE_15: return { ...state, case: Types.EIGHT_DUMMY_CASE_15 };
    case Types.EIGHT_DUMMY_CASE_16: return { ...state, case: Types.EIGHT_DUMMY_CASE_16 };
    case Types.EIGHT_DUMMY_CASE_17: return { ...state, case: Types.EIGHT_DUMMY_CASE_17 };
    case Types.EIGHT_DUMMY_CASE_18: return { ...state, case: Types.EIGHT_DUMMY_CASE_18 };
    case Types.EIGHT_DUMMY_CASE_19: return { ...state, case: Types.EIGHT_DUMMY_CASE_19 };
    case Types.EIGHT_DUMMY_CASE_20: return { ...state, case: Types.EIGHT_DUMMY_CASE_20 };
    case Types.EIGHT_DUMMY_CASE_21: return { ...state, case: Types.EIGHT_DUMMY_CASE_21 };
    case Types.EIGHT_DUMMY_CASE_22: return { ...state, case: Types.EIGHT_DUMMY_CASE_22 };
    case Types.EIGHT_DUMMY_CASE_23: return { ...state, case: Types.EIGHT_DUMMY_CASE_23 };
    case Types.EIGHT_DUMMY_CASE_24: return { ...state, case: Types.EIGHT_DUMMY_CASE_24 };
    case Types.EIGHT_DUMMY_CASE_25: return { ...state, case: Types.EIGHT_DUMMY_CASE_25 };
    case Types.EIGHT_DUMMY_CASE_26: return { ...state, case: Types.EIGHT_DUMMY_CASE_26 };
    case Types.EIGHT_DUMMY_CASE_27: return { ...state, case: Types.EIGHT_DUMMY_CASE_27 };
    case Types.EIGHT_DUMMY_CASE_28: return { ...state, case: Types.EIGHT_DUMMY_CASE_28 };
    case Types.EIGHT_DUMMY_CASE_29: return { ...state, case: Types.EIGHT_DUMMY_CASE_29 };
    case Types.EIGHT_DUMMY_CASE_30: return { ...state, case: Types.EIGHT_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer9 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.NINTH_DUMMY_CASE_1: return { ...state, case: Types.NINTH_DUMMY_CASE_1 };
    case Types.NINTH_DUMMY_CASE_2: return { ...state, case: Types.NINTH_DUMMY_CASE_2 };
    case Types.NINTH_DUMMY_CASE_3: return { ...state, case: Types.NINTH_DUMMY_CASE_3 };
    case Types.NINTH_DUMMY_CASE_4: return { ...state, case: Types.NINTH_DUMMY_CASE_4 };
    case Types.NINTH_DUMMY_CASE_5: return { ...state, case: Types.NINTH_DUMMY_CASE_5 };
    case Types.NINTH_DUMMY_CASE_6: return { ...state, case: Types.NINTH_DUMMY_CASE_6 };
    case Types.NINTH_DUMMY_CASE_7: return { ...state, case: Types.NINTH_DUMMY_CASE_7 };
    case Types.NINTH_DUMMY_CASE_8: return { ...state, case: Types.NINTH_DUMMY_CASE_8 };
    case Types.NINTH_DUMMY_CASE_9: return { ...state, case: Types.NINTH_DUMMY_CASE_9 };
    case Types.NINTH_DUMMY_CASE_10: return { ...state, case: Types.NINTH_DUMMY_CASE_10 };
    case Types.NINTH_DUMMY_CASE_11: return { ...state, case: Types.NINTH_DUMMY_CASE_11 };
    case Types.NINTH_DUMMY_CASE_12: return { ...state, case: Types.NINTH_DUMMY_CASE_12 };
    case Types.NINTH_DUMMY_CASE_13: return { ...state, case: Types.NINTH_DUMMY_CASE_13 };
    case Types.NINTH_DUMMY_CASE_14: return { ...state, case: Types.NINTH_DUMMY_CASE_14 };
    case Types.NINTH_DUMMY_CASE_15: return { ...state, case: Types.NINTH_DUMMY_CASE_15 };
    case Types.NINTH_DUMMY_CASE_16: return { ...state, case: Types.NINTH_DUMMY_CASE_16 };
    case Types.NINTH_DUMMY_CASE_17: return { ...state, case: Types.NINTH_DUMMY_CASE_17 };
    case Types.NINTH_DUMMY_CASE_18: return { ...state, case: Types.NINTH_DUMMY_CASE_18 };
    case Types.NINTH_DUMMY_CASE_19: return { ...state, case: Types.NINTH_DUMMY_CASE_19 };
    case Types.NINTH_DUMMY_CASE_20: return { ...state, case: Types.NINTH_DUMMY_CASE_20 };
    case Types.NINTH_DUMMY_CASE_21: return { ...state, case: Types.NINTH_DUMMY_CASE_21 };
    case Types.NINTH_DUMMY_CASE_22: return { ...state, case: Types.NINTH_DUMMY_CASE_22 };
    case Types.NINTH_DUMMY_CASE_23: return { ...state, case: Types.NINTH_DUMMY_CASE_23 };
    case Types.NINTH_DUMMY_CASE_24: return { ...state, case: Types.NINTH_DUMMY_CASE_24 };
    case Types.NINTH_DUMMY_CASE_25: return { ...state, case: Types.NINTH_DUMMY_CASE_25 };
    case Types.NINTH_DUMMY_CASE_26: return { ...state, case: Types.NINTH_DUMMY_CASE_26 };
    case Types.NINTH_DUMMY_CASE_27: return { ...state, case: Types.NINTH_DUMMY_CASE_27 };
    case Types.NINTH_DUMMY_CASE_28: return { ...state, case: Types.NINTH_DUMMY_CASE_28 };
    case Types.NINTH_DUMMY_CASE_29: return { ...state, case: Types.NINTH_DUMMY_CASE_29 };
    case Types.NINTH_DUMMY_CASE_30: return { ...state, case: Types.FIFTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};

export const dummyReducer10 = (state = defaultDummyState, action: Action): DummyState => {
  switch (action.type) {
    case Types.TENTH_DUMMY_CASE_1: return { ...state, case: Types.TENTH_DUMMY_CASE_1 };
    case Types.TENTH_DUMMY_CASE_2: return { ...state, case: Types.TENTH_DUMMY_CASE_2 };
    case Types.TENTH_DUMMY_CASE_3: return { ...state, case: Types.TENTH_DUMMY_CASE_3 };
    case Types.TENTH_DUMMY_CASE_4: return { ...state, case: Types.TENTH_DUMMY_CASE_4 };
    case Types.TENTH_DUMMY_CASE_5: return { ...state, case: Types.TENTH_DUMMY_CASE_5 };
    case Types.TENTH_DUMMY_CASE_6: return { ...state, case: Types.TENTH_DUMMY_CASE_6 };
    case Types.TENTH_DUMMY_CASE_7: return { ...state, case: Types.TENTH_DUMMY_CASE_7 };
    case Types.TENTH_DUMMY_CASE_8: return { ...state, case: Types.TENTH_DUMMY_CASE_8 };
    case Types.TENTH_DUMMY_CASE_9: return { ...state, case: Types.TENTH_DUMMY_CASE_9 };
    case Types.TENTH_DUMMY_CASE_10: return { ...state, case: Types.TENTH_DUMMY_CASE_10 };
    case Types.TENTH_DUMMY_CASE_11: return { ...state, case: Types.TENTH_DUMMY_CASE_11 };
    case Types.TENTH_DUMMY_CASE_12: return { ...state, case: Types.TENTH_DUMMY_CASE_12 };
    case Types.TENTH_DUMMY_CASE_13: return { ...state, case: Types.TENTH_DUMMY_CASE_13 };
    case Types.TENTH_DUMMY_CASE_14: return { ...state, case: Types.TENTH_DUMMY_CASE_14 };
    case Types.TENTH_DUMMY_CASE_15: return { ...state, case: Types.TENTH_DUMMY_CASE_15 };
    case Types.TENTH_DUMMY_CASE_16: return { ...state, case: Types.TENTH_DUMMY_CASE_16 };
    case Types.TENTH_DUMMY_CASE_17: return { ...state, case: Types.TENTH_DUMMY_CASE_17 };
    case Types.TENTH_DUMMY_CASE_18: return { ...state, case: Types.TENTH_DUMMY_CASE_18 };
    case Types.TENTH_DUMMY_CASE_19: return { ...state, case: Types.TENTH_DUMMY_CASE_19 };
    case Types.TENTH_DUMMY_CASE_20: return { ...state, case: Types.TENTH_DUMMY_CASE_20 };
    case Types.TENTH_DUMMY_CASE_21: return { ...state, case: Types.TENTH_DUMMY_CASE_21 };
    case Types.TENTH_DUMMY_CASE_22: return { ...state, case: Types.TENTH_DUMMY_CASE_22 };
    case Types.TENTH_DUMMY_CASE_23: return { ...state, case: Types.TENTH_DUMMY_CASE_23 };
    case Types.TENTH_DUMMY_CASE_24: return { ...state, case: Types.TENTH_DUMMY_CASE_24 };
    case Types.TENTH_DUMMY_CASE_25: return { ...state, case: Types.TENTH_DUMMY_CASE_25 };
    case Types.TENTH_DUMMY_CASE_26: return { ...state, case: Types.TENTH_DUMMY_CASE_26 };
    case Types.TENTH_DUMMY_CASE_27: return { ...state, case: Types.TENTH_DUMMY_CASE_27 };
    case Types.TENTH_DUMMY_CASE_28: return { ...state, case: Types.TENTH_DUMMY_CASE_28 };
    case Types.TENTH_DUMMY_CASE_29: return { ...state, case: Types.TENTH_DUMMY_CASE_29 };
    case Types.TENTH_DUMMY_CASE_30: return { ...state, case: Types.TENTH_DUMMY_CASE_30 };
    default:
      return state;
  }
};
