/**
 * @fileoverview 抓取豆瓣图书数据
 */

const axios = require("axios");
const cheerio = require("cheerio");

async function fetchBookHTML() {
    const result = await axios("https://book.douban.com/top250", {
        method: "GET"
    });
    return result.data;
}

function getBookDetailUrl(html) {
    const $ = cheerio.load(html);
    const oItem = $(".indent table .item .nbg");
    const links = oItem
        .map((index, el) => {
            const href = el.attribs["href"];
            return href;
        })
        .get();
    return links;
}

async function getBookDetail(detailUrl) {
    const result = await axios(detailUrl, {
        method: "GET"
    });
    const $ = cheerio.load(result.data);
    const name = $("#wrapper h1 span").text().trim();
    const imgUrl = $("#wrapper #mainpic .nbg img").attr("src");
    const oSpan = $("#info span");
    const authorSpan = oSpan.filter((index, el) => {
        return $(el).text().includes("作者");
    });
    const author = authorSpan.next("a").text().trim();
    const publishSpan = oSpan.filter((index, el) => {
        return $(el).text().includes("出版年");
    });
    const publishDate = publishSpan[0].nextSibling.nodeValue.trim();

    return {
        name,
        imgUrl,
        author,
        publishDate
    };
}

async function fetchAll(links) {
    let proms = links.map((el) => getBookDetail(el));
    return Promise.all(proms);
}

function saveToDB(datas) {
    require("../modules/book")
        .bulkCreate(datas)
        .then(() => {
            console.log("插入成功");
        });
}

(async function () {
    /* let result = await fetchBookHTML();
    let links = getBookDetailUrl(result);
    let datas = await fetchAll(links); */

    let datas = [
        {
            name: "红楼梦",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s1070959.jpg",
            author: "[清] 曹雪芹 著",
            publishDate: "1996-12"
        },
        {
            name: "活着",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s29869926.jpg",
            author: "余华",
            publishDate: "2012-8"
        },
        {
            name: "哈利·波特",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s29101586.jpg",
            author: "J.K.罗琳 (J.K.Rowling)",
            publishDate: "2008-12-1"
        },
        {
            name: "1984",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s4371408.jpg",
            author: "[英] 乔治·奥威尔",
            publishDate: "2010-4-1"
        },
        {
            name: "三体全集",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s28357056.jpg",
            author: "刘慈欣",
            publishDate: "2012-1"
        },
        {
            name: "百年孤独",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s27237850.jpg",
            author: "[哥伦比亚] 加西亚·马尔克斯",
            publishDate: "2011-6"
        },
        {
            name: "飘",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s1078958.jpg",
            author: "[美国] 玛格丽特·米切尔",
            publishDate: "2000-9"
        },
        {
            name: "动物农场",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s2347590.jpg",
            author: "[英国]\n            乔治·奥威尔",
            publishDate: "2007-3"
        },
        {
            name: "房思琪的初恋乐园",
            imgUrl: "https://img2.doubanio.com/view/subject/s/public/s29651121.jpg",
            author: "林奕含",
            publishDate: "2018-2"
        },
        {
            name: "三国演义（全二册）",
            imgUrl: "https://img3.doubanio.com/view/subject/s/public/s1076932.jpg",
            author: "[明] 罗贯中",
            publishDate: "1998-05"
        },
        {
            name: "福尔摩斯探案全集（上中下）",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s1229240.jpg",
            author: "[英国]\n            阿瑟·柯南·道尔",
            publishDate: "1981-8"
        },
        {
            name: "白夜行",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s24514468.jpg",
            author: "[日] 东野圭吾",
            publishDate: "2013-1-1"
        },
        {
            name: "邓小平时代",
            imgUrl: "https://img3.doubanio.com/view/subject/s/public/s24516687.jpg",
            author: "【美】傅高义 (Ezra.F.Vogel)",
            publishDate: "2013-1-18"
        },
        {
            name: "安徒生童话故事集",
            imgUrl: "https://img3.doubanio.com/view/subject/s/public/s1034062.jpg",
            author: "（丹麦）安徒生",
            publishDate: "1997-08"
        },
        {
            name: "小王子",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s1237549.jpg",
            author: "[法] 圣埃克苏佩里",
            publishDate: "2003-8"
        },
        {
            name: "呐喊",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s34099286.jpg",
            author: "鲁迅",
            publishDate: "1973-3"
        },
        {
            name: "撒哈拉的故事",
            imgUrl: "https://img3.doubanio.com/view/subject/s/public/s1369343.jpg",
            author: "三毛",
            publishDate: "2003-8"
        },
        {
            name: "天龙八部",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s26018275.jpg",
            author: "金庸",
            publishDate: "1994-5"
        },
        {
            name: "失踪的孩子",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s29799269.jpg",
            author: "[意] 埃莱娜·费兰特",
            publishDate: "2018-7"
        },
        {
            name: "杀死一只知更鸟",
            imgUrl: "https://img3.doubanio.com/view/subject/s/public/s23128183.jpg",
            author: "[美国]\n            哈珀·李",
            publishDate: "2012-9"
        },
        {
            name: "新名字的故事",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s29376146.jpg",
            author: "[意] 埃莱娜·费兰特",
            publishDate: "2017-4"
        },
        {
            name: "明朝那些事儿（1-9）",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s3745215.jpg",
            author: "当年明月",
            publishDate: "2009-4"
        },
        {
            name: "卡拉马佐夫兄弟",
            imgUrl: "https://img9.doubanio.com/view/subject/s/public/s34711695.jpg",
            author: "陀思妥耶夫斯基 (Ф.М.Достоевский)",
            publishDate: "2015-2-1"
        },
        {
            name: "野草",
            imgUrl: "https://img2.doubanio.com/view/subject/s/public/s34099301.jpg",
            author: "鲁迅",
            publishDate: "1973-3"
        },
        {
            name: "悉达多",
            imgUrl: "https://img1.doubanio.com/view/subject/s/public/s29396368.jpg",
            author: "[德] 赫尔曼·黑塞",
            publishDate: "2017-1"
        }
    ];
    await saveToDB(datas);
})();
