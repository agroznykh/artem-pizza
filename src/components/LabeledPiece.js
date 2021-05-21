export function LabeledPiece({ label, children }) {
    return (
        <div style={{ margin: 10, width: 145 }}>
            <span>{label}</span>
            {children}
        </div>
    )
}
