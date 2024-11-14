import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Highlight, themes } from "prism-react-renderer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import RenderImage from "./renderImage";

export default function parsedContent(content) {
  const Bold = ({ children }) => (
    <strong className="font-bold">{children}</strong>
  );

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
      [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u className="underline">{text}</u>,
      [MARKS.CODE]: (text) => {
        let code = text;
        const regex = /^lang:(\w+)/;
        let language = "javascript";
        if (regex.test(text)) {
          language = regex.exec(text)[1];
          code = code.split("\n").slice(1).join("\n");
        }

        return (
          <Highlight
            theme={themes.gruvboxMaterialDark}
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                suppressHydrationWarning
                className={`${className} p-4 rounded-lg overflow-x-auto`}
                style={style}
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        );
      },
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className=" my-4 text-md">{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="text-3xl font-bold mt-10 mb-4">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-semibold mt-10 mb-3">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="text-xl font-semibold mt-10 mb-2">{children}</h3>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => <RenderImage node={node} />,
    },
    renderText: (text) => text.replace("!", "?"),
  };

  return documentToReactComponents(content, options);
}
