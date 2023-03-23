import os
import json
import csv

sample_dataset={"camera":{},"router":{}}
root_path = '/Users/seemaupadhya/Documents/Workspace/Project/ecs289m-project/cve-bin-outputs'

if os.path.isdir(root_path):
    # The path is a directory, so traverse it using os.walk()
    for dir_path, dir_names, file_names in os.walk(root_path):
        # Do something with the directory path and file names
        if('json' in dir_path):
            dirs = os.path.split(dir_path)[1]
            device = dirs.split("_")[1]
            vendor = dirs.split("_")[2]
            if(vendor not in sample_dataset[device].keys()):
                sample_dataset[device][vendor]={}            
            for file in file_names:
              if(file.endswith(".json")):
                file_path = dir_path+"/"+file
                model_version = file.split(".json")[0]
                with open(file_path) as f:
                    data=json.load(f)
                    sub={}
                    array = []
                    for iterative in data:
                        if(iterative['product'] in sub.keys()): 
                                if(iterative['version'] in sub[iterative['product']].keys()):
                                    sub[iterative['product']][iterative['version']][iterative['cve_number']] =  {
                                                                                "severity": iterative['severity'],
                                                                                "score": iterative['score'],
                                                                                "source":iterative['source']}
                                else:
                                    sub[iterative['product']][iterative['version']]={iterative['cve_number']:{
                                                                                "severity": iterative['severity'],
                                                                                "score": iterative['score'],
                                                                                "source":iterative['source']}}
                        else:
                            sub[iterative['product']] = {'vendor' : iterative['vendor'], 
                                                                    iterative['version'] : {iterative['cve_number']:{
                                                                            "severity": iterative['severity'],
                                                                            "score": iterative['score'],
                                                                            "source":iterative['source']
                                                                    }}}
                sample_dataset[device][vendor][model_version]=sub
json_data = json.dumps(sample_dataset)
with open("dataset.json", "w") as outfile:
    outfile.write(json_data)

field_names= ['Device_Name', 'Vendor', 'Firmware_Version','Software Component Package','Software Component Package Version', 'CVEs','Score','Severity','Source']
with open("output.csv", mode="w", newline="") as file:

    # Create a CSV writer object
    writer = csv.DictWriter(file, fieldnames=field_names)

    # Write the header row to the CSV file
    writer.writeheader()

    # Loop through each key-value pair in the dictionary
    for device_name, value in sample_dataset.items():

        # Write the data row to the CSV file
        writer.writerow({
            "Device_Name": device_name,

        })
        for vendor, version_details in value.items():
            writer.writerow({
                            "Vendor": vendor})
            for version,details in version_details.items():
                writer.writerow({
                            "Firmware_Version": version})
                for package,package_details in details.items():
                    writer.writerow({
                            "Software Component Package": package})
                    for version,vd in package_details.items():
                          if(version != 'vendor'):
                            writer.writerow({
                                "Software Component Package Version": version})
                                
                            for cve,cve_details in vd.items():                         
                                    writer.writerow({
                                    "CVEs":cve,
                                    "Score":cve_details['score'],
                                    "Severity":cve_details['severity'],
                                    "Source":cve_details['source'],
                                    })

#Mapping packages to their corresponding versions and their vulnerabilities
package_cve_mapping={}
vendor_package_mapping={}
for product,details in sample_dataset.items():
        for vendors,model_versions in details.items():
                    for model_version,package_details in model_versions.items():
                                    for package,pd  in package_details.items():
                                            if package not in package_cve_mapping.keys():
                                                  package_cve_mapping[package]={}     
                                            for k,v in pd.items():
                                                if(k!='vendor'):
                                                    if(k not in package_cve_mapping[package].keys()):
                                                        package_cve_mapping[package][k]={'count':0,'cve_num':0,"cve_high":0,"cve_med":0,"cve_low":0}
                                                    package_cve_mapping[package][k]['count']=1+package_cve_mapping[package][k]['count']
                                                    cc,ch,cm,cl = 0,0,0,0
                                                    for version,cve_details in v.items():
                                                        cc+=1
                                                        if cve_details['severity']=="HIGH":
                                                            ch+=1
                                                        elif(cve_details['severity']=="MEDIUM"):
                                                                cm+=1
                                                        else:
                                                                cl+=1
                                                    package_cve_mapping[package][k]['cve_num']=cc+package_cve_mapping[package][k]['cve_num']
                                                    package_cve_mapping[package][k]['cve_high']=ch+package_cve_mapping[package][k]['cve_high']
                                                    package_cve_mapping[package][k]['cve_med']=cm+package_cve_mapping[package][k]['cve_med']
                                                    package_cve_mapping[package][k]['cve_low']=cl+package_cve_mapping[package][k]['cve_low']


for product,details in sample_dataset.items():
        if(product == "router"):    #change to camera when required
            for vendors,model_versions in details.items():
                        for model_version,package_details in model_versions.items():
                                        if(vendors not in vendor_package_mapping.keys()):
                                            vendor_package_mapping[vendors]={}
                                        for key,value in package_details.items():
                                            if(key not in vendor_package_mapping[vendors]):
                                                    vendor_package_mapping[vendors][key]={"count":0,"version":[]}
                                            vendor_package_mapping[vendors][key]["count"]= 1+vendor_package_mapping[vendors][key]["count"]
                                            for version in sample_dataset['router'][vendors][model_version][key].keys():
                                                if(version != "vendor" and version not in vendor_package_mapping[vendors][key]["version"]):
                                                    vendor_package_mapping[vendors][key]["version"].append(version)

