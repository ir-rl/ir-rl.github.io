import os
for root, dirs, files in os.walk("."):
    for file in files:
        if file.endswith(".gif"):
            new_file = "_".join(file.split("_")[:2]) + ".gif"
            path_file = os.path.join(root, file)
            new_path_file = os.path.join(root, new_file)
            try:
                os.rename(path_file, new_path_file)
            except:
                raise

# file = "./ram/acc/seed2/video_1400_949a573c964d3b07f419.gif"
# new_file_name = "_".join(file.split("_")[:2]) + ".gif"
# print(new_file_name)