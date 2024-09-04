import s1 from "../../../../assets/rsz_1sofa-1.jpg"
import s2 from "../../../../assets/rsz_2sofa-2.jpg"
import s3 from "../../../../assets/rsz_sofa3a.jpg"
import s4 from "../../../../assets/rsz_sofa-4.jpg"

const SofaDesign = () => {
    return (
        <div className="mt-7">
            <div className="h-3/5 md:w-3/4 lg:w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" >
            {/* <div className="h-3/5 md:w-3/4 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" > */}
                <div>
                    <div className="hero h-fit  bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/Vgf1yg7/sofa-d-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-25"></div>
                        <div className="hero-content text-center text-white">
                            <div className="mt-52 kaku">
                                <h1 className="mb-2 text-3xl font-medium">FURNITURE</h1>
                                <h1 className="mb-5 text-5xl font-semibold">SOFA DESIGN</h1>
                                <button className="btn btn-warning">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={s1} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Tuxedo Sofa</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={s2} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Chester Sofa</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={s3} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Sectional Sofa</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={s4} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Mid-Cen Sofa</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SofaDesign;