import { Pose } from "@/lib/types";

export const poses: Pose[] = [
  // === ПОРТРЕТЫ ===
  {
    id: "portrait-01",
    name: "Classic Headshot",
    nameRu: "Классический штрейх-портрет",
    description:
      "Straightforward headshot with natural expression. Shoulders angled slightly, chin tilted gently.",
    descriptionRu:
      "Прямой портрет с естественным выражением лица. Плечи слегка развёрнуты, подбородок мягко приподнят.",
    category: "portrait",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Попросите расслабить плечи",
      "Свет должен падать на лицо под углом 45°",
      "Попробуйте несколько вариантов наклона головы",
    ],
    tags: ["портрет", "классика", "штрейх"],
  },
  {
    id: "portrait-02",
    name: "Over the Shoulder",
    nameRu: "Через плечо",
    description:
      "Subject turns body away but looks back at camera. Creates a sense of mystery and engagement.",
    descriptionRu:
      "Модель поворачивается спиной к камере и оглядывается через плечо. Создаёт ощущение загадочности.",
    category: "portrait",
    difficulty: "easy",
    gender: "female",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Плечо ближе к камере должно быть слегка приподнято",
      "Взгляд прямо в объектив",
      "Используйте ветер для создания движения в волосах",
    ],
    tags: ["портрет", "загадка", "динамика"],
  },
  {
    id: "portrait-03",
    name: "Hands in Frame",
    nameRu: "Руки в кадре",
    description:
      "Adding hands near the face creates intimacy and visual interest. Soft touch on chin or cheek.",
    descriptionRu:
      "Руки у лица создают ощущение близости и визуальный интерес. Мягкое касание подбородка или щеки.",
    category: "portrait",
    difficulty: "medium",
    gender: "female",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Руки должны быть расслаблены, пальцы не сжаты",
      "Не закрывайте лицо полностью",
      "Кисти рук должны быть мягкими, без напряжения",
    ],
    tags: ["портрет", "руки", "интимность"],
  },
  {
    id: "portrait-04",
    name: "Window Light",
    nameRu: "Свет у окна",
    description:
      "Position near a window for soft, directional natural light that sculpts the face beautifully.",
    descriptionRu:
      "Расположение у окна для мягкого, направленного естественного света, который красиво моделирует лицо.",
    category: "portrait",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Используйте штору как диффузор для мягкого света",
      "Расстояние от окна влияет на контраст",
      "Попробуйте снимать в разное время дня",
    ],
    tags: ["портрет", "натуральный свет", "окно"],
  },
  {
    id: "portrait-05",
    name: "Candid Smile",
    nameRu: "Непринуждённая улыбка",
    description:
      "Natural laugh or smile captured in a spontaneous moment. Feels authentic and warm.",
    descriptionRu:
      "Естественный смех или улыбка, пойманные в спонтанном моменте. Выглядит аутентично и тепло.",
    category: "portrait",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Расскажите шутку или有趣的 историю",
      "Снимайте серийно, чтобы поймать момент",
      "Попросите закрыть глаза, а потом быстро открыть",
    ],
    tags: ["портрет", "улыбка", "спонтанность"],
  },
  {
    id: "portrait-06",
    name: "Dramatic Shadow",
    nameRu: "Драматичная тень",
    description:
      "Strong side lighting creates dramatic shadows across the face. Bold and artistic.",
    descriptionRu:
      "Сильный боковой свет создаёт драматичные тени на лице. Смело и артистично.",
    category: "portrait",
    difficulty: "hard",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop&crop=entropy",
    tips: [
      "Используйте один источник света сбоку",
      "Чёрный фон усиливает драму",
      "Экспериментируйте с углом наклона головы",
    ],
    tags: ["портрет", "тень", "драма"],
  },

  // === ПАРЫ ===
  {
    id: "couple-01",
    name: "Forehead Touch",
    nameRu: "Соприкосновение лбами",
    description:
      "Intimate moment where both partners touch foreheads. Eyes can be open or closed.",
    descriptionRu:
      "Интимный момент, когда партнёры соприкасаются лбами. Глаза можно открыть или закрыть.",
    category: "couple",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop",
    tips: [
      "Пусть пара встанет face-to-face",
      "Расстояние между лицами — 2-3 см",
      "Закрытые глаза создают более интимное настроение",
    ],
    tags: ["пара", "интимность", "близна"],
  },
  {
    id: "couple-02",
    name: "Walking Together",
    nameRu: "Совместная прогулка",
    description:
      "Couple walking hand in hand, naturally interacting. Captures genuine connection.",
    descriptionRu:
      "Пара идёт, держась за руки, естественно взаимодействуя. Передаёт искреннюю связь.",
    category: "couple",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=800&fit=crop",
    tips: [
      "Снимайте с расстояния, чтобы передать естественность",
      "Пусть они разговаривают друг с другом",
      "Золотой час идеален для таких кадров",
    ],
    tags: ["пара", "прогулка", "натуральность"],
  },
  {
    id: "couple-03",
    name: "Dip Kiss",
    nameRu: "Поцелуй с наклоном",
    description:
      "Classic romantic dip with a kiss. One partner supports, the other leans back gracefully.",
    descriptionRu:
      "Классический романтический наклон с поцелуем. Один поддерживает, другой элегантно отклоняется назад.",
    category: "couple",
    difficulty: "hard",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=800&fit=crop",
    tips: [
      "Обеспечьте безопасность — это главное",
      "Наклон должен быть комфортным",
      "Снимайте сбоку для лучшего силуэта",
    ],
    tags: ["пара", "романтика", "поцелуй"],
  },
  {
    id: "couple-04",
    name: "Piggyback Ride",
    nameRu: "Возьмите на руки",
    description:
      "Playful and fun pose where one partner carries the other on their back.",
    descriptionRu:
      "Игривая и весёлая поза, когда один партнёр несёт другого на спине.",
    category: "couple",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529634597503-139d3726fed5?w=600&h=800&fit=crop",
    tips: [
      "Снимайте в движении для естественности",
      "Пусть они смеются и разговаривают",
      "Используйте серийную съёмку",
    ],
    tags: ["пара", "веселье", "игривость"],
  },
  {
    id: "couple-05",
    name: "Back Hug",
    nameRu: "Объятие сзади",
    description:
      "One partner embraces the other from behind. Creates warmth and protection feeling.",
    descriptionRu:
      "Один партнёр обнимает другого сзади. Создаёт ощущение тепла и защищённости.",
    category: "couple",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop&crop=center",
    tips: [
      "Руки обнимающего должны лежать естественно",
      "Пусть оба смотрят в одну сторону",
      "Идеально для закатных съёмок",
    ],
    tags: ["пара", "объятие", "тепло"],
  },

  // === ГРУППЫ ===
  {
    id: "group-01",
    name: "Staggered Line",
    nameRu: "Шахматная линия",
    description:
      "People arranged in a staggered formation, not in a straight line. Adds depth and interest.",
    descriptionRu:
      "Люди расположены в шахматном порядке, не в прямой линии. Добавляет глубину и интерес.",
    category: "group",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop",
    tips: [
      "Используйте разную высоту — ступеньки, стулья",
      "Передний план должен быть чуть размыт",
      "Пусть все смотрят в камеру с разными expressions",
    ],
    tags: ["группа", "композиция", "линия"],
  },
  {
    id: "group-02",
    name: "Circle Huddle",
    nameRu: "Круговое объятие",
    description:
      "Group stands in a circle facing inward, arms around each other. Shows unity.",
    descriptionRu:
      "Группа стоит в кругу лицом внутрь, обнимая друг друга. Показывает единство.",
    category: "group",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop&crop=center",
    tips: [
      "Снимайте с воздуха или с высокой точки",
      "Для обычного ракурса — сзади",
      "Пусть все наклонят головы внутрь",
    ],
    tags: ["группа", "единство", "круг"],
  },
  {
    id: "group-03",
    name: "Walking Formation",
    nameRu: "Движущаяся группа",
    description:
      "Group walking towards camera in a V-formation. Dynamic and confident.",
    descriptionRu:
      "Группа идёт на камеру V-образным строем. Динамично и уверенно.",
    category: "group",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop&crop=bottom",
    tips: [
      "Снимайте на длинном фокусе для сжатия перспективы",
      "Пусть идут уверенно, как на подиуме",
      "Используйте серийную съёмку",
    ],
    tags: ["группа", "движение", "уверенность"],
  },
  {
    id: "group-04",
    name: "Candid Fun",
    nameRu: "Спонтанное веселье",
    description:
      "Genuine laughter and interaction. Someone tells a joke, photographer captures the reaction.",
    descriptionRu:
      "Искренний смех и взаимодействие. Кто-то рассказывает шутку, фотограф ловит реакцию.",
    category: "group",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop&crop=left",
    tips: [
      "Подготовьте тему для разговора",
      "Снимайте без предупреждения",
      "Используйте скрытый таймер или пульт",
    ],
    tags: ["группа", "смех", "спонтанность"],
  },

  // === МОДА ===
  {
    id: "fashion-01",
    name: "Power Stance",
    nameRu: "Поза силы",
    description:
      "Wide stance with hands on hips or in pockets. Exudes confidence and attitude.",
    descriptionRu:
      "Широкая стойка с руками на бёдрах или в карманах. Излучает уверенность и характер.",
    category: "fashion",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    tips: [
      "Ширина стойки — чуть шире плеч",
      "Руки создают треугольники — это привлекает взгляд",
      "Снимайте снизу для усиления эффекта",
    ],
    tags: ["мода", "уверенность", "сила"],
  },
  {
    id: "fashion-02",
    name: "Movement Flow",
    nameRu: "Поток движения",
    description:
      "Fabric in motion, hair flowing. Captures the energy of movement and fashion.",
    descriptionRu:
      "Ткань в движении, волосы развеваются. Передаёт энергию движения и моды.",
    category: "fashion",
    difficulty: "hard",
    gender: "female",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=entropy",
    tips: [
      "Используйте вентилятор или ветер",
      "Быстрая выдержка заморозит движение",
      "Медленная выдержка создаст размытие",
    ],
    tags: ["мода", "движение", "ткань"],
  },
  {
    id: "fashion-03",
    name: "Lean & Look",
    nameRu: "Наклон и взгляд",
    description:
      "Leaning against a wall or surface with a strong gaze. Editorial feel.",
    descriptionRu:
      "Опора на стену или поверхность с сильным взглядом. Редакционное настроение.",
    category: "fashion",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=top",
    tips: [
      "Наклон корпуса на 10-15°",
      "Один локоть на стене создаёт асимметрию",
      "Взгляд чуть мимо объектива",
    ],
    tags: ["мода", "стена", "редакционная"],
  },
  {
    id: "fashion-04",
    name: "Sitting Edge",
    nameRu: "На краю",
    description:
      "Sitting on the edge of a chair or surface, leaning slightly forward. Engaging and direct.",
    descriptionRu:
      "Сидя на краю стула или поверхности, слегка наклонившись вперёд. Вовлекающе и diretamente.",
    category: "fashion",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=bottom",
    tips: [
      "Наклон вперёд создаёт вовлечённость",
      "Руки могут быть расслаблены на коленях",
      "Спина прямая, но не напряжённая",
    ],
    tags: ["мода", "сидя", "контакт"],
  },

  // === ТАНЕЦ ===
  {
    id: "dance-01",
    name: "Arabesque",
    nameRu: "Арабеск",
    description:
      "One leg extended behind, arms reaching forward. Classic ballet pose that elongates the body.",
    descriptionRu:
      "Одна нога вытянута назад, руки тянутся вперёд. Классическая балетная поза, удлиняющая силуэт.",
    category: "dance",
    difficulty: "hard",
    gender: "female",
    imageUrl:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=800&fit=crop",
    tips: [
      "Спина должна быть прямой",
      "Носок вытянут",
      "Снимайте сбоку для лучшего силуэта",
    ],
    tags: ["танец", "балет", "классика"],
  },
  {
    id: "dance-02",
    name: "Leap",
    nameRu: "Прыжок",
    description:
      "Frozen mid-air jump with arms and legs extended. Full of energy and life.",
    descriptionRu:
      "Замороженный прыжок в воздухе с вытянутыми руками и ногами. Полон энергии и жизни.",
    category: "dance",
    difficulty: "hard",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=800&fit=crop&crop=entropy",
    tips: [
      "Используйте выдержку 1/1000 или быстрее",
      "Снимайте серийно",
      "Трамплин или возвышенность помогут",
    ],
    tags: ["танец", "прыжок", "энергия"],
  },
  {
    id: "dance-03",
    name: "Floor Pose",
    nameRu: "Поза на полу",
    description:
      "Seated or reclined on the floor with legs and arms artfully arranged.",
    descriptionRu:
      "Сидячая или лежачая поза на полу с искусно расположенными руками и ногами.",
    category: "dance",
    difficulty: "medium",
    gender: "female",
    imageUrl:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=600&h=800&fit=crop&crop=top",
    tips: [
      "Используйте красивую ткань или фон",
      "Вытяните носки",
      "Кисти рук должны быть мягкими",
    ],
    tags: ["танец", "пол", "гибкость"],
  },

  // === ПОВСЕДНЕВНОСТЬ ===
  {
    id: "lifestyle-01",
    name: "Coffee Moment",
    nameRu: "Момент с кофе",
    description:
      "Holding a coffee cup, looking out the window or at camera. Warm and relatable.",
    descriptionRu:
      "Держа чашку кофе, глядя в окно или в камеру. Тёплое и понятное настроение.",
    category: "lifestyle",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop",
    tips: [
      "Используйте настоящий кофе для аутентичности",
      "Пар от горячего напитка добавит атмосферу",
      "Естественный свет из окна",
    ],
    tags: ["повседневность", "кофе", "уют"],
  },
  {
    id: "lifestyle-02",
    name: "Book Reader",
    nameRu: "Читающий",
    description:
      "Absorbed in a book, natural and unposed. Intellectual and contemplative mood.",
    descriptionRu:
      "Поглощён чтением, естественно и непринуждённо. Интеллектуальное и созерцательное настроение.",
    category: "lifestyle",
    difficulty: "easy",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop&crop=left",
    tips: [
      "Пусть модель действительно читает",
      "Снимайте из-за плеча",
      "Используйте тёплый свет",
    ],
    tags: ["повседневность", "книга", "чтение"],
  },
  {
    id: "lifestyle-03",
    name: "Kitchen Scene",
    nameRu: "На кухне",
    description:
      "Cooking or preparing food. Hands busy, genuine smile. Homey and inviting.",
    descriptionRu:
      "Готовка или приготовление еды. Руки заняты, искренняя улыбка. Домашняя атмосфера.",
    category: "lifestyle",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=800&fit=crop&crop=right",
    tips: [
      "Используйте натуральные ингредиенты",
      "Движение рук создаёт динамику",
      "Контролируйте беспорядок на фоне",
    ],
    tags: ["повседневность", "кухня", "дом"],
  },

  // === РЕДАКЦИОННАЯ ===
  {
    id: "editorial-01",
    name: "Architectural Frame",
    nameRu: "В архитектурной рамке",
    description:
      "Using architecture as a frame or backdrop. Strong geometric composition.",
    descriptionRu:
      "Использование архитектуры как рамки или фона. Сильная геометрическая композиция.",
    category: "editorial",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop",
    tips: [
      "Ищите арки, колонны, лестницы",
      "Симметрия усиливает эффект",
      "Модель должна быть частью композиции",
    ],
    tags: ["редакционная", "архитектура", "композиция"],
  },
  {
    id: "editorial-02",
    name: "Color Story",
    nameRu: "Цветовая история",
    description:
      "Subject dressed in colors that complement or contrast with the environment.",
    descriptionRu:
      "Модель одета в цвета, которые дополняют или контрастируют с окружением.",
    category: "editorial",
    difficulty: "medium",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&crop=entropy",
    tips: [
      "Планируйте гардероб заранее",
      "Используйте цветовой круг",
      "Яркий фон + нейтральная одежда или наоборот",
    ],
    tags: ["редакционная", "цвет", "стиль"],
  },
  {
    id: "editorial-03",
    name: "Negative Space",
    nameRu: "Негативное пространство",
    description:
      "Placing subject in a corner of the frame with lots of empty space. Bold and modern.",
    descriptionRu:
      "Размещение модели в углу кадра с большим пустым пространством. Смело и современно.",
    category: "editorial",
    difficulty: "hard",
    gender: "unisex",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop&crop=top",
    tips: [
      "Минимум 60% кадра — пустое пространство",
      "Однотонный фон усиливает эффект",
      "Маленькая модель в большом пространстве",
    ],
    tags: ["редакционная", "минимализм", "пространство"],
  },

  // === МУЖСКИЕ ===
  {
    id: "male-01",
    name: "Structured Portrait",
    nameRu: "Мужской портрет",
    description:
      "Strong, direct pose with square shoulders and a neutral expression. Confidence through simplicity.",
    descriptionRu:
      "Сильная, прямая поза с расправленными плечами и нейтральным выражением. Уверенность через простоту.",
    category: "portrait",
    difficulty: "easy",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face",
    tips: [
      "Плечи расправлены, спина прямая",
      "Взгляд чуть выше объектива",
      "Руки расслаблены вдоль тела или в карманах",
    ],
    tags: ["мужской", "портрет", "уверенность"],
  },
  {
    id: "male-02",
    name: "Leaning Back",
    nameRu: "Опора назад",
    description:
      "Leaning against a wall with crossed arms or relaxed posture. Casual yet commanding.",
    descriptionRu:
      "Опора на стену со скрещёнными руками или расслабленной позой. Непринуждённо, но властно.",
    category: "fashion",
    difficulty: "easy",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop",
    tips: [
      "Одна нога слегка впереди другой",
      "Руки не должны быть напряжены",
      "Угол корпуса — 45° к камере",
    ],
    tags: ["мужской", "мода", "casual"],
  },
  {
    id: "male-03",
    name: "Walking Shot",
    nameRu: "В движении",
    description:
      "Walking towards the camera with purpose. Great for lifestyle and fashion shoots.",
    descriptionRu:
      "Уверенная походка в сторону камеры. Отлично для lifestyle и fashion-съёмок.",
    category: "lifestyle",
    difficulty: "medium",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
    tips: [
      "Взгляд в камеру или чуть в сторону",
      "Руки в карманах или с лёгким махом",
      "Снимайте серийно, выберите лучший кадр",
    ],
    tags: ["мужской", "движение", "lifestyle"],
  },
  {
    id: "male-04",
    name: "Sitting Assertive",
    nameRu: "Уверенная посадка",
    description:
      "Sitting on a chair or stool with legs apart and hands on knees. Dominant and editorial.",
    descriptionRu:
      "Сидя на стуле с широко расставленными ногами и руками на коленях. Доминантная редакционная поза.",
    category: "editorial",
    difficulty: "medium",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
    tips: [
      "Спина прямая, плечи расправлены",
      "Ноги на ширине плеч",
      "Взгляд прямой, уверенный",
    ],
    tags: ["мужской", "редакционная", "сидя"],
  },
  {
    id: "male-05",
    name: "Jacket Off Shoulder",
    nameRu: "Пиджак на плече",
    description:
      "Drape a jacket over one shoulder for a relaxed, stylish look. Effortless cool.",
    descriptionRu:
      "Пиджак, наброшенный на одно плечо. Расслабленный и стильный образ.",
    category: "fashion",
    difficulty: "hard",
    gender: "male",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=800&fit=crop&crop=top",
    tips: [
      "Пиджак держите за воротник большим пальцем",
      "Вторая рука в кармане брюк",
      "Лёгкий наклон корпуса в сторону",
    ],
    tags: ["мужской", "мода", "стиль"],
  },
];
