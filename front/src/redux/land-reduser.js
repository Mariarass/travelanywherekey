const SETLAND = 'SET-LAND'
const SETCARD = 'SETCARD'
const SETTOUR = 'SETTOUR'
const SETTICKET = 'SETTICKET'
const SETTOURIMAGE = 'SETTOURIMAGE'
const SETLANGUAGE = 'SETLANGUAGE'
const SETLANGUAGECOUNT = 'SETLANGUAGECOUNT'


let initialState = {



    languageCounter:false,
    language: 'ru',
    water: 0,
    card: [],
    ticket: [],
    currentTour: [],
    currentTourImg: 'https://sun9-83.userapi.com/impg/qkOBICuLLLd8BMaK_5WHpJSMyA5DZ02Zsg8MbQ/OH66le6XWyA.jpg?size=2160x2160&quality=96&sign=242c662041e5843661b594759c11719f&type=album',
    languages: {
        "about": "О нас",
        "tour": "Экскурсии",
        "ticket": "Билеты",
        "contact": "Контакты",
        "earth": "ЭКСКУРСИИ ПО ЗЕМЛЕ",
        "water": "Экскурсии по воде",
        "air": "Экскурсии по воздуху",
        "individual": "индивидуальные",
        "entertaining": "развлекательные",
        "cognitive": "познавательные",
        "children": "детские",
        "group": "групповые",
        "providedTour": "Экускурсии, которые предоставляет",
        "sea": "морская рыбалка",
        "fly": "полет на гидроплане",
        "waterparks": "аквапарки",
        "yacht": "прогулка на яхте",
        "flyboarding": "флайбординг",
        "diving": "дайвинг",
        "helicopter": "вертолетная прогулка",
        "balloon": "воздушный шар ",
        "parachute": "парашют",
        "see": "Смотреть еще",
        "providedTicket": "Билеты, которые предоставляет",
        "aboutUs": "Travel Anywhere Key Group - команда профессионалов! Более 15 лет объединённые одной идеей и целью: «Стать тем самым ключиком, который откроет любые туристические направления нашим гостям»",
        "main": "Главная",
        "tourAbout": "Лучший выбор экскурсий, билетов и развлечений в ОАЭ",
        "ticketAbout": "У нас дешевле чем в кассе.",
        "Emirate": "Эмират",
        "place": "Место",
        "e": "Земля",
        "w": "Вода",
        "a": "Воздух",
        "dubai": "Дубай",
        "AbuDhabi": "Абу-Даби",
        "order": "Закажите у нас экскурсию",
        "chosen": "Нас выбирают потому, что:",
        "advantage1": "Маршрут исходя из опыта и пожеланий гостей",
        "advantage2": "Гибкость в ценообразовании",
        "advantage3": "Легкое и непринужденное общение",
        "advantage4": "Интересные и познавательные факты",
        "advantage5": "Комфотный автомобиль с WI-FI, водой, масками и салфетками",
        "guides": "Наши лучшие гиды",
        "name1": "Юрий",
        "name2": "Денис",
        "name3": "Алексей",
        "name4": "Олег",
        "guide1": "Живет в ОАЭ с 2006 года и знает страну как свои пять пальцев. Грамотно построенный маршрут, знание города, людей, обычаев, законов и правил - сильная сторона Юрия. К проведению экскурсий подходит с чувством и старается дать полезную и нужную информацию.",
        "guide2": "Живет в ОАЭ с 2012 года, объездил страну вдоль и поперёк. Вашим гидом Денис будет до момента Вашей первой встречи, после Вы станете друзьями. Свободное непринуждённое общение, интересные рассказы обо всём, что Вас может заинтересовать в этой стране.",
        "guide3": "Живёт в ОАЭ с 2006 года, не многие местные знают о своей стране столько, сколько знает Алексей. Максимально точен в цифрах, количества этажей и стеклянных блоков в у небоскреба, скорость его строительства и прочие точности, конек Алексея. После экскурсии можно сдавать экзамен по истории ОАЭ.",
        "guide4": "Живёт в ОАЭ с 2017 года и является в нашей команде считается главным по поиску не популярных мест. Если Вы уже были и видели все основные достопримечательности ОАЭ, Олег найдёт, чем Вас удивить.",
        "duration": "Длительность",
        "pass": "Проходит",
        "meeting": "Место встречи",
        "waypoints": "Точки маршрута",
        "organization": "Организационные детали",
        "aboutex": "Как проходит экскурсия",
        "cost": "Что входит в стоимость",
        "separately": "Оплачивается отдельно",
        "write": "Пишите в What`s app для заказа экскурсии!",
        "whats":"Написать в  WhatsApp для заказа"

    },


}




