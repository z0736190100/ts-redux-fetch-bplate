import {useFilterData} from "../hooks/useFilterData";

interface FilterDataContainerProps {
    data: any;
}

const FilterDataContainer = () => {

    const {books, term, setTerm} = useFilterData();

    return (
        <div>
            <BooksSearchBox term={term} onSearch={setTerm}/>
            <BookList books={books}/>

            {/*
             <EntityFilterBox/>
            <EntitiesList data={data} loading={loading} error={error}/>
            */}
        </div>
    )
}

export default FilterDataContainer;