import { InstagramExtractor } from './index';

const shortcodes = [
  'DJ_1LHjIUKb', // video
  'DKEcNBuJIdN', // image
  'DKHRsO_tx_o'  // mixed
];

async function runDemo() {
  for (const code of shortcodes) {
    try {
      console.log(`Fetching data for shortcode: ${code}`);
      const postData = await InstagramExtractor.extractPost(code);
      console.log(`Data for ${code}:`, JSON.stringify(postData, null, 2));
      console.log(`Post URL: ${postData.url}`);
      console.log('------------------------------------');
    } catch (error) {
      console.error(`Error fetching data for ${code}:`, error);
      console.log('------------------------------------');
    }
  }
}

runDemo();