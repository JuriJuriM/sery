import React from 'react'
import './Second.scss'
import One from '../../assets/img/one.jpg'
import Two from '../../assets/img/two.jpg'
import Three from '../../assets/img/three2.jpg'
import Four from '../../assets/img/four.jpg'
import Six from '../../assets/img/six.jpg'
import Five from '../../assets/img/five.jpg'
import Seven from '../../assets/img/seven.jpg'
import Eight from '../../assets/img/eight.jpg'
import Nine from '../../assets/img/nine.jpg'
import Ten from '../../assets/img/ten.jpg'
import Eleven from '../../assets/img/eleven.jpg'
import Fourteen from '../../assets/img/fourteen.jpg'

const Second = () => {
    return (
        <div className='second'>
            <div className='container'>
                <div className='second__body'>
                    <div className='second__title'>Альбом</div>
                    <div className='second__one'>
                        <img src={One} alt='One' />
                    </div>
                    <div className='second__text-one'>На этой странице, носящей скромное название "Альбом", представлен ряд фотографий нашей курсантской поры. Все они чёрно-белые, и при этом наполняющие наши сердца теплом и самыми светлыми красочными воспоминаниями.</div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Two} alt='Two' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Three} alt='Three' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Four} alt='Four' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Six} alt='Six' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Five} alt='Five' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Seven} alt='Seven' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Eight} alt='Eight' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Nine} alt='Nine' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Ten} alt='Ten' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Eleven} alt='Eleven' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='second__row'>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__photo'>
                                    <img src={Fourteen} alt='Fourteen' />
                                </div>
                            </div>
                        </div>
                        <div className='second__column'>
                            <div className='second__item'>
                                <div className='second__text'>Серёга, это и твой, и мой, и наш альбом!</div>
                                <div className='second__text'>Это молодые красивые лица нашей 23-й учебной группы.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second
