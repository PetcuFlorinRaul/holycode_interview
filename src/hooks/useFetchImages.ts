import { useEffect, useState } from "react";

const useFetchImages = (url: string) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>([]);
    const [error, setError] = useState();

    function refetch() {
        setLoading(true)
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false);
            })
    }

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false);
            })
    }, []) 

    return {
        loading,
        data,
        error,
        refetch
    }

}

export default useFetchImages;