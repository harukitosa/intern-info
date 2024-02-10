const internshipReports = require("./data.json");

function convertToJsonMarkdownTable(reports) {
    let markdownTable = "| タイトル | 会社名 | Year | 作成者 |\n";
    markdownTable += "| --- | --- | --- | --- |\n";

    reports.forEach((report) => {
        markdownTable += `| [${report.title.replace(/\r?\n/g, '')}](${report.url.replace(/\r?\n/g, '')}) | ${report.company_name.replace(/\r?\n/g, '')} | ${report.year.replace(/\r?\n/g, '')} | |\n`;
    });

    return markdownTable;
}

console.log(convertToJsonMarkdownTable(internshipReports.sort((a, b) => b.year - a.year)));
