const path = require('path')
/** @type {{reactStrictMode: boolean, experimental: {serverActions: boolean}, env: {NEXT_PUBLIC_AUTH0_DOMAIN, NEXT_PUBLIC_APP_BASE_URL, NEXT_PUBLIC_AUTH0_CLIENT_ID, NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_AUTH0_REDIRECT_URL}}} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_AUTH0_REDIRECT_URL: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URL,
    NEXT_PUBLIC_AUTH0_DOMAIN: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
    NEXT_PUBLIC_AUTH0_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
    NEXT_PUBLIC_GTM_ID: process.env.NEXT_PUBLIC_GTM_ID
  },
  experimental: {
    serverActions: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
