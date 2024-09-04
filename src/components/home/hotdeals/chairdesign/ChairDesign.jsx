import ch1 from "../../../../assets/rsz_c1.jpg"
import ch2 from "../../../../assets/rsz_c3.jpg"
import ch3 from "../../../../assets/rsz_ch3a.jpg"
import ch4 from "../../../../assets/rsz_ch-4.jpg"

const ChairDesign = () => {
    return (
        // <div className="w-10/12 mt-10 mb-10">
        <div className="mt-10 mb-10 grid justify-items-end">
            <div className="h-3/5 md:w-3/4 lg:w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" >
            {/* <div className="h-3/5 grid justify-items-end grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3" > */}

                <div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={ch1} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Eames Chair</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={ch2} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Rocking Chair</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={ch3} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Adirondack Chair</p>
                            {/* </div> */}
                        </div>
                        <div className="card rounded bg-base-100 shadow-xl h-[195px]">
                            <figure><img className="" src={ch4} alt="" /></figure>
                            {/* <div className="card-body"> */}
                                <p className="text-xl font-semibold p-1">Wingback Chair</p>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

                {/* <div className=""> */}
                <div className="hero h-[399px] bg-base-200" style={{ backgroundImage: 'url(https://i.ibb.co/wgftXtf/chair-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="mt-52">
                                <h1 className="mb-5 text-5xl font-semibold">CHAIR DESIGN</h1>
                                <button className="btn btn-warning">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
                
            </div>
        </div>
    );
};

export default ChairDesign;