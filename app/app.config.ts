export default defineAppConfig({
  title: 'Kholis RA Gumelar',
  email: 'me@khol.is',
  github: 'https://khol.is/github',
  twitter: 'https://khol.is/x',
  telegram: '',
  mastodon: '',
  blog: 'https://khol.is/me',
  description: 'URL Shortener',
  image: 'https://sink.cool/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
