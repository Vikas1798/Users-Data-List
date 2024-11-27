import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [state, setState] = useState({
        usersData:[],
        loading:false,
        error:null
    })

    const getData = async (body) => {
        setState((prev) => {
            return{
                ...prev,
                loading:true
            }
        })

        try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('something went wrong...!')
        }
        const json = await response.json();
        setState((prev) => {
            return{
                ...prev,
                usersData:json
            }
        })
        } catch (err) {
            setState((prev) => {
                return{
                    ...prev,
                    error:err.message ?? err
                }
            })
        }
        setState((prev) => {
            return{
                ...prev,
                loading:false
            }
        })
    };

    useEffect(() => {
        getData();
    }, [])
    
    let { usersData, loading, error } = state;
    return { usersData, loading, error };
};

export default useFetch;
