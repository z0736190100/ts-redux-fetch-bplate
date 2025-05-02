import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import {API_URL} from "../../api_configuration/constants";

export const fetchRepos = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_DATA,
    });

    try {
      // todo make it configurable
      const url = API_URL;

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
        type: ActionType.FETCH_DATA_SUCCESS,
        payload: names,
      });

    } catch (err) {
      if (err instanceof Error) {

        dispatch({
          type: ActionType.FETCH_DATA_ERROR,
          payload: true,
        });

      }
    }
  };
};
