import json
import requests

with open('iot.json','r') as data:
  file_contents = data.read()

  temp = json.loads(file_contents)
  print(type(temp),"\n")
  for element in temp:
    print('category ',element['category'])
    #print(element['category'])
    for element_brand in element['brands']:
      print(element_brand)
    

   
#   for category in file_contents:
#     print(category)
    
#https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Microsoft&pubStartDate=2021-07-04T19:15:08.000&pubEndDate=2021-08-05T00:00:00.000&resultsPerPage=20




