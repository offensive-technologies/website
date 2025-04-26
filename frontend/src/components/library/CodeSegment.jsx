import { CodeBlock, dracula } from "react-code-blocks";

export default function CodeSegment() {
  const code = "print('hello')";

  return (
    <>
      <div>
        <CodeBlock
          text={code}
          language={"py"}
          showLineNumbers={true}
          theme={dracula}
        />
      </div>
    </>
  );
}
