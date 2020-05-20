import {useState, useEffect, Dispatch, SetStateAction} from 'react';


//guardando o Session Storage;
type Respose<T> = [T, Dispatch<SetStateAction<T>>]

function useSession<T>(key: string, initialState: T): Respose<T> {
   const [state, setState] = useState(()=>{
      const session = sessionStorage.getItem(key);
      if(session){
          return JSON.parse(session);
      }else{
          return initialState;
      } 
   });

   useEffect(()=>{
     sessionStorage.setItem(key, JSON.stringify(state))
   },[key, state]);

    return [state, setState]
}

export default useSession;