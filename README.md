# Installation

Add this to your package.json:

```
"mydnic-ui": "git+ssh://git@github.com:mydnic/ui.git#v[REPLACE_WITH_LATEST_VERSION]",
```

# Usage

## Vuejs Components

You can register all components from the library automatically with this one liner:

```javascript
import {filters, directives, registerToastPlugin, registerModalPlugin, registerDialogPlugin} from 'mydnic-ui'

// Register filters// Filters
vueApp.config.globalProperties.$filters = filters

// Directives
directives(vueApp)

// Emitter
const emitter = mitt()
vueApp.config.globalProperties.emitter = emitter

// Toast
registerToastPlugin(vueApp)

// Dialog
registerDialogPlugin(vueApp)

registerModalPlugin(vueApp)
```
## CSS Styles

Import the scss file in your main scss

```scss
@import 'mydnic-ui/mydnic-ui.css';

// your own styles after
```
