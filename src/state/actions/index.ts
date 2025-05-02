import { ActionType } from "../action-types";

interface FetchDataAction {
  type: ActionType.FETCH_DATA;
}

interface FetchDataSuccessAction {
  type: ActionType.FETCH_DATA_SUCCESS;
  payload: string[];
}

interface FetchDataErrorAction {
  type: ActionType.FETCH_DATA_ERROR;
  payload: boolean;
}

export type Action =
  | FetchDataAction
  | FetchDataSuccessAction
  | FetchDataErrorAction;
