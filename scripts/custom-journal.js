import { ImageJournal } from './image-journal.js';

/* CUSTOMIZE
 * Add any extra themes here: just copy-paste the whole block, changing only the class
 * name for the theme's name that will appear in the drop-down, and the name in single
 * quotes (here, dark-slate-journal) with whatever name you gave your theme in the .css
 * file
 */
class DarkModeJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('dark-mode-journal');
		return options;
	}
}

class DarkSlateJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('dark-slate-journal');
		return options;
	}
}

class HandwrittenLetter extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('handwritten-letter');
		return options;
	}
}

class HandwrittenLetterTwo extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('handwritten-letter-two');
		return options;
	}
}

class RoyalJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('royal-journal');
		return options;
	}
}

class SciFiOneJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('sci-fi-one-journal');
		return options;
	}
}

class SciFiTwoJournal extends JournalSheet {
	static get defaultOptions() {
		const options = super.defaultOptions;
		options.classes.push('sci-fi-two-journal');
		return options;
	}
}

Hooks.on("init", (documentTypes) => {
console.log("Custom Journals | Registering the module's TinyMCE Styles.");

libWrapper.register('custom-journal', 'JournalSheet.prototype.activateEditor', function(wrapped, name, options={}, ...args) {
    if (!options.style_formats) 
    {
        options.style_formats = [
            {
                title: "Custom",
                items: [
                    {
                        title: "Secret",
                        block: 'section',
                        classes: 'secret',
                        wrapper: true
                    }
                ]
            }
        ];
    }
    options.style_formats.push(
        {
            title: game.i18n.localize("custom-journal.StyleSection"),
            items: [
                {
                    title: game.i18n.localize("custom-journal.DropCap"),
                    inline: 'span',
                    classes: 'drop-cap' 
                },
                {
                    title: game.i18n.localize("custom-journal.SimpleBlock"),
                    block: 'section',
                    classes: 'simple-block',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("custom-journal.SimpleBlockFloat"),
                    block: 'section',
                    classes: 'simple-block-float',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("custom-journal.RidgedBlock"),
                    block: 'section',
                    classes: 'ridged-block',
                    wrapper: true
                },
                {
                    title: game.i18n.localize("custom-journal.RidgedBlockFloat"),
                    block: 'section',
                    classes: 'ridged-block-float',
                    wrapper: true
                }
            ]
        }
    );
  return wrapped(name, options={}, ...args);
}, 'WRAPPER');

console.log("Custom Journals | Registering the module's sheets.");

/*CUSTOMIZE
 * Here, register your sheet so it shows up properly in the dropdown, just change
 * for your sheet name and you're good to go
 */
Journal.registerSheet("journals", DarkModeJournal, {
	label: game.i18n.localize("custom-journal.DarkMode"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", DarkSlateJournal, {
	label: game.i18n.localize("custom-journal.DarkSlate"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", HandwrittenLetter, {
	label: game.i18n.localize("custom-journal.HandwrittenLetter"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", HandwrittenLetterTwo, {
	label: game.i18n.localize("custom-journal.HandwrittenLetterTwo"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", RoyalJournal, {
	label: game.i18n.localize("custom-journal.Royal"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", SciFiOneJournal, {
	label: game.i18n.localize("custom-journal.SciFiOne"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", SciFiTwoJournal, {
	label: game.i18n.localize("custom-journal.SciFiTwo"),
	types: ["base"],
	makeDefault: false
});

Journal.registerSheet("journals", ImageJournal, {
	label: game.i18n.localize("custom-journal.ImageJournal"),
	types: ["base"],
	makeDefault: false
});

EntitySheetConfig.updateDefaultSheets(game.settings.get("core", "sheetClasses"));

console.log("Custom Journals | Ready.")
});