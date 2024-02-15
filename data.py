import json
import requests
import time
from urllib.parse import quote_plus

# with open('iot.json','r+') as data:
#   file_contents = data.read()
  
#   #temp = json.loads(file_contents)
#   # print(type(temp),"\n")

#   for element in file_contents:
#     #print('category ',element['category'])
#     #print(element['category'])
#     for element_brand in element['brands']:
#       #print(element_brand,'\n')
#       #print(list(element_brand.keys())[0])

#       print(element_brand)
#       print(element_brand.get(str(element_brand)),"\n")
      
#       #print(list(element_brand.keys())[0])
#       url = "https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch="+str(element['category'])+str(list(element_brand.keys())[0])+"&pubStartDate=2021-07-04T19:15:08.000&pubEndDate=2021-08-05T00:00:00.000&resultsPerPage=20"
#       #print(url)
#       result = requests.get(url)
#       result_jsons = result.json()
#       print(result)
#       print(result.json())
    

#       element_brand[element_brand.get(str(element_brand))] = result_jsons
#       print("modifié")
#       print(element_brand,"fini")
      
#     #   time.sleep(5)
#   json.dumps(file_contents, indent=4)





### Code from CT
  
import json

# Path to the original JSON file
iot_json_file_path = './iot.json'

# Load the JSON data from the original file
with open(iot_json_file_path, 'r') as file:
    iot_data = json.load(file)

# Mock modification: Adding a "data" field with a mock value to each brand
for category in iot_data:
    for brand in category['brands']:
        brand_name = list(brand.keys())[0]  # Extract brand 
        brand[brand_name] = "mock data"  # Add mock data to the brand
        
        
        #keyword = str(category['category'])+str(brand_name)
        #keyword = str(brand_name)
        #encoded_keyword = quote_plus(keyword)

        url = "https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch="+str(brand_name)+"&pubStartDate=2021-07-04T19:15:08.000&pubEndDate=2021-10-05T00:00:00.000&resultsPerPage=20"
        print(url)
        result = requests.get(url)
        # print("voici le résultat : ",result)

        ##Check the status 
        if result.status_code == 200:
            try:
                result_json = result.json()
                print("\n Voici le result",type(result_json['vulnerabilities']))
                #print(result_json)
                cve_items = result_json["vulnerabilities"]
                print("content of vulnerabilities ",cve_items)

                #print("content of vulnerability",result_json['vulnerabilities'])
                brand[brand_name] = cve_items  # Add mock data to the brand

                # Process the JSON data
            except json.JSONDecodeError:
                print("Error decoding JSON from response")
                brand[brand_name] = "no data"  # Add mock data to the brand
        else:
            print(f"Request failed with status code {result.status_code}")
            brand[brand_name] = "no data"  # Add mock data to the brand


        time.sleep(2)


modified_iot_json_file_path = './iot.json'

with open(modified_iot_json_file_path, 'w') as file:
    json.dump(iot_data, file, indent=4)

modified_iot_json_file_path







#   for category in file_contents:
#     print(category)
    
#https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Microsoft&pubStartDate=2021-07-04T19:15:08.000&pubEndDate=2021-08-05T00:00:00.000&resultsPerPage=20

# keyword = "Wearable DevicesApple (Apple Watch)"
# encoded_keyword = quote_plus(keyword)
# url = f"https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch={encoded_keyword}&pubStartDate=2021-07-04T19:15:08.000&pubEndDate=2021-08-05T00:00:00.000&resultsPerPage=20"