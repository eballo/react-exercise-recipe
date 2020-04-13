import { useState } from "react";

export default (initState) => {
    const[state, setState] = useState(initState);

    const handleState = e => {
        setState(!state);
    }

    const reset = () => {
        setState(false);
    }

    return [state, handleState, reset];
}