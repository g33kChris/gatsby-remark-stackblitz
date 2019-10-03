const visit = require('unist-util-visit');
const resolveApp = require('./resolve-app');

module.exports = async({ markdownAST }, options = { width: 600, height: 300}) => {

    visit(markdownAST, 'text', async (node) => {
        const { value } = node;
        const isStackblitzURI = value.match(/https:\/\/(www\.)?stackblitz\.com\/edit\/([A-Za-z0-9-_?=]*)/gi);
    
        if (isStackblitzURI) {
        const { appId } = resolveApp(value);

        console.log(`\n Embedding stackblitz app: ${appId} \n`);
    
        node.type = 'html';
        node.value = `<div><iframe 
          height='${options.height}' 
          scrolling='no' 
          src='//stackblitz.com/edit/${appId}?embed=1&view=preview' 
          frameborder='no' 
          allowtransparency='true' 
          allowfullscreen='true' 
          style='width: 100%;'></iframe></div>`;
        }
    });

    return markdownAST;
};
