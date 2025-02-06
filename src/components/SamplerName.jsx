const SamplerName = ({ name }) => {
  const ctrl = name.name === 'euler' ? 'blue' : 'inherit'
  return (
    <section data-transition="none">
      <p
        className="r-fit-text"
        style={{
          color: ctrl,
        }}
      >
        sdxl, step 49, cfg: 7.5, sampler: {name.name}, scheduler: karras
      </p>
      <img
        className="r-stretch"
        data-src={`img/sampler_name/bs_sam_${name.item.toString().padStart(5, '0')}_.png`}
        alt={`Sampler ${name.name}`}
      />
    </section>
  )
}

export default SamplerName
