# 1.6.0

-Updated for v10 (Finally!)
-Had to remove the Image Journal and Video Journal due to complexity/recreation with Journals 2.0 introduced in v10.
-Improved font support by directly importing from Google for most fonts (AngloText was from somewhere else, so it's still included)

# 1.5.0

-Added two new Journal types: Image Journal and Video Journal ( originally incorporated Image Journal from [elizeuangelo](https://github.com/elizeuangelo/FVTT-Custom-Journal-Theming), and then adapted from there)
-Created a Video Popout to handle the Video Journal, allowing a video as the background of a journal entry
-Cleaned up the Config for the Image and Video Journal types.

# 1.4.2

-Restored missing styles from the v9 Compatibility update.
-Also ensured the fonts work (they appear to, so if not let me know!)

# 1.4.1

- Fixed styles section missing from journals' TinyMCE (Thanks arcanist for the assist!)
- Reorganized files for clearer structure (mostly fonts)

# 1.4.0

- Compatible with v9 of Foundry
- Removed depependency on Document Sheet Registrar due to changes in Core Foundry.

# 1.3.2

- Making use of new hooks from Document Sheet Registrar.

# 1.3.1

- Hotfix for the Document Sheet Registrar dependency.

# 1.3.0

- Made compatible with Foundry 0.8.x, starting with 0.8.8.

- Added the League of Foundry Developers' Document Sheet Registrar as a dependency to allow registering sheets much easier going forward

- Added a second Handwritten Letter option to use the Sacramento Regular font (an alternate cursive that might be easier to read).

# 1.2.1

- Added Spanish translation, thanks to José E. Lozano!

- Added the stylesheets for the Sci-Fi fonts to the `module.json` file. (Oops!)

- Removed superfluous html demo of the fonts from the module files.

# 1.2.0

- Added support for localization. English and French are already included, though I do not usually play in French, so I'll happily welcome any suggestions that would make the naming more consistent with what's already there, as well as any other languages!

- Time for a little love for all of you who have been finding the general fantasy existing look a bit jarring in your sci-fi game with two brand new sci-fi themes! Again, let me know if there's anything not quite right or you'd like tweaked! I'm not all that familiar with what's "standard" in sci-fi. I'd also love to had fancy sci-fi borders to the quote blocks, but I don't have a border texture that I can use laying around, so unless I can get my hands on one of those, it will unfortunately have to remain a wishlist item.

# 1.1.3

- **Applied styling for minimal compatibility with MEME.** As I am not using this module myself, there may be some untested areas, so if you see anything amiss that specifically seems to be caused by the interaction between Custom Journal and MEME, please add a comment under https://github.com/Sanyella/FVTT-Custom-Journal-Theming/issues/31. Also note that this is for *minimal* compatibility, and that means the styles offered by Custom Journal aren't supported by the MEME editor, since there are no style dropdown. 

# 1.1.2

- Fixed styles dropdown not showing Custom Journal's unique styles for Foundry version 7.3. This change is still compatible with the current stable release (0.6.6).

# 1.1.1

- Added changelog

- Fixed text color in tables

- Changed the CSS variables for the dark-slate theme to reflect the `--[theme]-journal-[variable]` pattern, instead of being `--[theme]-[variable]`

- Added github workflows
