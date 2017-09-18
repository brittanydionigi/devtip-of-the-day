# Dev Tip of the Day

A browser extension for displaying a new tip, trick, or shortcut for developers upon opening a new browser tab.

# Contributing

## Getting Started

For this repo and from within the project directory run:

`npm install`

Create a new branch for your work that reflects what feature you're adding or bug you'll be fixing. (e.g. `add-offline-support`). Commit messages should follow [these conventions](https://chris.beams.io/posts/git-commit/) (TLDR: Take a look at the commit messages in the history and do your best to match). Please take care to squash your commits, and if you're working on a patch that has a relevant issue, make sure to add "Fixes #<issue number>" to the commit description. This will automatically close the issue when the work is merged into master.

## Submitting a Tip

Add a new tip to the `tips.json` file by adding an object like so:

```json
{
  "tool": "Name of Tool",
  "toolSlug": "URL-friendly name of tool",
  "source": "Link to any applicable resources for further reading/learning, or credit for where the tip came from",
  "text": "The actual tip. Read a couple and see how they're written and try to follow suit. Inline code can be declared by wrapping the code in hard brackets. For example, press [cmd + a] to do this thing."
}
```

Currently prioritizing tips for Sublime Text, Terminal and OS X, but others will be accepted as well!

## Testing Your Changes Locally

### In Chrome

From the Window menu in Chrome, click on 'Extensions'. When the Extensions page appears, make sure the 'Developer Mode' checkbox is checked in the top right corner. Then click the 'Load unpacked extension...' button in the top left corner. Navigate to the directory where you cloned this repo and select it. Make sure it's enabled and whenever you open a new tab you should see a new tip :) 