import React from "react";
import { connect } from "react-redux";

export class AllClothing extends React.Component {
  render() {
    return <div className="all-clothing">All Clothing Here</div>;
    // const clothing = this.props.clothing;
    // return (
    //   <div className="all-view">
    //     <div className="all-view-header">
    //       <h1>All Clothing</h1>
    //     </div>

    //     <div className="all-view-cards">
    //       {clothing.length ? (
    //         clothing.map((item) => {
    //           return (
    //             <div key={item.id}>
    //               <div>
    //                 <img
    //                   src="https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221288F120000_1/proenza-schouler-off-white-canvas-city-lug-lace-up-derbys.jpg"
    //                   width="200px"
    //                 />
    //               </div>

    //               <h3>{item.name}</h3>
    //               <h4>{item.price}</h4>
    //             </div>
    //           );
    //         })
    //       ) : (
    //         <p>No Clothing</p>
    //       )}
    //     </div>
    //   </div>
    // );
  }
}

// const mapState = (state) => {
//   return { clothing: state.allClothing };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     getClothing: () => dispatch(fetchClothing()),
//   };
// };

// export default connect(mapState, mapDispatch)(AllClothing);

export default AllClothing;
