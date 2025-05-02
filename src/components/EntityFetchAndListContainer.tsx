import React from "react";
import EntitiesList from "./EntitiesList";
import EntityFilterBox from "./EntityFilterBox";
import {useTypedSelector} from "../hooks/useTypedSelector";
import FetchDataContainer from "./FetchDataContainer";
import FilterDataContainer from "./FilterDataContainer";


const EntityFetchAndListContainer: React.FC = () => {

    // fixme: do make typed data ??
    const { data, error, loading } = useTypedSelector(
        (state) => state.entities
    );

    return (
        <div>
            <FetchDataContainer />
            <FilterDataContainer />
        </div>
    );
}

export default EntityFetchAndListContainer;