import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://smithdavedesign.github.io/',
  base: '/algorithms-docs',
  integrations: [
    starlight({
      title: 'Daves Docs',
      social: {
        github: 'https://github.com/smithdavedesign',
        linkedin: 'https://www.linkedin.com/in/codingforgood/',
      },
      sidebar: [
        {
          label: 'Big O Notation',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Big O Notation', link: '/big-o/bigo/' },
          ],
        },
        {
          label: 'Searching Algorithms',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Binary Search', link: '/searching/binary-search/' },
            { label: 'Linear Search', link: '/searching/linear-search/' },
          ],
        },
        {
          label: 'Sorting Algorithms',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Bubble Sort', link: '/sorting/bubble-sort/' },
            { label: 'Insertion Sort', link: '/sorting/insertion-sort/' },
            { label: 'Merge Sort', link: '/sorting/merge-sort/' },
            { label: 'Quick Sort', link: '/sorting/quick-sort/' },
            { label: 'Radix Sort', link: '/sorting/radix-sort/' },
            { label: 'Selection Sort', link: '/sorting/selection-sort/' },
          ],
        },
        {
          label: 'Components',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Components', link: '/reference/example/' },
          ],
        },
      ],
    }),
  ],
});
