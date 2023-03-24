import json
import requests
from cwe import Database

#Mapping CVE's to their CWE's based on software package : RQ3
dict = {}
cve_details = ['CVE-2008-1685','CVE-2000-1219', 'CVE-2002-2439', 'CVE-2015-5276', 'CVE-2018-12886', 'CVE-2019-15847', 'CVE-2021-37322']
for cve in cve_details:
    data = "https://services.nvd.nist.gov/rest/json/cves/2.0?cveId="+cve
    response = requests.get(data)
    status_code = response.status_code
    try:
        cwe_data = response.json()
        response.close()
        if(status_code==200):
            cwe = cwe_data['vulnerabilities'][0]['cve']["weaknesses"][0]['description'][0]['value']
            if(cwe!="NVD-CWE-Other"):
                db = Database()
                dict[cve]={cwe : db.get(int(cwe.split('-')[1])).name}
        else:
            print("Couldnt fetch:"+cve)
    except Exception as error:
        print(error)

print(dict)