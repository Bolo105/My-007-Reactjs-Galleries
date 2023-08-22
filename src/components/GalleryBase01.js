import React from 'react'
import GalleryComp01 from './GalleryComp01';
import styled from 'styled-components';

const Gall = styled.section`
   background: #000;
   padding-top: 100px;
   padding-bottom: 100px;
   margin-top: 70px;
`;
const Head = styled.h2`
   color: #fff;
`;
const Par = styled.p`
   color: #fff;
`;

function GalleryBase01() {
  return (
    <Gall id="gallerycomp1" className="gallery py-5">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center pb-5">
          <div className="col-lg-6 text-center">
            <Head>Look at my Photos...</Head>
            <Par>Odio et unde deleniti. Deserunt numquam exercitationem.</Par>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery1' imagen1='gallery1'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery2' imagen1='gallery2'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery3' imagen1='gallery3'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery4' imagen1='gallery4'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery5' imagen1='gallery5'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery6' imagen1='gallery6'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery7' imagen1='gallery7'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery8' imagen1='gallery8'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery9' imagen1='gallery9'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery10' imagen1='gallery10'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery11' imagen1='gallery11'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery12' imagen1='gallery12'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery13' imagen1='gallery13'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery14' imagen1='gallery14'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery15' imagen1='gallery15'
            />
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <GalleryComp01 
            imagen='gallery16' imagen1='gallery16'
            />
          </div>
        </div>
      </div>
    </Gall>
  )
}

export default GalleryBase01;