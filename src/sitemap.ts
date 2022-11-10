const convert = require("xml-js"),
  fs = require("fs"),
  options = {
    compact: true,
    ignoreComment: true,
    spaces: 4,
  },
  moment = require("moment");
const url = "https://www.elsabenoldi.com";
import { BENOLDI_PROJECTS } from "./mock/projects";

const projects = BENOLDI_PROJECTS;

// projects = project;
function readXml() {
  fs.readFile("./sitemap.xml", (err, data) => {
    if (data) {
      const existingSitemapList = JSON.parse(convert.xml2json(data, options));
      let existingSitemapURLStringList = [];
      if (
        existingSitemapList.urlset &&
        existingSitemapList.urlset.url &&
        existingSitemapList.urlset.url.length
      ) {
        existingSitemapURLStringList = existingSitemapList.urlset.url.map(
          (ele) => ele.loc._text
        );
      }
      for (const project of projects) {
        if (
          existingSitemapURLStringList.indexOf(`${url}/${project.projectId}`) ==
          -1
        ) {
          existingSitemapList.urlset.url.push({
            loc: {
              _text: `${url}/${project.projectId}`,
            },
            changefreq: {
              _text: "monthly",
            },
            priority: {
              _text: 0.8,
            },
            lastmod: {
              _text: moment(new Date()).format("YYYY-MM-DD"),
            },
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
const createSitemapFile = (list) => {
  const finalXML = convert.json2xml(list, options); // to convert json text to xml text
  saveNewSitemap(finalXML);
};

/*
  Method to Update sitemap.xml file content
*/
const saveNewSitemap = (xmltext) => {
  fs.writeFile("sitemap.xml", xmltext, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
};

readXml();
