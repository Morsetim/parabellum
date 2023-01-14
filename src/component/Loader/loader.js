import "./loader.css"


const PageLoader = ({ Farm, Smarter, className }) => {


    return (
        <>
            {className ? <div className={`${className}`}>
                <div>
                    <div className="farm-text-amin">
                        <span className="farm-bit-btn">{Farm}</span>
                        <span className="smarter-bit-btn">{Smarter}</span>
                    </div>
                </div>
            </div> :
                <div className='pageLoader-screen'>
                    <div>
                        <h1 className="farm-text-amin">
                            <span className="farm-bit">{Farm}</span>
                            <span className="smarter-bit">{Smarter}</span>
                        </h1>
                    </div>
                    <div className="line-under-loader"></div>
                </div>
            }
        </>
    );
};

export default PageLoader;