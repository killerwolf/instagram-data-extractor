# Instagram Data Extractor

A TypeScript library for extracting post data from Instagram, including descriptions, author information, and media (images/videos).

## Installation

```bash
npm install @h4md1/instagram-data-extractor
# or
yarn add @h4md1/instagram-data-extractor
```

## Usage

```typescript
import { InstagramExtractor } from '@h4md1/instagram-data-extractor';

async function getPostData() {
  try {
    const postData = await InstagramExtractor.extractPost('shortcode');
    console.log('Post description:', postData.description);
    console.log('Author:', postData.author.username);
    console.log('Media URL:', postData.media.url);
  } catch (error) {
    console.error('Failed to extract post:', error);
  }
}
```

## API

### InstagramExtractor.extractPost(shortcode: string, config?: RequestConfigType)

Extracts data from an Instagram post.

#### Parameters

- `shortcode`: The Instagram post shortcode (found in the post URL)
- `config`: Optional request configuration (extends RequestInit)

#### Returns

Returns a Promise that resolves to an InstagramPostData object:


## Error Handling

The library throws errors in the following cases:
- Network errors during the API request
- Invalid or missing shortcode
- Post not found
- API rate limiting

Make sure to wrap the `extractPost` call in a try-catch block to handle potential errors.

## License

MIT

## CLI Usage

You can extract Instagram post data directly from the command line:

### Using npx

```sh
npx @h4md1/instagram-data-extractor@latest extract <shortcode>
```

### Using node

```sh
node dist/cli.js extract <shortcode>
```

Replace `<shortcode>` with the Instagram post shortcode (e.g., `DJ_1LHjIUKb`).

## Credits

This package is heavily inspired by [riad-azz/instagram-video-downloader](https://github.com/riad-azz/instagram-video-downloader).