export const landReducer = (state = initialState, action) => {


    switch (action.type) {


        case SETLAND:
            return {
                ...state,
                water: action.state
            }


        case SETCARD:

            return {

                ...state,
                card: [...action.cards]
            }
        case SETTOUR:



            return {

                ...state,
                currentTour: action.tour
            }

        case SETTICKET:



            return {

                ...state,
                ticket: action.ticket
            }


        case SETTOURIMAGE:






            return {

                ...state,
                currentTourImg: action.URL
            }


            case SETLANGUAGECOUNT:

                return {
    
                    ...state,
                    languageCounter: action.count
                }
        case SETLANGUAGE:



            if (action.language === 'ru') {
                state.languages = {
                    "about": "О нас",
                    "tour": "Экскурсии",
                    "ticket": "Билеты",
                    "contact": "Контакты",
                    "earth": "ЭКСКУРСИИ ПО ЗЕМЛЕ",
                    "water": "Экскурсии по воде",
                    "air": "Экскурсии по воздуху",
                    "individual": "индивидуальные",
                    "entertaining": "развлекательные",
                    "cognitive": "познавательные",
                    "children": "детские",
                    "group": "групповые",
                    "providedTour": "Экускурсии, которые предоставляет",
                    "sea": "морская рыбалка",
                    "fly": "полет на гидроплане",
                    "waterparks": "аквапарки",
                    "yacht": "прогулка на яхте",
                    "flyboarding": "флайбординг",
                    "diving": "дайвинг",
                    "helicopter": "вертолетная прогулка",
                    "balloon": "воздушный шар ",
                    "parachute": "парашют",
                    "see": "Смотреть еще",
                    "providedTicket": "Билеты, которые предоставляет",
                    "aboutUs": "Travel Anywhere Key Group - команда профессионалов! Более 15 лет объединённые одной идеей и целью: «Стать тем самым ключиком, который откроет любые туристические направления нашим гостям»",
                    "main": "Главная",
                    "tourAbout": "Лучший выбор экскурсий, билетов и развлечений в ОАЭ",
                    "ticketAbout": "У нас дешевле чем в кассе.",
                    "Emirate": "Эмират",
                    "place": "Место",
                    "e": "Земля",
                    "w": "Вода",
                    "a": "Воздух",
                    "dubai": "Дубай",
                    "AbuDhabi": "Абу-Даби",
                    "order": "Закажите у нас экскурсию",
                    "chosen": "Нас выбирают потому, что:",
                    "advantage1": "Маршрут исходя из опыта и пожеланий гостей",
                    "advantage2": "Гибкость в ценообразовании",
                    "advantage3": "Легкое и непринужденное общение",
                    "advantage4": "Интересные и познавательные факты",
                    "advantage5": "Комфотный автомобиль с WI-FI, водой, масками и салфетками",
                    "guides": "Наши лучшие гиды",
                    "name1": "Юрий",
                    "name2": "Денис",
                    "name3": "Алексей",
                    "name4": "Олег",
                    "guide1": "Живет в ОАЭ с 2006 года и знает страну как свои пять пальцев. Грамотно построенный маршрут, знание города, людей, обычаев, законов и правил - сильная сторона Юрия. К проведению экскурсий подходит с чувством и старается дать полезную и нужную информацию.",
                    "guide2": "Живет в ОАЭ с 2012 года, объездил страну вдоль и поперёк. Вашим гидом Денис будет до момента Вашей первой встречи, после Вы станете друзьями. Свободное непринуждённое общение, интересные рассказы обо всём, что Вас может заинтересовать в этой стране.",
                    "guide3": "Живёт в ОАЭ с 2006 года, не многие местные знают о своей стране столько, сколько знает Алексей. Максимально точен в цифрах, количества этажей и стеклянных блоков в у небоскреба, скорость его строительства и прочие точности, конек Алексея. После экскурсии можно сдавать экзамен по истории ОАЭ.",
                    "guide4": "Живёт в ОАЭ с 2017 года и является в нашей команде считается главным по поиску не популярных мест. Если Вы уже были и видели все основные достопримечательности ОАЭ, Олег найдёт, чем Вас удивить.",
                    "duration": "Длительность",
                    "pass": "Проходит",
                    "meeting": "Место встречи",
                    "waypoints": "Точки маршрута",
                    "organization": "Организационные детали",
                    "aboutex": "Как проходит экскурсия",
                    "cost": "Что входит в стоимость",
                    "separately": "Оплачивается отдельно",
                    "write": "Пишите в What`s app для заказа экскурсии!",
                    "whats":"Написать в  WhatsApp для заказа"




                }

            }
            else {
                state.languages = {
                    "about": "About Us",
                    "tour": "Excursions",
                    "ticket": "Tickets",
                    "contact": "Contacts",
                    "earth": "TOURS ON THE EARTH",
                    "water": "Excursions on the water",
                    "air": "Air         Excursions",
                    "individual": "individual",
                    "entertaining": "entertaining..",
                    "cognitive": "cognitive....",
                    "children": "children`s",
                    "group": "group...",
                    "providedTour": "Tours provided by ",
                    "fly": "hydroplane flight",
                    "sea": "sea fishing",
                    "waterparks": "waterparks",
                    "yacht": "trip on a yacht",
                    "flyboarding": "flyboarding",
                    "diving": "diving",
                    "helicopter": "helicopter ride",
                    "balloon": "air balloon",
                    "parachute": "parachute",
                    "see": "See more",
                    "providedTicket": "Tickets provided by",

                    "aboutUs": "Travel Anywhere Key Group is a team of professionals! More than 15 years united by one idea and goal: To become the very key that will open any tourist destinations to our guests",
                    "main": "Home",
                    "tourAbout": "The best selection of tours, tickets and activities in the UAE",
                    "ticketAbout": "We are cheaper than at the box office.",
                    "Emirate": "Emirate",
                    "place": "Place",
                    "e": "Land",
                    "w": "Water",
                    "a": "Air",
                    "dubai": "Dubai",
                    "AbuDhabi": "Abu-Dhabi",

                    "order": "Book a tour with us",
                    "chosen": "We are chosen because:",
                    "advantage1": "Itinerary based on the experience and wishes of the guests",
                    "advantage2": "Flexibility in pricing",
                    "advantage3": "Easy and relaxed communication",
                    "advantage4": "Interesting and informative facts",
                    "advantage5": "Comfortable car with WI-FI, water, masks and wipes",
                    "guides": "Our best guides",
                    "name1": "Yuri",
                    "name2": "Denis",
                    "name3": "Alexei",
                    "name4": "Oleg",
                    "guide1": "Lives in the UAE since 2006 and knows the country like the back of his hand. A well-planned route, knowledge of the city, people, customs, laws and regulations are Yuri's forte. He approaches excursions with feeling and tries to give useful and necessary information.",
                    "guide2": "Lives in the UAE since 2012, traveled the country far and wide. Denis will be your guide until the moment of your first meeting, after which you will become friends. Free easy communication, interesting stories about everything that might interest you in this country.",
                    "guide3": "Lives in the UAE since 2006, not many locals know as much about their country as Alexei does. The most accurate in numbers, the number of floors and glass blocks in a skyscraper, the speed of its construction and other accuracy, Alexey's strong point. After the tour, you can take an exam on the history of the UAE.",
                    "guide4": "He has been living in the UAE since 2017 and is considered the main searcher for unpopular places in our team. If you have already been and seen all the main sights of the UAE, Oleg will find something to surprise you with",
                    "duration": "Duration",
                    "pass": "Passes",
                    "meeting": "Meeting point",
                    "waypoints": "Waypoints",
                    "organization": "Organizational details",
                    "aboutex": "What tour is it",
                    "cost": "What is included in the price",
                    "separately": "Paid separately",
                    "write": "Write to Whatsapp to order a tour!",
                    "whats":"Write to WhatsApp for order"


                }

            }
            return {

                ...state,
                language: action.language,


            }




        default:
            return state

    }

}

export const setLand = (state) => ({ type: SETLAND, state })
export const setCard = (cards) => ({ type: SETCARD, cards })
export const setTour = (tour) => ({ type: SETTOUR, tour })
export const setTicket = (ticket) => ({ type: SETTICKET, ticket })
export const setImage = (URL) => ({ type: SETTOURIMAGE, URL })
export const setLanguage = (language) => ({ type: SETLANGUAGE, language })
export const setLanguageCount = (count) => ({ type: SETLANGUAGECOUNT, count })
