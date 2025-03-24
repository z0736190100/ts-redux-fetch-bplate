import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const fetchEntities = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_ENTITIES,
    });

    try {
      // todo make it configurable
      const url = "https://registry.npmjs.org/-/v1/search";

      const { data } = await axios.get(
        url,
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.FETCH_ENTITIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.FETCH_ENTITIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
