# improved-google-analytics-alerts
Send email alerts from Google Spreadsheets with Apps Scripts using Google Analytics API Add-On for Spreadsheets

## Getting started

#### Step 1. Create the spreadsheet

Retreive the data you want to work with. In my case I choose to filter on pageviews with title that contains "Not Found" OR "404" and has has had more than 10 page views to filter out anomalies. Results are also only from yesterday but can be changed to better suit your amount of traffic or how fresh you want the alert to be. Results are also sorted by page views in descending order.

* Report Name: report-name
* View ID: analytics-view
* Start Date: yesterday
* End Date: today
* Dimensions:	ga:hostname,ga:pagePath, ga:pageTitle, ga:previousPagePath
* Order: -ga:pageviews
* Filters: ga:pageTitle=~(your-page-title)|404;ga:pageviews>10

#### Step 2. Run the Google Analytics Add-On & Set schedule

I choose to schedule the report to run everyday early in the morning between 07.00-08.00.

You should now have some data in the report to work with.

#### Step 3. Create a Google Apps Script

* Click **Tools** -> **Script Editor** in the Top Menu.
* Create new script file if not available.
* Use code below in Code.gs:
