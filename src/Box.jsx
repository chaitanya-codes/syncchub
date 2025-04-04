export default function Box({ highlighted }) {
    return (
        <div className={`box ${highlighted ? 'highlighted' : ''}`} />
    )
}