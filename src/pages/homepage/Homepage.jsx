import "./homepage.scss";
import React, { useState, useEffect } from 'react';
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
function HomePage() {

    const [artistsList, setArtistsList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/src/assets/artists.json');
                const data = await response.json();

                const artistsArray = Object.values(data);
                setArtistsList(artistsArray);
            } catch (error) {
                console.error('Error fetching artists data:', error);
            }
        };

        fetchData();
    }, []);



    const [index, setIndex] = useState(0);

    function nextStep() {
        if (index === artistsList.length - 1){
            setIndex(0);
            return
        }
        setIndex(index + 1)
    };
    function prevStep() {
        if (index === 0){
            setIndex(artistsList.length - 1);
            return
        }
        setIndex(index - 1)
    };

  return (
    <section className="homepage">
      <div className="container">
        <div className="slide-show">
          {artistsList.length > 0 && artistsList[index] && (
            <img
              src={`/baners_artistas/${artistsList[index].banner}`}
              alt=""
              className="slide"
            />
          )}

          <button className="prevButton" onClick={prevStep}>
            <CiCircleChevLeft />
          </button>
          <button className="nextButton" onClick={nextStep}>
            <CiCircleChevRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;




// import "./homepage.scss";
// import React, { useState, useEffect } from 'react';
// import { CiCircleChevLeft } from "react-icons/ci";
// import { CiCircleChevRight } from "react-icons/ci";

// function HomePage() {

//     const [artistsList, setArtistsList] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('/src/assets/artists.json');
//                 const data = await response.json();

//                 const artistsArray = Object.values(data);
//                 setArtistsList(artistsArray);
//             } catch (error) {
//                 console.error('Error fetching artists data:', error);
//             }
//         };

//         fetchData();
//     }, []);



//     const [index, setIndex] = useState(0);

//     function nextStep() {
//         if (index === artistsList.length - 1){
//             setIndex(0);
//             return
//         }
//         setIndex(index + 1)
//     };
//     function prevStep() {
//         if (index === 0){
//             setIndex(artistsList.length - 1);
//             return
//         }
//         setIndex(index - 1)
//     };

//   return (
//     <section className="homepage">
//       <div className="container">
//         <div className="slide-show">

//           {artistsList.lenght > 0 &&(
//             <img
//             src={`/baners_artistas/${artistsList[index].banner}`}
//             alt=""
//             className="slide"
//           />
//           )}

//           <button className="prevButton" onClick={prevStep}>
//           <CiCircleChevLeft />
//           </button>
//           <button className="nextButton" onClick={nextStep}>
//           <CiCircleChevRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HomePage;