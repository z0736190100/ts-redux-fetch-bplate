// todo extract to types.ts ??
import React from "react";

type Entity = {
    id: string;
    title: string;
}

interface EntitiesListProps {
    // think of these as of display state identifiers:
    // fixme: success: boolean ??
    loading: boolean;
    error: boolean | null;
    // fixme: should it hold also 'not-authorized' etc. display state?
    // this depends on above display states, must be empty if 403
    // or hold message if 404 or 500 ?
    // fixme: make type as Entity[]
    data: string[];
}

const EntitiesList: React.FC<EntitiesListProps> = ({data, loading, error}) => {

    return (
        <div>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {
                !error &&
                !loading &&
                data.map(
                    (entity) => {
                        return (
                            /*<div key={entity.id}>{entity.title}</div>*/
                            <div key={entity}>{entity}</div>
                        );
                    })
            }
        </div>
    );
};

export default EntitiesList;
