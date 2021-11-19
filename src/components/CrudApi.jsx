import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helpHttp'

const CrudApi = () => {
    const [data, setData] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    let api = helpHttp();
    let url = 'http://localhost:5000/breakfastMenu';

    useEffect(() => {
        api.get(url).then((res) => {
            console.log(res);
            if (!res.err) {
                setData(res)
            } else {
                setData(null)
            }
        });
    }, [])



    return (
        <div>

        </div>
    )
}

export default CrudApi
