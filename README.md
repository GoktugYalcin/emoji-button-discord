# emoji-button-discord

> A button component made with create-react-library

[![NPM](https://img.shields.io/npm/v/emoji-button.svg)](https://www.npmjs.com/package/emoji-button-discord) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save emoji-button-discord
```

## Props
- **disabled** - This state activates/disables disable state.
- **customEmoji** - A emoji can initialize as static.
- **customClass** - Custom CSS class can be given.
- **onClick** - onClick event handler.
- **text** - A text or prompt on right side of emoji button.
- **customContainer** - Custom CSS class for wrapper container.

## Usage

```jsx
import React, { Component } from 'react'

import EmojiButton from 'emoji-button-discord'
import 'emoji-button/dist/index.css'

class Example extends Component {
  render() {
    return <EmojiButton />
  }
}
```

## License

MIT © [](https://github.com/)
