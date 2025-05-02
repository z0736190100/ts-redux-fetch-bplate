import {useEffect, useState} from "react";

export const useFilterData = () => {
    // !IMPORTANT term, setTerm is first in this order:
    const [term, setTerm] = useState<string>('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const baseUrl = 'http://localhost:8080';

    useEffect(() => {
        const fetchBooks = async (term: string) => {
            setError(false);
            setLoading(true);

            try {
                const res = await axios.get(`${baseUrl}/books?name_like=${term}&_sort=id`);
                setBooks(res.data);

            } catch (e) {
                setError(true);

            } finally {
                setLoading(false);
            }
        };

        fetchBooks(term);
    }, [term]);

    return {
        loading,
        error,
        books,
        setTerm
    }
}