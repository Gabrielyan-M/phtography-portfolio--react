import { useState } from "react"
import BioText from "./BioText.jsx"

const priceObject = [
    {
        name: <p>Портретная съёмка</p>,
        items: [
            '1 час — 5 000 ₽',
            '2 часа — 8 000 ₽',
            '10+ фото в ретуши, все удачные — в базовой цветокоррекции',
            'Локация: студия или улица (аренда студии оплачивается отдельно)'
        ],
        refID: 'photoForOne'
    },
    {
        name: <p>Love Story / Парная съёмка</p>,
        items: [
            '1,5 часа — 7 000 ₽',
            '15 фото в ретуши, остальные — в цветокоррекции',
            'Консультация по образам и локации включена'
        ],
        refID: 'photoForACouple'
    },
    {
        name: <p>Семейная съёмка</p>,
        items: [
            '1,5 часа — 8 000 ₽',
            'До 4 человек',
            '15+ фото в ретуши, цветокоррекция остальных',
            'Доплата за каждого доп. человека — 500 ₽'
        ],
        refID: 'familyPhoto'
    },
    {
        name: <p>Контент-съёмка <span>(личный бренд / соцсети)</span></p>,
        items: [
            '2 часа — 10 000 ₽',
            '20 фото в ретуши',
            'Быстрая передача фото — 2–3 дня',
            'Помощь с локацией и референсами'
        ]
    },
    {
        name: <p>Событийная съёмка</p>,
        items: [
            '1 час — 6 000 ₽',
            'От 2 часов — 5 000 ₽/час',
            'Все удачные кадры в цветокоррекции',
            'Репортаж без постановки, максимум живых моментов'
        ]
    },
    {
        name: <p>Свадебная съёмка</p>,
        items: [
            'Мини (3 часа) — 15 000 ₽',
            'Полдня (5–6 часов) — 25 000 ₽',
            'Полный день (10 часов) — 40 000 ₽',
            'Все фото в цветокоррекции, до 100 — в ретуши'
        ]
    },
    {
        name: <p>Репортажная съёмка <span>(мероприятия, конференции)</span></p>,
        items: [
            'От 2 часов — 5 000 ₽/час',
            'Все фото — в базовой цветокоррекции',
            'Готовность — до 3 рабочих дней'
        ]
    },
    {
        name: <p>Предметная / коммерческая съёмка</p>,
        items: [
            'От 300 ₽ за предмет / 1 фото',
            'Минимальный заказ — от 5 000 ₽',
            'Индивидуальный расчёт по брифу',
            'Возможна съёмка на вашей локации'
        ]
    },
    {
        name: <p>Дополнительная информация</p>,
        items: [
            'Срок готовности — от 5 до 10 дней',
            'Срочная обработка — +30%',
            'Фотокнига / печать — по запросу',
            'Подарочный сертификат — от 5 000 ₽'
        ]
    },

]


function ServiceBlock ({name, items, refID}) {
    const [cond, isOpen] = useState(false)
    const openList = () => { isOpen(!cond) }
    const addClassName = cond ?"active" :""

     return (
        <div className="type-of-service-block">
            <div className="type-of-service-container">

                <div className="title-price" onClick={openList}>
                    {name}
                    <svg className={addClassName} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 10.4951H21M11.5049 1L11.5049 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <ul className={addClassName} ref={refID}>
                    {items.map((item, index) => {
                        return (
                            <li className="item-price" key={index}>{item}</li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

function Price() {
    return (
        <section id="price" className="price-block">
            <div className="price-container">

            <h2 className="titleSection">Цены</h2>

            {priceObject.map((obj, index) => {
                return (
                    <ServiceBlock key={index} name={obj.name} items={obj.items} idBlock={obj.refID}/>
                )
            })}

            <BioText/>

            </div>
        </section>

    )   
}

export default Price