#Writing the above dictionary to csv file
# field_names= ['Package_Name', 'Version', 'Count', 'Number of CVEs','CVE_high','CVE_med','CVE_low']
# with open("my_dict.csv", mode="w", newline="") as file:

#     # Create a CSV writer object
#     writer = csv.DictWriter(file, fieldnames=field_names)

#     # Write the header row to the CSV file
#     writer.writeheader()

#     # Loop through each key-value pair in the dictionary
#     for package_name, value in package_cve_mapping.items():

#         # Write the data row to the CSV file
#         writer.writerow({
#             "Package_Name": package_name,

#         })
#         for version, version_details in value.items():
#              writer.writerow({
#             "Version": version,
#             "Count":version_details['count'],
#             'Number of CVEs':version_details['cve_num'],
#             "CVE_high":version_details['cve_high'],
#             "CVE_med":version_details['cve_med'],
#             "CVE_low":version_details['cve_low']

#         })


firmware_cve_mapping={}
for product,details in sample_dataset.items():
        for vendors,model_versions in details.items():     
                    for model_version,package_details in model_versions.items():
                                    firmware_cve_mapping[model_version]={}
                                    for package,pd  in package_details.items():
                                            # if package not in firmware_cve_mapping.keys():
                                        firmware_cve_mapping[model_version][package]={}     
                                        for k,v in pd.items():
                                            if(k!='vendor'):
                                                firmware_cve_mapping[model_version][package][k]={'count':0,'cve_nums':[]}

                                                firmware_cve_mapping[model_version][package][k]['count']=len(sample_dataset[product][vendors][model_version][package][k].keys())
                                                firmware_cve_mapping[model_version][package][k]['cve_nums']=list(sample_dataset[product][vendors][model_version][package][k].keys())

#Writing the above dictionary to csv file
# field_names= ['Firmware', 'Affected Software Components','Version','CVE Count', 'CVE Numbers']
# with open("my_dict.csv", mode="w", newline="") as file:
#      # Create a CSV writer object
#     writer = csv.DictWriter(file, fieldnames=field_names)

#     # Write the header row to the CSV file
#     writer.writeheader()

#     # Loop through each key-value pair in the dictionary
#     for vendor_name, value in firmware_cve_mapping.items():

#         # Write the data row to the CSV file
#         writer.writerow({
#             "Firmware": vendor_name,

#         })
#         for package, package_details in value.items():
#                 for k,v in value[package].items():
#                     writer.writerow({
#                     "Affected Software Components": package,
#                     "Version": k,
#                     "CVE Count":v['count'],
#                     'CVE Numbers':v['cve_nums'],
#                     })

package_mapping={}
for product,details in sample_dataset.items():
        for vendors,model_versions in details.items():
              for model_version,package_details in model_versions.items():
                    for package,pd  in package_details.items():#{'avertx': {'busybox': {2}, 'glibc': 2, 'openssl': 2, 'libexpat': 2, 'point-to-point_protocol': 2, 'ntp': 2, 'dnsmasq': 2, 'wpa_supplicant': 2, 'vsftpd': 2, 'iptables': 2}, 'tplink': {'gcc': 12, 'openssl': 12, 'lighttpd': 12, 'miniupnpc': 12, 'point-to-point_protocol': 12, 'libjpeg': 5, 'zlib': 2}, 'trendnet': {'gcc': 3, 'openssl': 3, 'busybox': 3, 'libjpeg': 3, 'point-to-point_protocol': 3, 'stunnel': 3}, 'dlink': {'gcc': 4, 'curl': 4, 'libcurl': 4, 'busybox': 6, 'iptables': 6, 'openssl': 6, 'stunnel': 4, 'point-to-point_protocol': 6, 'libjpeg': 4, 'lua': 3, 'glibc': 3, 'wpa_supplicant': 3, 'libexpat': 3, 'e2fsprogs': 3, 'd-bus': 3, 'dbus': 3, 'libdbus': 3, 'ntp': 3, 'vsftpd': 3, 'zlib': 3, 'sqlite': 2}, 'reolink': {'busybox': 31, 'glibc': 16, 'zlib': 28, 'gcc': 17, 'openssl': 22, 'miniupnpc': 16, 'curl': 16, 'libcurl': 16, 'wpa_supplicant': 7}}
                        if(pd['vendor'] not in package_mapping.keys()):
                            package_mapping[pd['vendor']]=set()
                        package_mapping[pd['vendor']].add(package)


#Writing the above dictionary to csv file
# field_names= ['Package Vendor', 'Packages']
# with open("my_dict.csv", mode="w", newline="") as file:
#      # Create a CSV writer object
#     writer = csv.DictWriter(file, fieldnames=field_names)

#     # Write the header row to the CSV file
#     writer.writeheader()

#     # Loop through each key-value pair in the dictionary
#     for package_vendor, packages in package_mapping.items():

#         # Write the data row to the CSV file
#         writer.writerow({
#             "Package Vendor": package_vendor,
#             "Packages": packages

#         })

#For Method1 of RQ2
for product,details in sample_dataset.items():
    for vendors,model_versions in details.items():
        for model_version,package_details in model_versions.items():
            for package,pd  in package_details.items():
                if(package == "gcc"):           #Replace with package accordingly
                    print(model_version+":")
                    print(pd.keys())
                        