// quizdata_loader.js - Combineert alle ronde-data en registreert het STANDAARD thema.

// Zorg ervoor dat de ronde data-bestanden (quizdata_r1.js t/m quizdata_r5.js) 
// in de index2.0.html en controle.html *voor* dit bestand geladen worden.

const STANDAARD_THEME_RAW_DATA = {
    themeName: 'STANDAARD',
    // Ronde 1: Bonusvragen
    ronde1_pool: typeof STANDAARD_R1_POOL !== 'undefined' ? STANDAARD_R1_POOL : [],

    // Ronde 2: Puzzel
    ronde2_answer_pool: typeof STANDAARD_R2_POOL !== 'undefined' ? STANDAARD_R2_POOL : [],

    // Ronde 3: Open Deur
    ronde3_openDeur: typeof STANDAARD_R3_POOL !== 'undefined' ? STANDAARD_R3_POOL : [],

    // Ronde 4: Geheugen
    ronde4_geheugen: typeof STANDAARD_R4_POOL !== 'undefined' ? STANDAARD_R4_POOL : [],

    // Ronde 5: Finale
    ronde5_finale: typeof STANDAARD_R5_POOL !== 'undefined' ? STANDAARD_R5_POOL : []
};

// Registreer het STANDAARD thema bij het opstarten.
if (window.ThemeManager) {
    window.ThemeManager.registerTheme('STANDAARD', STANDAARD_THEME_RAW_DATA);
} else {
    console.error("ThemeManager is nog niet gedefinieerd. Kan het thema niet registreren.");
}