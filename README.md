# bar-menu

React components for a filterable bar menu. See an [example](https://freemansbar.com).

## usage

Install with `npm` and then use the component, which renders a menu based on the configuration. Assumes that you are using `theme-ui`, which is where you style the page by selecting font, color, etc.

```jsx
import { BarMenu } from 'bar-menu'

<BarMenu
  title={'name'}
  sections={sections}
  cocktails={cocktails}
  welcome={'welcome text'}
/>
```

Where `cocktails` is an array of recipes schematized as in the following example:

```jsx
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

```jsx
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

See a [full example](https://freemansbar.com).

### styling

This component assume that you are using `theme-ui`, which is where you style the page by selecting font, color, etc. Here are a couple examples of differently styled pages.

<img width="1440" alt="CleanShot 2022-09-30 at 18 15 10@2x" src="https://user-images.githubusercontent.com/3387500/193377527-10837024-5653-406f-9767-00c38124deec.png">
<img width="1440" alt="CleanShot 2022-09-30 at 18 12 54@2x" src="https://user-images.githubusercontent.com/3387500/193377528-a94c2bc0-5ce2-44d3-8299-97817bbbff80.png">
