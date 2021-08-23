module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/ScreenA',
          permanent: false,
        },
      ]
    },
  }