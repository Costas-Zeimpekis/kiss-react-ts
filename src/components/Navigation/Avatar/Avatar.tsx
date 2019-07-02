import React from 'react';
import avatarImg from '../../../assets/images/avatar.jpg';
import './Avatar.scss';

interface AvatarInt {
  classAdd: string;
}
const avatar: React.FC<AvatarInt> = props => {
  const { classAdd } = props;
  return (
    <figure className={['Avatar', classAdd].join(' ')}>
      <div>
        <img src={avatarImg} alt="Baby Avatar" />
      </div>
      <figcaption>Lara Croft</figcaption>
    </figure>
  );
};

export default avatar;
