import React from 'react';

const ProfileImage = ({ src, alt }) => (
  <div className="relative h-full flex justify-center">
    <div className="rounded-full md:w-[30vw] aspect-square md:h-[30vw]">
        <div className="w-full h-full absolute shrink-0 top-0 left-1/2 -translate-x-1/2  border-t-0 rounded-full  border-4 border-orange-400"></div>
    <img src={src} alt={alt} className="w-full h-full object-contain rounded-b-full" />
    </div>
  </div>
);

export default ProfileImage;
