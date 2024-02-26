import React from 'react'
import './Main.scss'
import Warrior from '../../assets/img/warior.jpg'
import Fifth from '../../assets/img/fifth.JPG'
import Second from '../../assets/img/second.png'
import First from '../../assets/img/first.png'
import Weare from '../../assets/img/weare.jpg'
import Fourth1 from '../../assets/img/fourst11.jpg'
import Fourth2 from '../../assets/img/fourst22.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Главная страница</div>
                    <div className='main__warrior'>
                        <img src={Warrior} alt='Warrior' />
                    </div>
                    <div className='main__text-one'>Если бы я захотел написать сочинение на произвольную тему, то, не кривя душой, выбрал бы именно эту!</div>
                    <div className='main__subtitle'>Мой друг Серёга</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Fifth} alt='Fifth' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Именно с этим человеком я проучился полных четыре года в ЛВВПУ ПВО. Хочется сказать, что за эти годы Серёга ни разу меня не подвёл, да и не только меня, но и кого бы то ни было ещё. Он всегда был надёжным парнем и хорошим другом, к которому в любой ситуации можно было обратиться за помощью и за советом.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>С Сергеем мы прошли огонь, воду и медные трубы, и это не просто красивые слова. Будни и выходные были закручены единым вихрем разных событий.</div>
                                <div className='main__text'>А если надо было похулиганить или пошалить, то лучшего компаньона просто было не найти. </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__item'>
                                    <div className='main__photo'>
                                        <img src={Second} alt='Second' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={First} alt='First' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Здесь Серёге не было равных уже только потому, что вместе со скромностью он обладал таким завидным качеством, как бесшабашность. Как-то эти два столпа жизненного кредо уживались в этом непростом человеке и мирно сосуществовали.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row-two'>
                        <div className='main__column-two'>
                            <div className='main__item-two'>
                                <div className='main__text-two'>С Сергеем было не грех опрокинуть по сто пятьдесят граммов горячительного, а после этого ринуться на поиск приключений.</div>
                            </div>
                        </div>
                        <div className='main__column-two'>
                            <div className='main__item-two'>
                                <div className='main__photo-two'>
                                    <img src={Weare} alt='Weare' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row-three'>
                        <div className='main__column-three'>
                            <div className='main__item-three'>
                                <div className='main__photo-three'>
                                    <img src={Fourth1} alt='Fourth1' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column-three'>
                            <div className='main__item-three'>
                                <div className='main__photo-three'>
                                    <img src={Fourth2} alt='Fourth2' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__text-one'>И ещё следует отметить непревзойдённое чувство юмора, которым природа наделила этого человека.</div>
                    <div className='main__text-one'>Серёга, удачи тебе и крепкого здоровья!</div>
                </div>
            </div>
        </div>
    )
}

export default Main
