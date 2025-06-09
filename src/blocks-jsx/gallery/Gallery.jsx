const images = [
    '../media/gallery/image01.png',
    '../media/gallery/image03.png',
    '../media/gallery/image02.png', 
    '../media/gallery/image14.png', 
    '../media/gallery/image04.png',
    '../media/gallery/image07.png',
    '../media/gallery/image05.png',
    '../media/gallery/image08.png', 
    '../media/gallery/image06.png',
    '../media/gallery/image09.png', 
    '../media/gallery/image12.png',
    '../media/gallery/image10.png', 
    '../media/gallery/image11.png', 
    '../media/gallery/image13.png',
    '../media/gallery/image15.png',
    '../media/gallery/image16.png',
]

function Gallery() {
    return (
        <section id="portfolio" className="gallery-block">
            <div className="gallery-container">
                <p className="titleSection padding">Галлерея</p>

                <div className="images-block padding">
                    <div className="images-container">

                        <div className="img-container">
                            {images.map((image, index) => {
                                if ( index % 2 === 0 ) {
                                    return (
                                        <img key={index} src={image} loading="lazy"/>
                                    )
                                }
                            })}
                        </div>
                        <div className="img-container">
                            {images.map((image, index) => {
                                if ( !(index % 2 === 0) ) {
                                    return (
                                        <img key={index} src={image} loading="lazy"/>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>

                <button className="center-row padding">
                    <p>Все фотографии</p>

                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.625H20.5L17.5 1L31 6.625L17.5 11" stroke="#7D7D7D" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

            </div>
        </section>
    )  
}

export default Gallery
