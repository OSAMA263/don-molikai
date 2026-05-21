export default function header() {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div>
        <motion.div
          layout
          initial={{
            width: 50,
            height: 80,
            transition: { delay: 0.8 },
          }}
          whileHover={{ width: "100%", height: "100%" }}
          transition={{ duration: 0.5 }}
          className=" relative w-fit p-1 overflow-hidden bg-red-600 font-bold text-center *:transition-all *:duration-500 hover:**:opacity-100 hover:[&_#logo]:bottom-1 hover:[&_#logo]:left-1 hover:[&_#logo]:translate-0"
        >
          <h2 className="delay-800 opacity-0">top text</h2>

          <h2 className=" border size-full top-0">
            <span
              className="absolute transition-all left-1/2 top-1/2 -translate-1/2 opacity-100!"
              id="logo"
            >
              LOGO
            </span>
            <span className="opacity-0!">LOGO</span>
            <span className="delay-800 opacity-0">bottom text</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
