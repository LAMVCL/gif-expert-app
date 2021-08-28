import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//Los hooks son funciones

export const useFetchGifs = (category) => {
    

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {

        getGifs(category).then( imgs => {

            setTimeout(() =>{
                setState({
                    data: imgs,
                    loading: false,
                })
            }, 3000);

        });

    }, [])

    return state; // {data: [], loading: true}
}
