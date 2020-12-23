/*
 * @Author: your name
 * @Date: 2020-12-14 20:57:46
 * @LastEditTime: 2020-12-22 20:56:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sph_project\vue.config.js
 */
const open=process.env.OPEN && Boolean(process.env.OPEN);
const port=process.env.PORT && Number(process.env.PORT);
const path = require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    outputDir:"dist",
    devServer:{
        port:port || 8000,
        open:open || false,
        host:"127.0.0.1",
        proxy:{
            "/api":{
                target:"http://182.92.128.115"
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "http":resolve("src/http"),
                "components":resolve("src/components"),
                "mock":resolve("src/mock"),
                "pages":resolve("src/pages"),
                "router":resolve("src/router"),
                "routes":resolve("src/routes"),
                "store":resolve("src/store"),
                "common":resolve("src/common"),
                "util":resolve("src/util"),
            }
        }
    },
    lintOnSave:false
}