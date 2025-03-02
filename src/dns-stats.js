const { NotImplementedError } = require('../extensions/index.js');

function getDNSStats(domains) {
    const dnsCount = {};

    domains.forEach(domain => {
        const parts = domain.split('.').reverse();
        let currentDNS = '';

        parts.forEach(part => {
            currentDNS += `.${part}`;
            dnsCount[currentDNS] = (dnsCount[currentDNS] || 0) + 1;
        });
    });

    return dnsCount;
}

module.exports = {
    getDNSStats
};