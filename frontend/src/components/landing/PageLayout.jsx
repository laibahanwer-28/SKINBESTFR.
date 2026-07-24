function PageLayout({ children }) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "linear-gradient(135deg,#FFF5F9 0%,#F8F2FF 100%)",
      }}
    >
      {children}
    </div>
  );
}

export default PageLayout;