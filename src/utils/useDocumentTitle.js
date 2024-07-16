// useDocumentTitle.js
import { useRef, useEffect } from 'react'

function useDocumentTitle(inputTitle, prevailOnUnmount = false) {

    const title = 'Sapere AI | ' + inputTitle;
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => () => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [prevailOnUnmount])
}

export default useDocumentTitle