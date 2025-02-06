const TwoColumnLayout = ({ leftCol, rightCol }) => (
  <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
    <div
      style={{
        flex: '1 1 0',
        width: '50%',
      }}
    >
      {leftCol}
    </div>
    <div
      style={{
        flex: '1 1 0',
        width: '50%',
      }}
    >
      {rightCol}
    </div>
  </div>
)

export default TwoColumnLayout
