# BRD Website

This is a NextJS website, the content of which should be mostly editable via markdown.

## Development and Building

Run `pnpm dev` to preview the site in a browser as you develop.

Run `pnpm build` to generate a static site. The output will be stored in `./out`.

To deploy, push the contents of `./out` to a webserver. Note: it expects to be at the root of a domain/subdomain, not housed in a subdirectory.

## Editing Content

Most content will be stored in `./content`. More information TBD.

### Home page

The homepage is the most viually complicated page. As such, it pulls in content from a couple of different places such as `./content/includes` and `./content/data`.

### Includes

An include is a simple markdown *.mdx file that is meant to be displayed as part of a larger page. For example, make `./content/includes/example.mdx`.

```
## Example

This is an example of some content
```

Then, on any NextJS page, you can include that content like so:

```typescript
import ExampleContent from '@/content/includes/example.mdx'

export default function MyPage() {
  return (
    <>
        <div> <!-- other content -->
        <div>
            <ExampleContent />
        </div>
        <div> <!-- more content -->
    </>
  )
}
```

### Data

You can define data for areas that might be repetitive in the layout -- for example, a list of FAQ items or an agenda.

For example, make `./content/data/list.tsx`.

```typescript
type ToDo = {
    description: string;
    completed: boolean;
}

export const list:ToDo[] = [
    {
        description: "Scale bitcoin",
        completed: false
    },
    {
        description: "Have fun",
        completed: true
    },
]
```

Then, on any NextJS page, you can include that content like so:

```typescript
import { list } from '@/content/data/list'

export default function ListPage() {
  return (
    <>
        <h1>To Do List</h2>
            {list.map((listItem, index) => (
                <div>
                    <p>{listItem.description}</p>
                    <p>Status: {listItem.completed ? "Done" : "Incomplete"}</p>
                </div>
            ))}
    </>
  )
}
```

### Adding new pages (routes)

Most pages follow a pretty basic template. You can add a new *.mdx file in `./content/pages`. For example:

- File: `./content/pages/new-page.mdx`
- URL: `https://{domain}/new-page/`

