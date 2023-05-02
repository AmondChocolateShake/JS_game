const path=require("path");

module.exports={
    entry:{
        app:"./main.js"
    },

    output:{
        path:path.resolve(__dirname,"build"),
        filename:"game.js"
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
    },
    
    plugins: [
        new CopyWebpackPlugin([
        {
            from: path.resolve(__dirname, 'index.html'),
            to: path.resolve(__dirname, 'build')
        }
        ]),
        new webpack.DefinePlugin({
        'typeof CANVAS_RENDERER': JSON.stringify(true),
        'typeof WEBGL_RENDERER': JSON.stringify(true)
        })
    ]

    //https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/


}


