import pandas as pd
import json
# Read the Excel file
df1 = pd.read_excel('data/excel/events.xlsx')
df2 = pd.read_excel('data/excel/register.xlsx')
df3 = pd.read_excel('data/excel/coordinatorlist.xlsx')

# Convert the data to a dictionary
data1 = df1.to_dict(orient='records')
data2 = df2.to_dict(orient='records')
data3 = df3.to_dict(orient='records')

# Write the data to a JSON file
with open('data/json/events.json', 'w') as f:
    json.dump(data1, f, indent=4)
with open('data/json/register.json', 'w') as f:
    json.dump(data2, f, indent=4)
with open('data/json/coordinatorlist.json', 'w') as f:
    json.dump(data3, f, indent=4)