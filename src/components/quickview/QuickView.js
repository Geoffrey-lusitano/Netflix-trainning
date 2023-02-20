import React from 'react';
import './QuickView.scss';
import { MdCancel} from 'react-icons/md';


function QuickView({bannerStyle, movie, popup, popupStatut}) {
  return (
    <div className={`quickView ${popupStatut && "open"} `}>
        <div className='quickView__banner' style={bannerStyle}>
            <div className='quickView__content'>
                <h3 className='quickView__title'>{movie?.title || movie?.original_title || movie?.name }</h3>
                <p>{movie?.overview}</p>
            </div>
            <button className='quickView__close' onClick={popup}>
                <MdCancel/>
            </button>
        </div>
    </div>
  )
}

export default QuickView