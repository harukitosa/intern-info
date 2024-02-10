const internshipReports = require("./data.json");

function convertToJsonMarkdownTable(reports) {
    let markdownTable = "| タイトル | 会社名 | Year | 作成者 |\n";
    markdownTable += "| --- | --- | --- | --- |\n";

    reports.forEach((report) => {
        markdownTable += `| [${report.title}](${report.url}) | ${report.company_name} | ${report.year} | |\n`;
    });

    return markdownTable;
}

console.log(convertToJsonMarkdownTable(internshipReports.sort((a, b) => b.year - a.year)));
