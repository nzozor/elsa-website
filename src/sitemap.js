"use strict";
exports.__esModule = true;
var convert = require("xml-js"), fs = require("fs"), options = {
    compact: true,
    ignoreComment: true,
    spaces: 4
}, moment = require("moment");
var url = "https://www.elsabenoldi.com";
var projects_1 = require("./mock/projects");
var projects = projects_1.BENOLDI_PROJECTS;
// projects = project;
function readXml() {
    fs.readFile("./sitemap.xml", function (err, data) {
        if (data) {
            var existingSitemapList = JSON.parse(convert.xml2json(data, options));
            var existingSitemapURLStringList = [];
            if (existingSitemapList.urlset &&
                existingSitemapList.urlset.url &&
                existingSitemapList.urlset.url.length) {
                existingSitemapURLStringList = existingSitemapList.urlset.url.map(function (ele) { return ele.loc._text; });
            }
            for (var _i = 0, projects_2 = projects; _i < projects_2.length; _i++) {
                var project = projects_2[_i];
                if (existingSitemapURLStringList.indexOf("".concat(url, "/").concat(project.projectId)) ==
                    -1) {
                    existingSitemapList.urlset.url.push({
                        loc: {
                            _text: "".concat(url, "/").concat(project.projectId)
                        },
                        changefreq: {
                            _text: "monthly"
                        },
                        priority: {
                            _text: 0.8
                        },
                        lastmod: {
                            _text: moment(new Date()).format("YYYY-MM-DD")
                        }
                    });
                }
            }
            createSitemapFile(existingSitemapList);
        }
    });
}
/*
    Method to convert JSON format data into XML format
*/
var createSitemapFile = function (list) {
    var finalXML = convert.json2xml(list, options); // to convert json text to xml text
    saveNewSitemap(finalXML);
};
/*
  Method to Update sitemap.xml file content
*/
var saveNewSitemap = function (xmltext) {
    fs.writeFile("sitemap.xml", xmltext, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
};
readXml();
