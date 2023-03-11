import os
import json

sample_dataset={"camera":{},"router":{}}
root_path = '/Users/seemaupadhya/Documents/Workspace/Project/ecs289m-project/cve-bin-outputs'

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
                        print(iterative)
                        if(iterative['product'] in sub.keys()):     #"busybox"
                                if(iterative['version'] in sub[iterative['product']]['version'].keys()):
                                    sub[iterative['product']]['version'][iterative['version']][iterative['cve_number']] =  {
                                                                                "severity": iterative['severity'],
                                                                                "score": iterative['score'],
                                                                                "source":iterative['source']}
                                else:
                                    sub[iterative['product']]['version'][iterative['version']]={iterative['cve_number']:{
                                                                                "severity": iterative['severity'],
                                                                                "score": iterative['score'],
                                                                                "source":iterative['source']}}
                        else:
                            sub[iterative['product']] = {'vendor' : iterative['vendor'], 'version':{
                                                                    iterative['version'] : {iterative['cve_number']:{
                                                                            "severity": iterative['severity'],
                                                                            "score": iterative['score'],
                                                                            "source":iterative['source']
                                                                    }}}}
                    for k,v in sub.items():
                        print(k)
                        for key in (v["version"].keys()):
                            print(len(v["version"][key]))
                sample_dataset[device][vendor][model_version]=sub
                

                