import React, {useState} from "react";
import {useFilterData} from "../hooks/useFilterData";

interface EntitySearchBoxProps {
    term: string,
    onChange: (term: string) => void;
}

const EntityFilterBox: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value && value.trim().length === 0) {

            return;
        }

        onChange(event);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <h4>filter results: </h4>
            <input value={searchTerm} onChange={handleSearch}/>
        </>
    );
};
export default EntityFilterBox;