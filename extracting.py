import os
import json
import csv

# Across each vendor 

sample_dataset={"camera":{},"router":{}}
root_path = '/media/hacky-hare/224870c0-ff7f-4009-9ea0-79854d3c355a/ecs289/cve-bin-outputs/cve-bin-outputs-20230312T193617Z-001/cve-bin-outputs'

if os.path.isdir(root_path):
    # The path is a directory, so traverse it using os.walk()
    for dir_path, dir_names, file_names in os.walk(root_path):
        # Do something with the directory path and file names
        if('json' in dir_path):
            dirs = os.path.split(dir_path)[1]
            # print(f"Directory: {dirs}")
            device = dirs.split("_")[1]
            # print("Device:",device)
            vendor = dirs.split("_")[2]
            # print("Vendor:",vendor)
            if(vendor not in sample_dataset[device].keys()):
                sample_dataset[device][vendor]={}            
            for file in file_names:
              if(file.endswith(".json")):
                file_path = dir_path+"/"+file
                model_version = file.split(".json")[0]
                with open(file_path) as f:
                    data=json.load(f)      # subdict = {"package_name":"gcc",
                                                            # "vendor":"gnu",
                                                            # "version":}
                    sub={}
                    array = []
                    for iterative in data:
                        #print(iterative)
                        if(iterative['product'] in sub.keys()):     #"busybox"
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
                    # for k,v in sub.items():
                    #     print(k)
                    #     for key in (v["version"].keys()):
                    #         print(len(v["version"][key]))
                sample_dataset[device][vendor][model_version]=sub
                

                # {'busybox': {"num_packages":30,"num_cves":xx,"CVE list" : [], severity_low":,"severity_medium":,"severity_high":}, 'glibc': 15, 'zlib': 27, 'gcc': 16, 'openssl': 21, 'miniupnpc': 15, 'curl': 15, 'libcurl': 15, 'wpa_supplicant': 6}

package_cve_mapping={}
for product,details in sample_dataset.items():
        for vendors,model_versions in details.items():
                    for model_version,package_details in model_versions.items():
                                    for package,pd  in package_details.items():
                                            if package not in package_cve_mapping.keys():
                                                  package_cve_mapping[package]={}     
                                            for k,v in pd.items():
                                                if(k!='vendor'):
                                                    if(k not in package_cve_mapping[package].keys()):
                                                        print(package+":"+k)
                                                        package_cve_mapping[package][k]={'count':0,'cve_num':0,'cve_list':[],"cve_high":0,"cve_med":0,"cve_low":0}
                                                    package_cve_mapping[package][k]['count']=1+package_cve_mapping[package][k]['count']
                                                    package_cve_mapping[package][k]['cve_list']= list(v.keys())
                                                    cc,ch,cm,cl = 0,0,0,0
                                                    for version,cve_details in v.items():
                                                        cc+=1
                                                        if cve_details['severity']=="HIGH":
                                                            ch+=1
                                                        elif(cve_details['severity']=="MEDIUM"):
                                                                cm+=1
                                                        else:
                                                                cl+=1

                                                        
                                                    # package_cve_mapping[package][k]['cve_num']=cc+package_cve_mapping[package][k]['cve_num']
                                                    # package_cve_mapping[package][k]['cve_high']=ch+package_cve_mapping[package][k]['cve_high']
                                                    # package_cve_mapping[package][k]['cve_med']=cm+package_cve_mapping[package][k]['cve_med']
                                                    # package_cve_mapping[package][k]['cve_low']=cl+package_cve_mapping[package][k]['cve_low']

                                                    package_cve_mapping[package][k]['cve_num']=cc
                                                    package_cve_mapping[package][k]['cve_high']=ch
                                                    package_cve_mapping[package][k]['cve_med']=cm
                                                    package_cve_mapping[package][k]['cve_low']=cl
                                                    

# print(package_cve_mapping)

print("package_cve_mapping dict created... now writing to csv - ")
print("package_count",len(list(package_cve_mapping.keys())) )

field_names= ['Package_Name', 'Version', 'Count', 'Number of CVEs','List of CVEs','CVE_high','CVE_med','CVE_low']
with open("my_dict.csv", mode="w", newline="") as file:

    # Create a CSV writer object
    writer = csv.DictWriter(file, fieldnames=field_names)

    # Write the header row to the CSV file
    writer.writeheader()

    # Loop through each key-value pair in the dictionary
    for package_name, value in package_cve_mapping.items():

        # Write the data row to the CSV file
        writer.writerow({
            "Package_Name": package_name,

        })
        for version, version_details in value.items():
             writer.writerow({
            "Version": version,
            "Count":version_details['count'],
            'Number of CVEs':version_details['cve_num'],
            'List of CVEs' : version_details['cve_list'],
            "CVE_high":version_details['cve_high'],
            "CVE_med":version_details['cve_med'],
            "CVE_low":version_details['cve_low']

        })
             

print("Done")
