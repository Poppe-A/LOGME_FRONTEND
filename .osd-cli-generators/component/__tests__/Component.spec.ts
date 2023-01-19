const ejs = require('ejs');
const frontmatter = require('frontmatter');

describe('Component generator', () => {
    it('generates correctly', async () => {
        const output = await ejs.renderFile(`${__dirname}/../Component.tsx.ejs`, {
            props: {
                pascalCaseName: 'Foobar',
                usesState: true,
                usesEffect: true,
                isMemoized: true,
            },
        });
        const fmData = frontmatter(output);

        expect(fmData.content).toMatchSnapshot();
    });
});
