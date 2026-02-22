'use client';
import { createContext, RefObject, useContext, useRef } from 'react';

interface PageContextValue {
        currentRadix: number;
        setCurrentRadix: (radix: number) => void;
        
        textInput: string;
        setTextInput: (text: string) => void;

        textareaRef: RefObject<HTMLTextAreaElement | null>;
}

export const PageContext = createContext<PageContextValue>({
        currentRadix: 1,
        setCurrentRadix: () => {},

        textInput: '',
        setTextInput: () => {},

        textareaRef: undefined
})

export function usePageContext() {
        if (!PageContext) {
                throw new Error("usePageContext must be used within a PageContextProvider");
        }

        return useContext(PageContext);
}