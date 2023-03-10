
import os
import sys

if __name__ == '__main__':
    if len(sys.argv) < 4:
        print("Requires python script path, input directory path with firmware binary files dataset, output directory path")
        exit(1)

    python_script_path = sys.argv[1]
    input_directory_path = sys.argv[2]
    output_directory_path = sys.argv[3]


    if not os.path.exists(input_directory_path):
        print("Given directory path does not exists")
        exit(1)

    if not os.path.exists(output_directory_path):
        os.mkdir(output_directory_path)

    os.system("cd "+output_directory_path)
    print(os.system("pwd"))
    
    

    count_files_processed = 0
    count_files_failed = 0
    failed_files_list = []
    for filename in os.listdir(input_directory_path):
        f = os.path.join(input_directory_path, filename)
        # os.path.basename(f)
        if os.path.isfile(f) and filename.endswith(".bin"):
            cmd = "python3 " + python_script_path + " " + f + " " + filename
            print(cmd)
            if os.system(cmd) == 0:
                count_files_processed += 1 
            else:
                count_files_failed += 1
                failed_files_list.append(filename)


        else:
            print("Given directory should only have files")
            exit(1)

    print("All files processed")
    print("Total Failed files ", count_files_failed)
    print("Total files passed ", count_files_processed)
    print("List of failed files ", failed_files_list)
                 