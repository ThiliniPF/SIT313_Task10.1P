import React from 'react';
import DevCard from './DevCard';
import './DevCard.css';

const developers = [
    {
      key : 0,
      devPicture: 'developer1.png',
      devName: 'Angelus Lapis',
      devDescription: 'React Developer',
    },
    {
      key : 1,
      devPicture: 'developer2.png',
      devName: 'Janet Weevil',
      devDescription: 'Java Developer',
    },
    {
      key : 2,
      devPicture: 'developer3.png',
      devName: 'Chamika Stone',
      devDescription: 'Android Developer',
    }   
  ];

const DevCardList = () =>
{
    return (
    <div className = "row">
        {developers.map((developer) => (
        <DevCard className="picture-resize"
            key = {developer.key}
            devPicture = {developer.devPicture}
            devName = {developer.devName}
            devDescription = {developer.devDescription}
        />
        ))}
    </div>
    );
};

export default DevCardList;