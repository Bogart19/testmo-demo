
describe('Test speed', () => {
    test('should be real slow', async () => {
        await new Promise(r => setTimeout(r, 4000));
        expect(true);
    });
});