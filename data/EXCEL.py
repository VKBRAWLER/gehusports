import pandas as pd
import json
# Read the Excel file
df = pd.read_excel('data/excel/events.xlsx')

# Convert the data to a dictionary
data = df.to_dict(orient='records')

# Write the data to a JSON file
with open('data/json/events.json', 'w') as f:
    json.dump(data, f, indent=4)