import { useState } from "react"

function Form() {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [check, setCheck] = useState(false)

    const submitData = (e) => {
        e.preventDefault()
        
        if (name && number && check) {
            number.length != 11 && check.check != true ? alert('Поля заполнены неверно') : console.log('всё верно')           
            const nameAppCase = name.trim().split('')[0].toLocaleUpperCase() + name.trim().slice(1)
            alert(`${nameAppCase}, я свяжусь с Вами в ближее время.`)
            
        } else {
            alert('Заполните все поля')
        }

    }

    



    return (
        <section className="feedback-form-block">
            <div className="feedback-form-container">

                <h2 className="titleSection">Остались вопросы?</h2>
                <p>Оставьте заявку — я свяжусь с вами в ближайшее время</p>

                <div className="form-block">
                    <form>
                        <input type="text" name="name" placeholder="Ваше имя" value={name} onChange={(e) => setName('' + e.target.value)}      />
                        <input type="number" name="phoneNumber" placeholder="Номер телефона" value={number} onChange={(e) => setNumber('' + e.target.value)} />
                        <div className="checkbox-block">
                            <input id="checkbox" type="checkbox"  value={check} onChange={(e) => setCheck(e.target.checked)} />
                            <label htmlFor="checkbox">Разрешение на <span><a href="/">обработку данных</a></span></label>
                        </div>

                        <button type="submit" onClick={submitData}>Оставить заявку</button>
                    </form>

                </div>
            </div>
        </section>
    )

}


export default Form