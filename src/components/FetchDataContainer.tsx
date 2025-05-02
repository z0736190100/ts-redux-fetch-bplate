import React, {useState} from "react";
import {useActions} from "../hooks/useActions";

const FetchDataContainer: React.FC = () => {

    const [term, setTerm] = useState<string>('');

    const { fetchRepos } = useActions();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchRepos(term);

    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value && value.trim().length === 0) {
            return;
        }

        setTerm(value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={term} onChange={onChange} />
            <button type={"submit"}>Fetch</button>
        </form>
    );
}

export default FetchDataContainer;