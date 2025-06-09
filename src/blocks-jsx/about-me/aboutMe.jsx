// images
import PhotoForOne from '../../../media/photo-for-one.png'  
import PhotoForACouple from '../../../media/photo-for-a-couple.png'
import FamilyPhoto from '../../../media/family-photo.png'
// import { useRef } from 'react'
// import { useState } from 'react'


//  - 1 -
function AboutMe() {

    const text = `Фотография для меня — это способ видеть и чувствовать глубже. Через объектив я стараюсь уловить не просто картинку, а настроение, характер и настоящие эмоции.
        Каждый кадр — это живая история. Я ценю искренность в моменте и верю, что именно она делает снимок настоящим.
        Если вы ищете фотографа, который не просто сделает красивые кадры, а поможет сохранить важные для вас моменты — буду рад стать частью вашей истории.`

    return (
        <div id="aboutMe" className="about-me-block">
            <div className="about-me-container">
                <h2 className='titleSection'>Немного обо мне</h2>
                <p>{text}</p>
            </div>
            <PhotoType/>
        </div>
    )
    
}

// - 2 -
const PhotoCard = ({srcImg, id, textP}) => {

    
    const visibleButton = (e) => {
        const idCard = e.currentTarget.attributes['data-id-card'].value

        document.querySelectorAll('.anchor-button-to-price').forEach(btn => {
            const idBtn = btn.attributes['data-id-button'].value
            idCard === idBtn ? btn.classList.add('active-button') : btn.classList.remove('active-button')
        })
    }

    const hiddenButton = () => {
        document.querySelectorAll('.anchor-button-to-price').forEach(btn => {
            btn.classList.remove('active-button')
        })
    }

    // const scrollToPrice = (e) => {
    //     // const x = e.currentTarget.attributes['data-id-button'].value
    //     const photoForOne = useRef(null)
    //     const photoForACouple = useRef(null)
    //     const familyPhoto = useRef(null)

    //     ReferenceError.current?.scrollIntoView({behavior: 'smooth'})    
    // }

    // - 2.1 -
    const Button = () => {
        return (
            <div className="anchor-button-to-price" data-id-button={id}>
                <div className="button-container">
                    <p>Посмотреть цены</p>
                    <div className="cube"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="photo-type-card" onMouseEnter={visibleButton} onMouseLeave={hiddenButton} data-id-card={id}>
            <div className="photo-type-card-container center-column">
                <div className="image-block">
                    <img src={srcImg}/>
                    <Button/>
                </div>
            <p>{textP}</p>
            </div>
        </div>
    )
}

// - 3 -

// - 4 -
function PhotoType () {
    return (
        <div className="photo-type-block">
            <div className="photo-type-container center-row">
                <PhotoCard 
                    srcImg = {PhotoForOne}
                    id = 'photoForOne'
                    textP = 'Фото для одного'
                />
                <PhotoCard 
                    srcImg = {PhotoForACouple}
                    id = 'photoForACouple'
                    textP = 'Фото для пары'
                />
                <PhotoCard 
                    srcImg = {FamilyPhoto}
                    id = 'familyPhoto'
                    textP = 'Семейное фото'
                />
            </div>
        </div>
    )
}



export default AboutMe