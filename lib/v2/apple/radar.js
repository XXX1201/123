module.exports = {
    'apple.com': {
        _name: 'Apple',
        support: [
            {
                title: '换和维修扩展计划',
                docs: 'https://docs.rsshub.app/routes/other#apple',
                source: ['/:country/service-programs'],
                target: '/apple/exchange_repair/:country',
            },
        ],
    },
};
