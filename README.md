# Private Forum Plugin for NodeBB

This module allows to lock the forum to anyone that did not have an account.

Be aware:
- No pages will be publicly accessible
- Web crawlers and bots (like google) will not be able to index the forum (except the login and register page)
- If you are using the plugin `nodebb-plugin-custom-homepage` and have created a custom welcome page on `/`, this page **will be visible** after a user registered itself, **even if an administrator did not approve him**

## Bug or feature request
Please open an issue or a pull request if needed.

## Roadmap
- Implement an admin view to add and remove exception pages

## Installation

Via npm:

```
npm install nodebb-plugin-private-forum
```

Or via the NodeBB plugin page.

## Screenshots
For now there is no web view, only debug messages if nodebb is started with `./nodebb dev`.
