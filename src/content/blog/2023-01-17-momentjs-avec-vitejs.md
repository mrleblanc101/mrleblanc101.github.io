---
title: Utiliser moment.js locales dans un projet utilisant Vite.js
createdAt: 2023-01-17
---

Avez-vous essayé d'utiliser `moment.js` dans un projet `vite.js` et avez frappé cette erreur ?

> Uncaught TypeError: Cannot read properties of undefined (reading 'defineLocale')

Changer simplement votre import:
```diff
- import 'moment/locale/fr-ca';

+ import 'moment/dist/locale/fr-ca';
```
