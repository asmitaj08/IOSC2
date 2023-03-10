import os 
import sys
import subprocess           # Execute shell commands 
from subprocess import PIPE                 
import binwalk              # Binwalk is used in the backened for firmware binary extraction
import re                   # regex for pattern matching

# # For UI using tkinter
# import tkinter as tk
# from tkinter import StringVar, filedialog
# from tkinter import ttk
# from tkinter import messagebox
# from tkinter import *
# import webbrowser
# import pandas as pd # for csv file read
import csv


# Function to take input from user via console
# Function to take the binary file path input from user on console
# def take_binary_path():
#     binary_path_input = input("Enter the path of the binary file: ")
#     #Check if the file exists in the path
#     assert os.path.isfile(binary_path_input), "File %s not found. Please enter the correct path of binary" %binary_path_input
#     return binary_path_input

# # Function to take directly the path of the already extracted binary
# def take_extracted_directory_path():
#     extracted_directory_path_input = input("Enter the path of the extracted directory: ")     
#     assert os.path.isdir(extracted_directory_path_input), "Directory not found. Please enter the correct path"
#     return extracted_directory_path_input

# def get_binary_file_path() :
#         for root, dirs, files in os.walk(input_dir):
#             for filename in files:
#                 if filename.endswith(".bin"): 
#                     binary_file_path = (os.path.join(root, filename))
#                     retrun binary_file_path

# Function to extract the firmware binary if the path on binary is provided (not the extracted binary)
def extract_binary(binary_file_path):
        print("Extracting the binary %s" %binary_file_path)
        try:
            # Using binwalk APIs - https://github.com/ReFirmLabs/binwalk/blob/master/API.md
            # binwalk.scan(binary_file_path,signature=True, quiet=True, extract=True, entropy=True)  
            binwalk.scan(binary_file_path,signature=True, quiet=True, extract=True)   
            print("Extraction done. The extracted file tree is in file 'filestructure.txt' ")
        # list_d = subprocess.run(["tree","_tp-link-archer-gx90-router.bin*"])
            os.system("tree _* > filestructure.txt") #replace os.system with subprocess
        except binwalk.ModuleException as e:
            print ("Binwalk critical failure:", e)

# Function to traverse/look for a directory in the extracted binary
def get_extracted_dir_path(directory_name, directory_path):
        result = "Not found"
        # Walking top-down from the root
        for root, dir, files in os.walk(directory_path):
            if directory_name in dir:
                return os.path.join(root, directory_name)
        return result

# # Function to look CVE database to report vulnerabilities w.r.t identified version number of the binary
# def cve_bin_tool():
#         # firmware_intake_options = input("Enter 1 for entering the binary path \nEnter 2 for entering the extracted file path: ")
#         # if(firmware_intake_options=='1'):
#             # bin_file_path = take_binary_path()
#         #     os.system("rm -r _*")
#         #     extract_binary(bin_file_path)
#         #     dir_path_part = get_dir_path("bin", ".")
#         # # Fetching the root path of the extracted binary
#         #     dir_path = re.sub('/bin', '', dir_path_part)

#         # elif(firmware_intake_options=='2'):
#         #     dir_path = take_extracted_directory_path()
            
#         # else:
#         #     print("Choose the correct option")
#         #     return

#         # with open('cve_checker.csv', 'w') as f:
#         #     f.write('cve-bin-tool %s \n' %dir_path)
#         #     cve_check = subprocess.Popen(['cve-bin-tool', dir_path, '-o cve_checker -f csv'], stdout=f)
#         cve_check = subprocess.run(['cve-bin-tool', dir_path, '-o', output_file_name, '-f', 'csv,json,html'])
#         firmwalker_output = subprocess.run(['./firmwalker.sh', dir_path])



if __name__ == '__main__':
    if len(sys.argv) < 3:
        print("Requires binary path, and filename")
        exit(1)

    bin_file_path = sys.argv[1]
    output_filename = sys.argv[2]

    os.system("rm -r _*")
    extract_binary(bin_file_path)
    dir_path_part = get_extracted_dir_path("bin", ".")
    # Fetching the root path of the extracted binary
    dir_path = re.sub('/bin', '', dir_path_part)
    cve_check = subprocess.run(['cve-bin-tool', dir_path, '-o', output_filename, '-f', 'csv,json,html'])

