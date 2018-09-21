import React from 'react';
import rosto_aline from './../images/aline_avatar.png';

const Avatar = (props) => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img
      src={rosto_aline}
      alt="alinemarius.com.br"
    />
  </div>
)

export default Avatar;