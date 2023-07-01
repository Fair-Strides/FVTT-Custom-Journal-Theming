# FVTT Custom Journal Theming - The Journals of your Dreams!

## New Changes:
Upgraded to v10 of Foundry (Finally! I'm sorry for the delays)

Nothing new added, except that I expanded the styling to extend to the pages panel on the side of the Journal Entry.

I did have to remove the Image Journal and Video Journal types in this upgrade to v10. They were too complex to work with the new Journals 2.0 system that was introduced in v10 of Foundry, I'm afraid.

Currently, support for the extra style options is not there. The new ProseMirror interface is hard to work with, so you could add styles in by editing the source of the content at best. Previous entries that had them already should still work though.

***

Welcome to your own personal playground to design your own wonderful-looking journals! 
Not only did Sanyella want to make journals more interesting, they also wanted to to allow them
to be selectively themed, much like actors can. This is now possible, with a current 
library of several themes in addition to the original Foundry look.

![Preview](https://github.com/Fair-Strides/FVTT-Custom-Journal-Theming/raw/v9-journals/custom-journal.png)

In addition to the regular reskin provided by the different themes, you can now also benefit from some other style options in the editor dropdown, such as drop caps (moved from defaulting to *every* paragraphs' first letter) and various text "boxes"! (*not supported by all themes)

![Additional Options](https://github.com/Fair-Strides/FVTT-Custom-Journal-Theming/raw/v9-journals/custom-journal_more-options.png)
![Block Demo](https://github.com/Fair-Strides/FVTT-Custom-Journal-Theming/raw/v9-journals/custom-journal_block-demo.png)

## Known Issues

If you encounter any bug or want to suggest improvements, don't hesitate to tell me either 
here through the issues or on Discord (do tag me if reaching out through the Foundry Discord
if you want me to see your message @fairstrides. Do take into account though that this
is still an early version which needs a lot more work. I'll do my best to fix these issues
as fast as possible, but take note that it may still take a certain time before I have the
time to fix something.

- **Bug**: The drop down for the "default" journal sheet doesn't currently work. I have yet to 
find out why, so please be patient. Rest assured, individual sheet themes *are* working.

*Theme-specific issues aren't going to be listed here, but will be available and appropriately 
tagged in the GitHub issues.*

## Personalizing your journals

If you want to customize the look of your journals, you can edit an existing theme,
you can simply tweak values, or you can create your own theme, following the instructions
in the styles/templates.css and the scripts/custom-journal.js files. Don't forget to add
any extra file you create to the module.json as well so it loads.

A final word of warning:
BE WARNED: Since there isn't any way to save changes made to a module from updates
(such as perhaps to introduce more themes), updating may mean ANY CHANGES YOU WOULD HAVE MADE WOULD BE LOST.

> **PLEASE BACKUP ANY CHANGES YOU WANT TO KEEP OUTSIDE OF THE MODULE TO SET THOSE BACK IN CASE OF A MODULE UPDATE.**

This is of course by no mean ideal, and I'll try to bring more themes natively to limit the 
need for individual creation of such themes, but I do understand many will probably still 
want to make their own, and as such I do try to guide you though it so my work can help you.
Provided they do not introduce fonts or textures I cannot distribute and they are of good quality,
I might also be open to adding your styles, if you so wish. Just reach out to me in Discord 
(fairstrides) or right here if you're confident to submit a pull request.

## Thanks, attributions & links

### Inspiration & Contributors

Sanyella for the original creation and maintenance of this module up through version 1.2.0.

People who have helped me in fixing various things within the module: Magnus/elizeuangelo, jakvike.

Also shoutout to all those who have and still help me brainstorm and understand things in the Discord.

**Big thanks to all of you! You rock!**

Thanks to both Stryxin's dark mode module (https://github.com/Stryxin/dnd5edark-foundryvtt)
and Felix's BetterNPCSheet module (https://github.com/syl3r86/BetterNPCSheet5e)
which have both helped me tremendously in understanding how to structure my own
module. Of course, also a huge thanks to Atropos for bringing Foundry VTT to life, in all its
awesomness and in such an open way, with code easy to navigate and understand.

### Fonts

Lovers Quarrel font: https://fonts.google.com/specimen/Lovers+Quarrel

Anglo-text font: https://www.1001fonts.com/anglo-text-font.html

Sacramento-Regular: https://fonts.google.com/specimen/Sacramento
  
### Textures

Dark background 1: https://www.publicdomainpictures.net/en/view-image.php?image=169017&picture=grunge-background
    
Parchment 1, by FilterForge : https://www.flickr.com/photos/filterforge/9340122531

Of course, wherever it may apply, all rights to other resources used in this module are still their original owners', and I lay no claim to them whatsoever. 
