// Source - https://blog.testproject.io/2020/03/24/improving-the-quality-of-web-pages-with-lighthouse/
// Performance audit of a website with Lighthouse

const { openBrowser, goto, currentURL, closeBrowser, client } = require('taiko');
const path = require('path.win32');
import lighthouse from '/node_modules/lighthouse';
const config = require('lighthouse/lighthouse-core/config/lr-desktop-config.js');
const ReportGenerator = require('lighthouse/lighthouse-core/report/report-generator');
const fs = require('fs');
(async () => {
  try {
        await openBrowser({ headless: false });
        await goto('taiko.dev');
        let url = await currentURL();
        let port = await client()
                .webSocketUrl.split('/devtools/')[0]
                .replace('ws://', '')
                .split(':')[1];
        let lhr = await lighthouse(
            url,
            {
              port,
              output: 'html',
              logLevel: 'error'
            },
            config
        );
        const report = ReportGenerator.generateReport(lhr.lhr, 'html');
        fs.writeFile('audit.html', report, err => {
            if (err) throw err;
        });
  } 
  catch (error) {console.error(error);} 
  finally {await closeBrowser();}
  })();