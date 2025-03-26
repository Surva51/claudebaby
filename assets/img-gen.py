import os
import numpy as np
from PIL import Image, ImageDraw

# Define image sizes and corresponding filenames
image_specs = [
    ('icon128.png', 128),
    ('icon48.png', 48),
    ('icon32.png', 32),
    ('icon16.png', 16),
]

# Generate images with a banana shape and save as PNG files
for filename, size in image_specs:
    # Create a transparent image
    img = Image.new('RGBA', (size, size), (255, 255, 255, 0))

    # Draw a banana shape
    draw = ImageDraw.Draw(img)
    draw.pieslice((size * 0.2, size * 0.1, size * 0.8, size * 0.9), start=30, end=210, fill=(255, 225, 53, 255))
    draw.pieslice((size * 0.3, size * 0.2, size * 0.9, size * 0.8), start=30, end=210, fill=(255, 255, 255, 0))

    # Save image to file
    img.save(filename)
    print(f'Generated {filename} ({size}x{size})')