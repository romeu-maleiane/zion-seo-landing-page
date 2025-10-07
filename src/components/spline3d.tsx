import Spline from '@splinetool/react-spline/next';

function Spline3D() {
    return (
        <div className="absolute top-0 w-full clip-trapezoid h-dvh z-0">
            <Spline
                style={{ pointerEvents: "none", }}
                scene="https://prod.spline.design/2CH7eFfCTJgiqdt0/scene.splinecode"
            />
        </div>
    )
}

export default Spline3D
