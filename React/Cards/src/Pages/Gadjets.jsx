//import React from 'react'
//
//const Card = () => {
//    return (
//        <div>
//            <div className="row">
//                <div className="col-md-6 border border-dark">
//                    <div className="card">
//                        <div className="card-body">
//                            <h5 className="card-title">Card title</h5>
//                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                            <button className="btn btn-primary">Hey</button>
//                        </div>
//                    </div>
//                </div>
//                <div className="col-md-6">
//                    <div className="card">
//                        <div className="card-body">
//                            <h5 className="card-title">Card title</h5>
//                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                            <button className="btn btn-primary">Go somewhere</button>
//                        </div>
//                    </div>
//                </div>
//            </div>
//
//        </div>
//    )
//}
//
//export default Card

import React from "react";
import { Link } from "react-router-dom";

const Gadjets = () => {

    return (
        <div>

            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card " >
                        <div className="card-body">
                            <img src="https://m.media-amazon.com/images/I/617MPEZB5mL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <h5 className="card-title">Oneplus Nord</h5>
                            <p className="card-text">Oneplus Nord 256GB (Blue Variant)</p>
                            <Link to="/Gad_Axios" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card " >
                        <div className="card-body">
                            <img src="https://m.media-amazon.com/images/I/610pghkO81L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <h5 className="card-title">Iphone 14 Pro Max</h5>
                            <p className="card-text">Iphone 14 Pro Max 256GB </p>
                            <Link to="#" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="card " >
                        <div className="card-body">
                            <img src="https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
                            <h5 className="card-title">Samsung</h5>
                            <p className="card-text">Samsung 256GB (Black Variant)</p>
                            <Link to="#" className="btn btn-primary">More...</Link>
                        </div>
                    </div>
                </div>
            </div>



        </div >
    )
}
export default Gadjets