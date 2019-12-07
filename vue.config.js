module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:6543/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/', // rewrite path
                },
            }
        }
    }
}