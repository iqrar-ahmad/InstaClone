import pixaby from "../api/pixaby"
import { useQuery } from 'react-query'

export const UseFetchImages=(searchItem)=>{
    const API_KEY="31804244-56490e616c8217afbe11f3dfc";
    const URL=`?key=31804244-56490e616c8217afbe11f3dfc&q=${encodeURIComponent(`${searchItem}`)}`
const queryImages=useQuery(["images",searchItem],async()=>{
   const res=await pixaby.get(URL)
   return await res.data
    
})
return queryImages
}

