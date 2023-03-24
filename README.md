# IOSC2: Identification & analysis of Outdated Software Components and corresponding CVEs in IoT firmware


Abstract — Third-party software components (TPCs) are an integral part of industrial products. Vulnerabilities in TPCs could impact the entire product segment. There are existing software component analysis tools for generic software-based products, but the identification of TPCs and associated vulnerabilities still need to be explored more in embedded firmware binaries. As part of this project, we have targeted real-world embedded firmware binaries for IoT devices (Routers & Cameras) to identify the TPCs (we refer to them further as packages), corresponding versions of the packages,  and associated existing CVEs with respect to different third-party packages used in these devices. 

We have performed static analysis on 107 firmware datasets to address our research questions:
RQ1: What are the commonly found third-party software components in IoT devices' firmware? 
RQ2: How likely is it to find outdated software components in such firmware?
RQ3: What are the corresponding existing vulnerabilities w.r.t those software components?

The analysis shows an alarming scenario. Most of these devices use third-party packages that are outdated, hence the vulnerabilities related to the outdated version of the packages still persist in these devices. The rate at which these third-party packages are updated is not the same as the update rate of the firmware. Moreover, even with the update in the firmware versions, not all the third-party packages are updated showing an alarming security risk to these devices. 



File Layout:

1. Website : Contains files for the GUI built for IOSC^2

Python Scripts:
1. auto_extractor.py : Script to extract filesystems from the binaries
2. extracting.py : Extract dataset from the various binaries and their CVE's
3. plotting.py : Plot sankey graphs for RQ2 and RQ3
4. weakness.py : Mapping CVE's to CWE's 

Dataset :
1. dataset.json : Entire dataset used in the project
2. dataset.csv : Entire dataset in csv format
3. packages.csv : Mapping of packages to their vendors
