import { CopyBlock, obsidian } from "react-code-blocks";
import { IoIosArrowDown } from "react-icons/io";
import { languages } from "../../api/data";
import "./css/library.css";
import React from "react";

export default function CodeSegment() {
  const code = `from random import choice

# template
length = len("10101010101010");
short  = int(length / 2)

for _ in range(short):
    
    array = ([0]*short) + [1]*short
    
    for i in range(length if length % 2 == 0 else length-1):

        chr = choice(array)
        array.remove(chr)
        
        print(chr, end='')

print()
`;

  const block = {
    text: code,
    language: "py",
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: true,
    theme: obsidian,
  };

  return (
    <div className="code-segment">
      <div className="languages-flexbox">
        <div className="dropdown">
          <ul className="dropdown-menu">
            {languages.map((l, index) => (
              <li key={l.id} className={index === 0 ? "first-li" : ""}>
                <a>{l.name}</a>
                {index === 0 && <IoIosArrowDown className="arrow-icon" />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CopyBlock {...block} className={"code-block"} />
    </div>
  );
}
