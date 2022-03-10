import {useState} from 'react'


//Initial is defined for the empty string at the very first 
function useInput(initial) {

    //For the value in input , we create our own initial and setInitial with useState
    //reset button is created to clear the name field and triggered after the alert box is done
    const [value, setValue] = useState(initial)
    const reset = () => {
        setValue(initial) 
    }

    //Bind object is create to create the combination of the value and onchange so that we dont have 
    // to write separate things 

    const bind = {
      value, 
      onChange : e => {
          setValue(e.target.value)
      }
    
    }
    

    return [value, bind ,reset]

}

export default useInput