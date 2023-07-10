import { useEffect, useState } from "react";

export const useHttp = apiFn =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      apiFn().then(res => setData(res))
    }, [apiFn])
    return [data, setData]
}