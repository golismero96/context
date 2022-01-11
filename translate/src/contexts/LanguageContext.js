import React, { useState,useContext,useMemo ,useReducer} from 'react'

// export default React.createContext('english')
const initialState = {
    language: 'english',
    test: true,
  };
const reducer = (state, action) => {
    switch (action.type) {
      case 'setlang':
        return { ...state, language: action.language };
      case 'setTest':
        return { ...state, test: action.test };
      default:
        throw new Error('unexpected action type');
    }
  };
const Context = React.createContext('english')
export function useLangContext() {
    return useContext(Context)
  }


export const LanguageStore = (props)  => {
    const value = useReducer(reducer, initialState);
    const [language, setLanguage] = useState('english')
    const [test,setTest] = useState(true)
    const onChangeLanguage = (language) => {
      setLanguage(language)
    }
    const memoLang = useMemo(()=>{
        return{
            language:language,
        }
    },[language])
    const memoTest = useMemo(()=>{
        return{
            test:test,
        }
    },[test])
    return (
        <div>
            <Context.Provider value={value}>
                {props.children}
            </Context.Provider>
        </div>
    );
}

export default Context