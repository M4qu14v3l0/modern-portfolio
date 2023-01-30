/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  modularizeImports:{
    '@mui/icons-material':{
      transform: '@mui/icons-material/{{member}}',
    },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental:{
    appDir: true
  }
}

module.exports = nextConfig
