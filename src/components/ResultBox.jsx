export default function ResultBox({ result }) {
  if (!result) return null;
const isReal = result.result === "Real";
    return (
    <div className={`result ${isReal ? "real" : "fake"}`}>
      <h2>{result.result}</h2>

      <div className="bar">
        <div
          className="fill"
          style={{ width: `${result.confidence * 100}%` }}
        ></div>
      </div>

      <p>Confidence: {(result.confidence * 100).toFixed(2)}%</p>
    </div>
  );
}

const styles = {
  card: {
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
};