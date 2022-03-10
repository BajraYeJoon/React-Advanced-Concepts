import {useEffect }from 'react'

//The custom Hooks is started with use word and only takes the common logic and no render in this case, import the dependency too
function useDocTitle(count) {

 useEffect(() => {
     document.title = `Count ${count}`
 }, [count])
 
}
export default useDocTitle