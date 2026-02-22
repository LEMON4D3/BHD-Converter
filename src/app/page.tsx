'use client';

import { convertStringToBinary, convertStringToDecimal, convertStringToHexadecimal } from "@/utils/utils";
import { PageContext, usePageContext } from "../context/pageContext";
import { useEffect, useRef, useState } from "react";

export default function PageContextProvider() {
  const [currentRadix, setCurrentRadix] = useState<number>(1);
  const [textInput, setTextInput] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const value = {
    currentRadix,
    setCurrentRadix,

    textInput,
    setTextInput,

    textareaRef
  }

  return (
    <PageContext.Provider value={value}>
      <main className="flex flex-1 flex-col">
        <div className="py-5 px-5">
          <Header/>
        </div>

        <div className="px-5 pb-5">
          <Body/>
        </div>

        <div>
          <Footer/>
        </div>
      </main>

    </PageContext.Provider>
  );
}


// [ Header ]
function Header() {

  const {currentRadix, setCurrentRadix, setTextInput, textareaRef} = usePageContext();
  
  function buttonClick(radix: number) {
    handleButtonClick({
      nextRadix: radix,
      currentRadix: currentRadix,
      setRadix: setCurrentRadix,
      setTextInput: setTextInput,
      textareaRef: textareaRef
    })
  }

  return (
    <div className="flex flex-row justify-between">
      <h1 className="font-bold text-[30px]">BHD Converter</h1>

      <div className="flex flex-row gap-10 text-[28px] font-semibold">
        <button style={getButtonStyle(1, currentRadix)} onClick={() => buttonClick(1)}>Text</button>
        <button style={getButtonStyle(2, currentRadix)} onClick={() => buttonClick(2)}>Binary</button>
        <button style={getButtonStyle(3, currentRadix)} onClick={() => buttonClick(3)}>Hexadecimal</button>
        <button style={getButtonStyle(4, currentRadix)} onClick={() => buttonClick(4)}>Decimal</button>
      </div>

      <div></div>
    </div>
  )
}

// [ Body ]
function Body() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const {currentRadix, setTextInput, textInput, textareaRef} = usePageContext();

  useEffect(() => {
    console.log("Current Radix: ", currentRadix);
    if(!textareaRef.current) return;

    if (currentRadix == 1) {
      textareaRef.current!.value = textInput;
      setIsDisabled(false);
      return;
    }

    if (currentRadix == 2) {
      const binaryValue = convertStringToBinary(textInput);
      textareaRef.current!.value = binaryValue;
    }

    if (currentRadix == 3) {
      const hexadecimalValue = convertStringToHexadecimal(textInput);
      textareaRef.current!.value = hexadecimalValue;
    }

    if(currentRadix == 4) {
      const decimalValue = convertStringToDecimal(textInput);
      textareaRef.current!.value = decimalValue;
    }

    setIsDisabled(true);
  }, [currentRadix])

  return (
    <div className="flex flex-1">
      <textarea name="TextBody" id="TextBody" ref={textareaRef} className="w-full h-[690px] border rounded-[30px] p-5 text-[20px]" disabled={isDisabled}></textarea>
    </div>
  )
}

// [ Footer ]
function Footer() {

  const {currentRadix, setCurrentRadix, setTextInput, textareaRef} = usePageContext();

  function buttonClick(radix: number) {
    handleButtonClick({
      nextRadix: radix,
      currentRadix: currentRadix,
      setRadix: setCurrentRadix,
      setTextInput: setTextInput,
      textareaRef: textareaRef
    })
  }


  return (
    <div className="flex flex-row justify-center items-center">
      <div className="bg-[#D9D9D9] px-15 py-5 rounded-[46px] flex flex-row gap-15 text-[20px] font-semibold">
        <button className="bg-[#B4B4B4] p-5 rounded-[30px] cursor-pointer" style={getButtonStyle(2, currentRadix)} onClick={() => buttonClick(2)}>Binary</button>
        
        <button className="bg-[#B4B4B4] p-5 rounded-[30px] cursor-pointer" style={getButtonStyle(3, currentRadix)} onClick={() => buttonClick(3)}>Hexadecimal</button>
        <button className="bg-[#B4B4B4] p-5 rounded-[30px] cursor-pointer" style={getButtonStyle(4, currentRadix)} onClick={() => buttonClick(4)}>Decimal</button>
      </div>
    </div>
  )
}


// [ For Buttons Style ]
function getButtonStyle(radix: number, currentRadix: number) {
    if (radix == currentRadix) {
      return { color: '#000000'}
    }
  return { color: '#8D8D8D', cursor: 'pointer'}
}

interface HandleButtonClickValue {
  currentRadix: number
  nextRadix: number;
  setRadix: (radix: number) => void;
  setTextInput: (text: string) => void;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
}

function handleButtonClick(value: HandleButtonClickValue) {
  value.setRadix(value.nextRadix);
  if (value.nextRadix != 1 && value.currentRadix == 1) {
    value.setTextInput(value.textareaRef.current?.value || '');
    console.log("Text Input: ", value.textareaRef.current?.value);
  }
}