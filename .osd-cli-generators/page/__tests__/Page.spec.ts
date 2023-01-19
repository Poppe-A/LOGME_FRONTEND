const ejs = require('ejs');
const frontmatter = require('frontmatter');

describe('Page generator', () => {
    it('generates correctly', async () => {
        const output = await ejs.renderFile(`${__dirname}/../Page.tsx.ejs`, {
            props: {
                pascalCaseName: 'FoobarPage',
            },
        });
        const fmData = frontmatter(output);

        expect(fmData.content).toMatchSnapshot();
    });
});
