import Mock from "mockjs";
import banners from "./json/banners"
import floors from "./json/floors"
Mock.mock("/mock/banners",{
    code:200,
    "data|5":banners
});
Mock.mock("/mock/floors",{
    code:200,
    "data":floors
})