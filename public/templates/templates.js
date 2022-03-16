const fs = require("fs")

const top = fs.readFileSync("./public/components/top.html").toString()
const nav = fs.readFileSync("./public/components/nav.html").toString()
const footer = fs.readFileSync("./public/components/footer.html").toString()

const homeHtml = fs.readFileSync("./public/pages/home/home.html").toString()
const day1Html = fs.readFileSync("./public/pages/day1/day1.html").toString()
const day2Html = fs.readFileSync("./public/pages/day2/day2.html").toString()
const day3Html = fs.readFileSync("./public/pages/day3/day3.html").toString()
const day4Html = fs.readFileSync("./public/pages/day4/day4.html").toString()

module.exports = {
    home: top.replace("%%TITLE%%", "Node Docs Home") + nav + homeHtml + footer,
    day1: top.replace("%%TITLE%%", "Day 1") + nav + day1Html + footer,
    day2: top.replace("%%TITLE%%", "Day 2") + nav + day2Html + footer,
    day3: top.replace("%%TITLE%%", "Day 3") + nav + day3Html + footer,
    day4: top.replace("%%TITLE%%", "Day 4") + nav + day4Html + footer
}