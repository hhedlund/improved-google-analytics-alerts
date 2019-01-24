# improved-google-analytics-alerts

Send email alerts from Google Spreadsheets with Apps Scripts using Google Analytics API Add-On for Spreadsheets

## Getting started

#### Step 1. Create the spreadsheet

Retreive the Google Analytics data you want to work with via the Google Analytics API Add-on. In my case I choose to filter on pageviews with title that contains "Not Found" OR "404" and has has had more than 10 page views to filter out anomalies. Results are also only from yesterday but can be changed to better suit your amount of traffic or how fresh you want the alert to be. Results are also sorted by page views in descending order.

Example report configuration:

* Report Name: report-name
* View ID: analytics-view
* Start Date: yesterday
* End Date: today
* Dimensions:	ga:hostname,ga:pagePath, ga:pageTitle, ga:previousPagePath
* Order: -ga:pageviews
* Filters: ga:pageTitle=~(your-page-title)|404;ga:pageviews>10

#### Step 2. Run the Google Analytics Add-On

* You should now have some data in the report to work with.

#### Step 3. Create a Google Apps Script

* Click **Tools** -> **Script Editor** in the Top Menu.
* Create new script file if not available.
* Copy code from file Code.gs in repository
* Make sure to modify variables found in run() function to suit your GA configuration and Spreadsheet IDs and the emails of your recipients

#### Step 4. Create HTML Template

* Create file **template.html** in the apps script project
* Copy code from teplate.html in repository

#### Step 5. Scheduling

* Make sure to schedule the GA report and the Apps script in sequence to report has data when the script is running.
