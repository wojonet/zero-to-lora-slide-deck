# https://huggingface.co/docs/diffusers/index
# pip install pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118 
# pip install transformers git+https://github.com/huggingface/diffusers 

import torch
import os
from diffusers import StableDiffusionXLPipeline, EulerDiscreteScheduler

# pipe = StableDiffusionXLPipeline.from_pretrained(
#     os.path.abspath('stabilityai/stable-diffusion-xl-base-1.0'), torch_dtype=torch.float16, variant="fp16", use_safetensors=True
# )
pipe = StableDiffusionXLPipeline.from_single_file(
    os.path.abspath('./sd_xl_base_1.0.safetensors'), 
    torch_dtype=torch.float16, 
    variant="fp16", 
    use_safetensors=True,
)
pipe.to("cuda")

prompt = "a photo of an old man on a park bench reading the newspaper, black slacks and suspenders, buttoned up white shirt, long white hair, clean shaven"
negative_prompt = "lowres, low quality, blurry, noisy"
generator = torch.Generator(device="cpu").manual_seed(1)

pipe.scheduler = EulerDiscreteScheduler.from_config(pipe.scheduler.config, use_karras_sigmas=True)

image = pipe(prompt=prompt,
             negative_prompt=negative_prompt,
             generator=generator,
             num_inference_steps=20,
             guidence_scale=7.5,
             width=1024,
             height=1024,
             ).images[0]
# save image to disk
image.save("a.png")

