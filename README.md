# React Template

There are several things which I needed for most of my React applications, which I had to add repeatedly every time I created a new project. Hence I decided to create a template, which includes my project's basic needs.

---

## What does it include?

- Created with _vite_ & used _pnpm_ as a package manager
- _vite-plugin-pwa_ was added for out of the box PWA functionality
- _styled-components_ package was added
- _i18n_ was added for translation support
- my _@joshuameiser/component-library_ package was added for my own color theme toggle and language toggle
- theme toggle for quickly toggling between _light-mode_ and _dark-mode_
- language toggle for quickly changing languages (_English_ & _German_ supported so far)
- _TODO_ tags at every place that should be adjusted when creating a project based on the template (f.e. name for manifest file)
- custom _light-mode_ and _dark-mode_ scss file with shades & hover colors based on primary, secondary & tertiary colors
- CSS reset
- _SairaExtraCondensed_ has been added as a local font, should be replaced by your own font-face
- _context_ for the language setting and the currently selected theme
- initial favicons, which should also be replaced

---

## How to use

When creating a new project based on this template, there are a few _TODO's_ in which content should be adjusted.
