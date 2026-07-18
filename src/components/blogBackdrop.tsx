import Spline from '@splinetool/react-spline/next'

/** A diagonal, ribbon-like Spline treatment reserved for the blog page. */
function BlogBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[43rem] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafa] via-[#f9fafa]/80 to-transparent" />
      <div className="absolute -inset-x-[8%] top-28 h-[31rem] overflow-hidden [clip-path:polygon(0_34%,100%_0,100%_68%,0_100%)]">
        <Spline style={{ pointerEvents: 'none', width: '100%', height: '100%' }} scene="https://prod.spline.design/2CH7eFfCTJgiqdt0/scene.splinecode" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-violet-400/20 mix-blend-overlay" />
      </div>
      <div className="absolute -inset-x-[8%] top-[25rem] h-52 bg-gradient-to-r from-green-400/35 via-blue-400/25 to-violet-400/35 blur-2xl [clip-path:polygon(0_50%,100%_0,100%_45%,0_100%)]" />
    </div>
  )
}

export default BlogBackdrop
