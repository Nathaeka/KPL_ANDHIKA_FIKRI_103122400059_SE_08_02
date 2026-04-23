/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const lines = text.split(/\r?\n/);
    
    const parsedData = {
        agents: {},
        Sitemap: []
    };

  
    let activeBots = [];

   
    for (const line of lines) {
        const rawLine = line.replace(/#.*/, '').trim();
        
        if (!rawLine) continue;

        const separatorIdx = rawLine.indexOf(':');
        if (separatorIdx === -1) continue;

       
        const field = rawLine.slice(0, separatorIdx).trim().toLowerCase();
        const val = rawLine.slice(separatorIdx + 1).trim();

        
        switch (field) {
            case 'user-agent':
                const bot = val.toLowerCase();

                if (activeBots.length > 0) {
                    const prevBot = activeBots[0];
                    if (
                        parsedData.agents[prevBot].Allow.length > 0 || 
                        parsedData.agents[prevBot].Disallow.length > 0
                    ) {
                        activeBots = [];
                    }
                }

                activeBots.push(bot);

                if (!parsedData.agents[bot]) {
                    parsedData.agents[bot] = {
                        Allow: [],
                        Disallow: []
                    };
                }
                break;

            case 'allow':
                if (val !== "") {
                    for (const bot of activeBots) {
                        parsedData.agents[bot].Allow.push(val);
                    }
                }
                break;

            case 'disallow':
                if (val !== "") {
                    for (const bot of activeBots) {
                        parsedData.agents[bot].Disallow.push(val);
                    }
                }
                break;

            case 'sitemap':
                if (val !== "") {
                    parsedData.Sitemap.push(val);
                }
                break;

            case 'host':
                if (val !== "") {
                    parsedData.Host = val;
                }
                break;
        }
    }

    return parsedData;
}

module.exports = parseRobots;