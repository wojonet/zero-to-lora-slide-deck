import os
from diffusers import StableDiffusionXLPipeline

pipe = StableDiffusionXLPipeline.from_single_file(
    os.path.abspath('./sd_xl_base_1.0.safetensors'), 
    use_safetensors=True,
)
# or pipe.to("cpu") for CPU
pipe.to("cuda")

prompt = "a beautiful sunset over the ocean"

image = pipe(prompt=prompt).images[0]
# save image to disk
image.save("scene.png")