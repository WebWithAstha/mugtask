import React from 'react';

const ProfileImage = ({ src, alt }) => (
  <div className="relative h-full flex justify-center">
    <div className="rounded-full w-[30vw] h-[30vw]">
        <div className="w-[30vw] h-[30vw] absolute shrink-0 top-0 left-1/2 -translate-x-1/2  border-t-0 rounded-full  border-4 border-orange-400"></div>

    <img src={src} alt={alt} className="w-full h-full object-contain rounded-b-full" />
    </div>
    {/* <div className="absolute top-0 left-0 w-[40%] h-10 bg-orange-500  bg-opacity-40"></div> */}
  </div>
);

export default ProfileImage;
