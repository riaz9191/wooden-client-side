import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Wooden | ${title}`;
    },[title])
}
export default useTitle;