# BRD Website

This is a NextJS website, the content of which should be mostly editable via markdown.

## Development and Building

Run `pnpm dev` to preview the site in a browser as you develop.

Run `pnpm build` to generate a static site. The output will be stored in `./out`.

To deploy, push the contents of `./out` to a webserver. Note: it expects to be at the root of a domain/subdomain, not housed in a subdirectory.

## Editing Content

Most content will be stored in `./content`. More information TBD.

### Adding new pages (routes)

Most pages follow ap retty basic template. You can add a new *.mdx file in `./content/pages`. For example:

- File: `./content/pages/new-page.mdx`
- URL: `https://{domain}/new-page/`
