import { CopyBlock } from "react-code-blocks";
import LanguageDropDown from "./LanguageDropDown";
import { code_example } from "../../api/data";
import "./css/library.css";
import React from "react";

export default function CodeSegment() {
  const customTheme = {
    lineNumberColor: "#41403c",
    lineNumberBgColor: "#41403c",
    backgroundColor: "#212121",
    textColor: "#a49c9a",
    keywordColor: "#5185fc",
    stringColor: "#395db0",
    commentColor: "#41403c",
    functionColor: "#c12c0d",
    builtinFunctionColor: "#c12c0d",
    methodColor: "#c12c0d",
    variableColor: "#c12c0d",
    numberColor: "#c12c0d",
    punctuationColor: "#a49c9a",
    operatorColor: "#c12c0d",
  };

  const block = {
    text: code_example,
    language: "py",
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: true,
    theme: customTheme,
  };

  return (
    <div className="code-segment">
      <div className="languages-flexbox">
        <LanguageDropDown />
      </div>
      <CopyBlock {...block} className={"code-block"} />
    </div>
  );
}
