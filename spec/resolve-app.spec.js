const resolveApp = require('../resolve-app');

describe('resolveApp', () => {
    it('should resolve the appId', () => {
        const result = resolveApp('https://stackblitz.com/edit/angular?embed=1');
        const { appId } = result;

        expect(appId).toEqual('angular');
    });
});