import CodeBlock from "@roo-app/react-code-block";
import { themes } from "prism-react-renderer";
import "./css/library.css";

const codeBlock = `
print("hello world")
`;

export default function CodeSegment() {
  return (
    <div className="codesegment">
      <CodeBlock code={codeBlock} theme={themes.vsDark} language="py" />
    </div>
  );
}
