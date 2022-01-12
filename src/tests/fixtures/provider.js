import React, { useContext, useEffect } from "react";
import { Context } from "../../context/MyContext";




export const MyProvider = ({ children }) => {
    const originalUseContext = useContext;
    const useContextSpy = jest.spyOn(React, 'useContext');
    useContextSpy.mockImplementation(contextType =>
        contextType === Context ? 'context_value' : originalUseContext(contextType)
    );

    useEffect(() => {
        return () => {
            useContextSpy.mockRestore();
        };
    }, [useContextSpy]);

    return children;
};

