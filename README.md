# bar-menu

React components for a filterable bar menu.

## usage

Install with `npm` and then use the component, which renders the menu based on the configuration. Assumes that you are using `theme-ui`, which is where you style the page by selecting font, color, etc.

```
import { BarMenu } from 'bar-menu'

const sections = [{name: '', description: '', contents: []}]
const cocktails = 

<BarMenu
  title={'name'}
  sections={sections}
  cocktails={cocktails}
  welcome={'welcome text'}
/>
```

Where `cocktails` is an array of recipes schematized as in the following example:

```
{
  name: 'Americano',
  family: 'highball',
  keywords: ['vermouth', 'campari', 'seltzer'],
  ingredients: [
    {
      value: 'Carpano Antica Formula vermouth',
      amount: { value: 1, units: 'oz' },
    },
    {
      value: 'Campari',
      amount: { value: 1, units: 'oz' },
    },
    {
      value: 'Topo Chico',
      amount: { value: 4, units: 'oz' },
    },
  ],
  recipe:
    'Stir once with three ice cubes in a tall glass. Place an orange wedge in the drink.',
  glass: 'tall glass',
  origin: ['Classic']
}
```

And `sections` is a list of named menu sections each including a list of drinks

```
[
	{
	  name: 'Spritzes',
	  description: 'Light and refreshing',
	  contents: [
	    'Americano',
	    ...
	  ],
	},
]
```

For a full example, see [freemansbar.com](https://freemansbar.com).
