const Denoise = ({ denoiseNum }) => {
  const path = `img/denoise/bc_dn_${denoiseNum.toFixed(1).toString().replace('.', '').padStart(5, '0')}_.png`
  return (
    <section data-transition="none">
      <p
        style={{
          fontSize: '1em',
        }}
      >
        denoise: {denoiseNum}
      </p>
      <img className="r-stretch" data-src={path} alt={`Denoise ${denoiseNum}`} />
    </section>
  )
}

export default Denoise
