function Card({ children }) {
  return (
    <div
      className="w-full max-w-md p-10"
      style={{
        background: "white",
        borderRadius: "28px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;