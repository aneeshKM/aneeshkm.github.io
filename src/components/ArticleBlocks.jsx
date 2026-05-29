import React from 'react';

export const ArticleBlocks = ({ blocks }) => (
  <div className="article-content">
    {blocks.map((block, index) => {
      const key = `${block.type}-${block.id || index}`;

      if (block.type === 'h2') {
        return <h2 id={block.id} key={key}>{block.text}</h2>;
      }

      if (block.type === 'ul') {
        return (
          <ul key={key}>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      }

      return <p key={key}>{block.text}</p>;
    })}
  </div>
);
