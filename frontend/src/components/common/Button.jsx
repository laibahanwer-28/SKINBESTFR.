import { motion } from "framer-motion";

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6
        py-3
        rounded-2xl
        text-white
        font-semibold
        text-lg
        shadow-lg
        transition-all
        duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
      style={{
        background:
          "linear-gradient(90deg, #F8BBD9 0%, #D8B4FE 100%)",
      }}
    >
      {children}
    </motion.button>
  );
}

export default Button;