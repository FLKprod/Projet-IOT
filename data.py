import json
import requests




api_url = "https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=microsoft&pubStartDate=2021-08-04T19:15:08.000&pubEndDate=2021-08-05T00:00:00.000"

response = requests.get(api_url)
response.json()

# response_display = json.dumps(response,indent=4)

for element in response:
    print(element)

# print("tests")
# print(response_display)

