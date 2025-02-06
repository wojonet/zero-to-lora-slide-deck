import { useEffect, useRef } from 'react'
import Reveal from 'reveal.js'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import 'reveal.js/plugin/highlight/monokai.css'
import Step from './components/Step'
import TwoColumnLayout from './components/layouts/TwoColumnLayout'
import Cfg from './components/Cfg'
import SamplerName from './components/SamplerName'
import Scheduler from './components/Scheduler'
import Denoise from './components/Denoise'

function App() {
  const deckDivRef = useRef(null) // reference to deck container div
  const deckRef = useRef(null) // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: 'slide',
      slideNumber: 'h.v',
      plugins: [RevealHighlight],
      // other config options
    })

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    })

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy()
          deckRef.current = null
        }
      } catch (e) {
        console.warn('Reveal.js destroy call failed.')
      }
    }
  }, [])

  // generate numbers 1-99
  const steps = Array.from({ length: 99 }, (_, i) => i + 1)
  const cfgs = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 7.5, 8.0, 9.0, 10.0]
  const samplers = [
    {
      name: 'euler',
      item: 0,
    },
    {
      name: 'heunpp2',
      item: 1,
    },
    {
      name: 'dpm_2',
      item: 2,
    },
    {
      name: 'dpmpp_2s_ancestral',
      item: 3,
    },
    {
      name: 'dpmpp_sde_gpu',
      item: 4,
    },
    {
      name: 'dpmpp_2m_sde_gpu',
      item: 5,
    },
    {
      name: 'lcm',
      item: 6,
    },
    {
      name: 'ipndm_v',
      item: 7,
    },
    {
      name: 'ddim',
      item: 8,
    },
    {
      name: 'uni_pc_bh2',
      item: 9,
    },
  ]

  const schedulers = [
    {
      name: 'normal',
      item: 0,
    },
    {
      name: 'karras',
      item: 1,
    },
    {
      name: 'exponential',
      item: 2,
    },
    {
      name: 'simple',
      item: 3,
    },
    {
      name: 'ddim_uniform',
      item: 4,
    },
    {
      name: 'liner_quadratic',
      item: 5,
    },
    {
      name: 'lm_quadratic',
      item: 6,
    },
  ]

  const denoise = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]

  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    <div className="reveal" ref={deckDivRef}>
      <div className="slides">
        <section>
          <h1 className="r-fit-text">From Zero to LoRA</h1>
          <p>An intro to local AI image generation</p>
        </section>
        <section>
          <TwoColumnLayout
            leftCol={
              <div>
                <h3>Alec Wojciechowski</h3>
                <p>
                  <a href="mailto:wojonet@gmail.com">wojonet@gmail.com</a>
                </p>
                <p>Full Stack Developer</p>
                <p>C# | .NET | Next.js | React</p>
              </div>
            }
            rightCol={
              <div>
                <p>
                  <img src="/img/Sprite-0002.png" alt="placeholder" />
                </p>
                <p>* Not AI generated</p>
              </div>
            }
          />
        </section>
        <section>
          <section>
            <h2>How to generate an AI image</h2>
          </section>
          <section>
            <h3>OpenAI ChatGPT</h3>
            <img src="/img/dalle-ai/prompt.png" alt="Dall-e generated farm girl" class="r-stretch" />
          </section>
          <section>
            <h3>Bing Copilot</h3>
            <img src="/img/bing-ai/prompt.png" alt="Bing Copilot generated farm girl" class="r-stretch" />
          </section>
          <section>
            <h3>Google ImageFX</h3>
            <img src="/img/imagefx-ai/prompt.png" alt="Bing Copilot generated farm girl" class="r-stretch" />
          </section>
          <section>
            <h3>Google Gemini</h3>
            <img src="/img/gemini-ai/prompt.png" alt="Bing Copilot generated farm girl" class="r-stretch" />
          </section>
          <section>
            <h2>Refining results</h2>
          </section>
          <section>
            <h3>OpenAI ChatGPT</h3>
            <img src="/img/dalle-ai/refine.png" alt="Dall-e generated refine prompt" class="r-stretch" />
          </section>
          <section>
            <h3>Bing Copilot</h3>
            <img src="/img/bing-ai/refine.png" alt="Bing Copilot refine prompt" class="r-stretch" />
          </section>
          <section>
            <h3>Google ImageFX</h3>
            <img src="/img/imagefx-ai/refine.png" alt="Google ImageFX refine prompt" class="r-stretch" />
          </section>
          <section>
            <h3>Google Gemini</h3>
            <p
              style={{
                fontSize: '10rem',
              }}
            >
              ???
            </p>
          </section>
        </section>
        <section>
          <h2>AI-As-A-Service</h2>
          <TwoColumnLayout
            leftCol={
              <div>
                <h3>Pros</h3>
                <ul>
                  <li>Easy</li>
                  <li>Fast</li>
                  <li>No local compute required</li>
                  <li>Good Quality</li>
                </ul>
              </div>
            }
            rightCol={
              <div>
                <h3>Cons</h3>
                <ul>
                  <li>Pricing</li>
                  <li>Lack of customization</li>
                  <li>Censorship</li>
                </ul>
              </div>
            }
          />
        </section>
        <section>
          <h2>Local Generative Image AI</h2>
          <img
            src="/img/joy-jump.png"
            alt="old man jumping for joy because he can generate his own AI images while his wife looks on in amazement"
            class="r-stretch"
          />
        </section>
        <section>
          <section>
            <TwoColumnLayout
              leftCol={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3>Hardware</h3>
                    <p>As beefy a NVIDIA card as you can('t) afford and/or find</p>
                    <p>More VRAM = larger models</p>
                    <p>More CUDA cores = faster</p>
                  </div>
                  <br></br>
                  <div>
                    <h3>Software</h3>
                    <p>Python 3</p>
                  </div>
                </div>
              }
              rightCol={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                  }}
                >
                  <img
                    src="/img/beefy.png"
                    alt="beefy computer"
                    class="r-stretch"
                    style={{
                      maxWidth: '100%',
                    }}
                  />
                </div>
              }
            />
          </section>
        </section>
        <section>
          <section>
            <h2>Local AI Tools</h2>
            <p>
              <strong>We'll look at one of these:</strong>
            </p>
            <p>ComfyUI</p>
            <p style={{ textDecoration: 'line-through' }}>Automatic1111</p>
            <p style={{ textDecoration: 'line-through' }}>sd-forge</p>
          </section>
        </section>
        <section>
          <section>
            <h2>Generative Image AI Models</h2>
          </section>
          <section>
            <h3>FLUX</h3>
            <ul>
              <li>FLUX.1-dev</li>
              <li>FLUX.1-schnell</li>
            </ul>
          </section>
          <section>
            <h3>Stable Diffusion</h3>
            <ul>
              <li>SD 1.5</li>
              <li style={{ fontWeight: 'bolder' }}>SDXL</li>
              <li>SD 3.5</li>
              <li>...etc</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h2>Diffusion Models</h2>
            <p>SDXL is a diffusion model. How do they work?</p>
            <img src="/img/load-checkpoint.png" alt="Load Checkpoint" class="r-stretch" />
          </section>
          <section>
            <h3>U-Net (MODEL)</h3>
            <img src="/img/diffusion_schematics.png" alt="Diffusion Schematics" class="r-stretch" />
            <p style={{ fontSize: '.7rem', padding: 0, margin: 0 }}>
              From:{' '}
              <a href="https://scholar.harvard.edu/binxuw/classes/machine-learning-scratch/materials/foundation-diffusion-generative-models">
                https://scholar.harvard.edu/binxuw/classes/machine-learning-scratch/materials/foundation-diffusion-generative-models
              </a>
            </p>
            <p>This produces a U-Net, which is turn is a NN (Neural Network)</p>
          </section>
          <section>
            <h3>Contrastive Language-Image Pre-Training (CLIP)</h3>
            <p>But how do we associate concepts with images?</p>
            <p>CLIP is a model that learns visual concepts from natural language supervision, another NN</p>
          </section>
          <section>
            <h3>Variational Autoencoder (VAE)</h3>
            <p>Yet another Neural Network</p>
            <p>
              This one can encode and decode images to and from "latent space" - an an approximation of an image to save
              time and space.
            </p>
          </section>
        </section>
        <section>
          <h2>Sampling</h2>
          <p>Denoising the image in latent space, by steps</p>
          <img src="/img/basic-gen.png" alt="ComfyUI screenshot" class="r-stretch" />
        </section>
        <section>
          <h2>Sampler Settings</h2>
          <p>Control the sampling to get results</p>
          <img src="/img/sampler/basic.png" alt="ComfyUI sampler settings" class="r-stretch" />
        </section>
        <section>
          <h3>Seeding</h3>
          <p>An initialization value to produce randomness</p>
          <img src="/img/sampler/seed.png" alt="ComfyUI seeding settings" class="r-stretch" />
        </section>
        <section>
          <section>
            <h3>Steps</h3>
            <p>How many times to run the denoising process</p>
            <img src="/img/sampler/steps.png" alt="ComfyUI steps settings" class="r-stretch" />
          </section>
          {steps.map(step => (
            <Step key={step} step={step} />
          ))}
        </section>
        <section>
          <section>
            <h3>CFG</h3>
            <p>How "creative" the sampler should be</p>
            <img src="/img/sampler/cfg.png" alt="ComfyUI CFG settings" class="r-stretch" />
          </section>
          {cfgs.map(cfg => (
            <Cfg key={cfg} cfg={cfg} />
          ))}
        </section>
        <section>
          <section>
            <h3>Samplers</h3>
            <p>What algorithm should be used to sample</p>
            <img src="/img/sampler/sampler_name.png" alt="ComfyUI samplers settings" class="r-stretch" />
          </section>
          {samplers.map(sampler => (
            <SamplerName key={sampler.item} name={sampler} />
          ))}
        </section>
        <section>
          <section>
            <h3>Scheduler</h3>
            <p>How to schedule the sampling (aggressiveness)</p>
            <img src="/img/sampler/scheduler.png" alt="ComfyUI scheduler settings" class="r-stretch" />
          </section>
          {schedulers.map(scheduler => (
            <Scheduler key={scheduler.item} scheduler={scheduler} />
          ))}
        </section>
        <section>
          <section>
            <h3>Denoise</h3>
            <p>To what degree to denoise the input image</p>
            <img src="/img/sampler/denoise.png" alt="ComfyUI denoise settings" class="r-stretch" />
          </section>
          <section data-transition="none">
            <p style={{ fontSize: '1em' }}>original</p>
            <img src="/img/img2imgbase.jpg" alt="Original" class="r-stretch" />
          </section>
          {denoise.map(denoiseNum => (
            <Denoise key={denoiseNum} denoiseNum={denoiseNum} />
          ))}
          <section data-transition="none">
            <p style={{ fontSize: '1em' }}>denoise: 1.0</p>
            <img src="/img/base.png" alt="Original" class="r-stretch" />
          </section>
        </section>
        <section>
          <section data-transition="none">
            <h2>Results</h2>
            <p>Looks perfect, right?</p>
            <img src="/img/base.png" alt="Results" class="r-stretch" />
          </section>
          <section data-transition="none">
            <h2>Results</h2>
            <p>OK, maybe not...</p>
            <img src="/img/disgust.png" alt="Results" class="r-stretch" />
          </section>
        </section>
        <section>
          <section>
            <TwoColumnLayout
              leftCol={
                <section
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    alignContent: 'center',
                  }}
                >
                  <h2>Refining Your Image</h2>
                  <p>Using more AI to make better AI</p>
                </section>
              }
              rightCol={
                <section
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    alignContent: 'center',
                  }}
                >
                  <img src="/img/aiai.png" alt="AI refining AI" />
                </section>
              }
            />
          </section>
          <section>
            <h3>Inpainting</h3>
            <p>
              Just like the title sounds, it uses AI image generative capabilities to regenerate parts of your image
            </p>
            <img src="/img/disgust.png" alt="Inpainting" class="r-stretch" />
          </section>
          <section>
            <h3>Outpainting</h3>
            <p>Like inpainting, but for embiggening</p>
            <img src="/img/outpainting.png" alt="Outpainting" class="r-stretch" />
          </section>
          <section>
            <h3>ControlNet</h3>
            <p>Control the AI with more AI</p>
            <img src="/img/controlnet.png" alt="ControlNet" class="r-stretch" />
          </section>
        </section>
        <section>
          <section>
            <h2>Low-Rank Adaptation (LoRA)</h2>
            <p>Refine and fine-tune your base model</p>
            <img src="/img/lora.png" alt="LoRA" class="r-stretch" />
          </section>
          <section>
            <h2>Making your own LoRA</h2>
            <ul>
              <li>Have a set of images of the subject</li>
              <li>Describe each image in the set, adding a unique tag</li>
              <li>Train (using kohya_ss or your own code)</li>
            </ul>
          </section>
        </section>
        <section>
          <section>
            <h2>Now for some code</h2>
            <pre style={{ fontSize: '0.9rem' }}>
              <code>
                {`import os
from diffusers import StableDiffusionXLPipeline

pipe = StableDiffusionXLPipeline.from_single_file(
    os.path.abspath('./sd_xl_base_1.0.safetensors'), 
    use_safetensors=True,
)

pipe.to("cuda")

prompt = "a beautiful sunset over the ocean"

image = pipe(prompt=prompt).images[0]

image.save("scene.png")
`}
              </code>
            </pre>
          </section>
          <section>
            <h3>If your computer runs off a potato</h3>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://colab.research.google.com/drive/1oUTshmUVlcR-J7vEBvlmo991pjxFMpXQ?usp=sharing"
              >
                Use Google Colab
              </a>
            </p>
          </section>
        </section>
        <section>
          <section>
            <h2>Resources</h2>
            <h3>This Slide Deck</h3>
            <p>
              <a href="https://github.com/wojonet/zero-to-lora-slide-deck">
                https://github.com/wojonet/zero-to-lora-slide-deck
              </a>
            </p>
          </section>
          <section>
            <h2>Resources</h2>
            <p>
              <p>
                <h3>Tools</h3>
                <p>
                  <a href="https://github.com/comfyanonymous/ComfyUI">ComfyUI</a>
                  <br />
                  <a href="https://github.com/ltdrdata/ComfyUI-Manager">ComfyUI Manager (plugin)</a>
                </p>
                <p>
                  <a href="https://github.com/AUTOMATIC1111/stable-diffusion-webui">Automatic1111</a>
                </p>
                <p>
                  <a href="https://github.com/lllyasviel/stable-diffusion-webui-forge">sd-forge</a>
                </p>
                <p>
                  <a href="https://github.com/bmaltais/kohya_ss">kohya_ss</a>
                </p>
              </p>
            </p>
          </section>
          <section>
            <h2>Resources</h2>
            <p>
              <h3>Models</h3>
              <p>
                <p>
                  <a href="https://huggingface.co/">Hugging Face</a>
                </p>
                <p>
                  <a href="https://civitai.com/">Civitai</a>
                </p>
                <p>
                  <a href="https://tensor.art/">TensorArt</a>
                </p>
              </p>
            </p>
          </section>
          <section>
            <h2>Resources</h2>
            <p>
              <h3>Code</h3>
              <p>
                <a href="https://huggingface.co/docs/diffusers/index">Hugging Face Diffuers documentation</a>
              </p>
              <p>
                <a href="https://colab.research.google.com/">Google Colab</a>
              </p>
            </p>
          </section>
        </section>
        <section>
          <h2>Next Steps (for me)</h2>
          <p>More LoRAs, More code, More quality</p>
          <p>
            <a href="https://github.com/black-forest-labs/flux">FLUX</a>
          </p>
          <p>
            <a href="https://github.com/Tencent/HunyuanVideo">HunyuanVideo</a>
          </p>
          <p>
            LLMs (like <a href="https://www.llama.com/">LLAMA</a>)
          </p>
        </section>
        <section>
          <TwoColumnLayout
            leftCol={
              <div>
                <h2>Thank you!</h2>
                <h3>Alec Wojciechowski</h3>
                <p>
                  <a href="mailto:wojonet@gmail.com">wojonet@gmail.com</a>
                </p>
                <p>Full Stack Developer</p>
                <p>C# | .NET | Next.js | React</p>
              </div>
            }
            rightCol={
              <div>
                <p>
                  <img src="/img/Sprite-0002.png" alt="placeholder" />
                </p>
                <p>* Not AI generated</p>
              </div>
            }
          />
        </section>
      </div>
    </div>
  )
}

export default App
