const visit = require('unist-util-visit');

module.exports = async({ markdownAST }, options = { width: 600, height: 300}) => {

    visit(markdownAST, 'text', async (node) => {
        const { value } = node;
        const isStackblitzURI = value.match(/https:\/\/(www\.)?stackblitz\.com\/edit\/([A-Za-z0-9-_?=]*)/gi);
    
        //https://stackblitz.com/edit/angular?embed=1

        if (isStackblitzURI) {
        //   const penData = value.split('/');
        //   const penId = penData.pop();
        //   const penUser = penData[3];
          console.log(`\n Embeding stackblitz app: APPID by APP published \n`);
    
        // <iframe src="https://stackblitz.com/edit/angular?embed=1"></iframe>

        node.type = 'html';
        node.value = `<div><iframe 
          height='${options.height}' 
          scrolling='no' 
          src='//stackblitz.com/edit/angular?embed=1' 
          frameborder='no' 
          allowtransparency='true' 
          allowfullscreen='true' 
          style='width: 100%;'></iframe></div>`;

        //   node.type = 'html';
        //   node.value = `<div><iframe 
        //     height='${options.height}' 
        //     scrolling='no' 
        //     src='//codepen.io/${penUser}/embed/preview/${penId}/?height=${options.height}&theme-id=${options.theme}&default-tab=${options.defaultTab || 'html,result'}' 
        //     frameborder='no' 
        //     allowtransparency='true' 
        //     allowfullscreen='true' 
        //     style='width: 100%;'></iframe></div>`;
        }
    });

    return markdownAST;
};
