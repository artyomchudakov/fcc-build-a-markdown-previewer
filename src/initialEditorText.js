const image = `![everest-minimalist-wallpaper-light](https://www.sterlingsolutions.co.uk/wp-content/uploads/2016/03/everest-minimalist-wallpaper-light-300x188.png)`;

const multilineCode = `\`\`\`
// this is multi-line code:
function parseAndDisplay(userInput) {
  const container = document.getElementById('preview');
  container.innerHTML = marked.parse(userInput);
}
\`\`\``;

export const initialEditorText = `# Welcome to my React Markdown Previewer!
> Type in the editor section and check immediately at the result in the preview section!
> This text serves as an introduction to markdown, to learn more use the links below

# Insert main heading

## Sub-heading

###... so on


##### IMAGE \`![alt text](image.jpg)\`

${image}


##### LINK \`[title](https://www.example.com)\`

##### CODE BLOCKS
- Insert code, using 2 backticks \`<article></article>\`


- Some multiline code
${multilineCode}

##### TEXT EDITING

***strong emph***

***strong** in emph*

Blockquote

> blockquote

Read more about Markdown hier:  
1. [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#block-quotes)
2. [Markdown guide](https://www.markdownguide.org/cheat-sheet/)

`;
