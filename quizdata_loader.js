window.ThemeManager = (function() {
    const THEMES = {};
    return {
        registerTheme: function(name, data) { THEMES[name] = data; },
        getAvailableThemes: function() { return Object.keys(THEMES); },
        getTheme: function(name) { return THEMES[name]; }
    };
})();

const BESCHIKBARE_THEMAS = ["KAMPIOENEN"];

BESCHIKBARE_THEMAS.forEach(themeName => {
    const themeData = {
        themeName: themeName,
        ronde1_pool: typeof RONDE1_DATA !== 'undefined' && RONDE1_DATA[themeName] ? RONDE1_DATA[themeName] : [],
        ronde2_answer_pool: typeof RONDE2_DATA !== 'undefined' && RONDE2_DATA[themeName] ? RONDE2_DATA[themeName] : [],
        ronde3_openDeur: typeof RONDE3_DATA !== 'undefined' && RONDE3_DATA[themeName] ? RONDE3_DATA[themeName] : [],
        ronde4_geheugen: typeof RONDE4_DATA !== 'undefined' && RONDE4_DATA[themeName] ? RONDE4_DATA[themeName] : [],
        // R5 is nu Beeld, R6 is nu Finale
        ronde5_beeld: typeof RONDE5_DATA !== 'undefined' && RONDE5_DATA[themeName] ? RONDE5_DATA[themeName] : [],
        ronde6_finale: typeof RONDE6_DATA !== 'undefined' && RONDE6_DATA[themeName] ? RONDE6_DATA[themeName] : [] 
    };
    window.ThemeManager.registerTheme(themeName, themeData);
});
