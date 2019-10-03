const resolveApp = url => {
    const pathData = url.split('/');
    
    const appId = pathData.pop().split('?').slice(0, 1)[0];

    return {
        appId
    }
};

module.exports = resolveApp;
