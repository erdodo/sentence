export const MoleculeMdxParserDefault = `
# FlowE 

## _Release V23.3.1.0 (04.08.2023)_
#### WHAT'S NEW

- Legend should be in bottom as a default on charts #FLW-1182
- Adding default color code of title color to favorite colors #FLW-1183
- Setting the value on the Y axis more than the maximum value returned from the data #FLW-1184
- Adding License Key #FLW-1336
- Removing Last Modified By column on plan table #FLW-1388


#### BUG FIXES

- Can not move dashboard folder to folder #FLW-1179
- X Min/Max input language error #FLW-1181
- Problem that exporting (XLSX) with out of date datas #FLW-1207
- Plans does not work accurate scheduled time #FLW-1299
- Next date filter does not work on plan table tab #FLW-1341

#### IMPROVEMENTS

- Language differences correction 4 #FLW-1187
- Language differences correction 5 #FLW-1203
- Fixing the header error & Adding a space above the title #FLW-1219
- Closing of color palettes after marking #FLW-1222


## _Release V23.1.1.1 (07.06.2023)_
#### WHAT'S NEW

- Adding the ability to give min max value on the X axis on the chart #FLW-1165
- Showing the current data on the chart in the group bar #FLW-1166


#### BUG FIXES

- Dissapearing all chart after edit streak #FLW-1097
- Widgets does not keep positions #FLW-1098
- TLS error #FLW-1100
- Save button does not work on Management Pages #FLW-1153
- Export(PNG) button does not work #FLW-1157
- Color custom feature not working #FLW-1164


#### IMPROVEMENTS

- Performans Improvement on getDynamicDashboard API #FLW-1105
- Performans Improvement on getDynamicDashboardList  API #FLW-1152
- Data migration on ROI tables #FLW-1154
- The notification menu should be closed after pressing the screen #FLW-1155
- Chart opacity will be changed to 0.5 #FLW-1161
- Migrate feature must be removed during release change #FLW-1162


## _Release V23.1.2.0 (30.05.2023)_
#### WHAT'S NEW

- Clean job&dashboard data history \tFLW-824
- Adding a color palette to the Group card\tFLW-913
- Save the varchar type on DB2DB transfer\tFLW-951
- Read Excel File from Sharepoint\tFLW-954
- Adding copy/paste feature for dashboard groups\tFLW-964
- Adding content font size features to dashboard\tFLW-965
- Widget Setting should be open, even if the query result null or running stop\tFLW-980
- Adding values above visual data on bar, pie and line charts\tFLW-982
- Adding tooltip on Suggested min/max field on dashboard\tFLW-1004
- The Chart Type field should not be removed after selecting the dataset\tFLW-1005
- Stack field should be removed on chart features\tFLW-1017
- Responsive field should be removed on chart features\tFLW-1018
- Save the column type on DB2DB transfer\tFLW-1024
- Display of very large and very small data in the same widget\tFLW-1025
- Creating a table for ROI calculation\tFLW-1062
- Supporting TR Character on File Attachment \tFLW-1076
- Changing the email attachment type to xlsx\tFLW-1078
- The monotone value should be  default on Cubic Interpolation mode on Dashboard\tFLW-1079
- Sub Title should be added to global options on the dashboard\tFLW-1080
- Adding title properties on all widgets on the dashboard\tFLW-1081
- Changing on default settings for pie chart \tFLW-1082

#### BUG FIXES

- Getting Failed Save error when you import same plan \tFLW-837
- Null exception error on listener node\tFLW-953
- Transfer data functionality does not work on mail listener node\tFLW-956
- Transfer data functionality does not work on javascript language\tFLW-957
- Getting single color on bar charts\tFLW-959
- Title color does not work\tFLW-966
- Timer button does not work\tFLW-981
- The problem that the mail listener node does not work stably\tFLW-984
- Can not add some widgets\tFLW-992
- Resize problem on some widgets\tFLW-993
- Line chart language error\tFLW-1001
- xAxisId and yAxisId problem\tFLW-1014
- User can access plans from plan table if even it does not have authorize\tFLW-1023
- Can not forward mail body without attachment\tFLW-1033
- Wrong configs when export dashboard\tFLW-1070
- Line chart bg color does not work\tFLW-1085
- Stacked bar chart background color problem\tFLW-1086
- Not display group charts\tFLW-1087

#### IMPROVEMENTS

- TOOLBOX-FLOWE 2-Authentication Bypass - Brute Force\tFLW-961
- Tension field should be removed on line chart\tFLW-1003
- Language differences correction 3\tFLW-1060
- SQLNode Connection Refactoring for Result Set Creation\tFLW-1072
`;
