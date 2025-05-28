# Instagram Post Extractor

A TypeScript library for extracting post data from Instagram, including descriptions, author information, and media (images/videos).

## Installation

```bash
npm install instagram-post-extractor
# or
yarn add instagram-post-extractor
```

## Usage

```typescript
import { InstagramExtractor } from 'instagram-post-extractor';

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

```typescript
interface InstagramPostData {
  description: string;
  author: {
    username: string;
    fullName: string;
    isVerified: boolean;
    profilePicUrl: string;
    followersCount: number;
  };
  media: {
    type: 'video' | 'image';
    url: string;
    thumbnailUrl: string;
    dimensions: {
      width: number;
      height: number;
    };
    duration?: number;     // Only for videos
    viewCount?: number;    // Only for videos
    playCount?: number;    // Only for videos
  };
  musicInfo?: {           // Only for posts with music
    artistName: string;
    songName: string;
    isOriginalAudio: boolean;
    audioId: string;
  };
}
```

## Error Handling

The library throws errors in the following cases:
- Network errors during the API request
- Invalid or missing shortcode
- Post not found
- API rate limiting

Make sure to wrap the `extractPost` call in a try-catch block to handle potential errors.

## License

MIT