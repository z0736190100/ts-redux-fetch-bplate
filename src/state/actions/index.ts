import { ActionType } from "../action-types";

interface FetchEntitiesAction {
  type: ActionType.FETCH_ENTITIES;
}

interface FetchEntitiesSuccessAction {
  type: ActionType.FETCH_ENTITIES_SUCCESS;
  payload: string[];
}

interface FetchEntitiesErrorAction {
  type: ActionType.FETCH_ENTITIES_ERROR;
  payload: string;
}

export type Action =
  | FetchEntitiesAction
  | FetchEntitiesSuccessAction
  | FetchEntitiesErrorAction;
