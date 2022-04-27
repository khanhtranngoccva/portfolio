from PIL import Image
import os


def process_file(image_name, basepath):
    image = Image.open(os.path.join(basepath, image_name))
    image.save(os.path.join(basepath, os.path.splitext(image_name)[0]+".webp"), format="WEBP")
    image.close()


for subfolder in os.listdir(".\\img"):
    if os.path.isdir(f'img\\{subfolder}'):
        for file in os.listdir(f'img\\{subfolder}'):
            ext = os.path.splitext(file)[1]
            if ext == ".svg":
                pass
            else:
                process_file(file, f'img\\{subfolder}')
