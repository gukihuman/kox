<template lang="pug">
div(class="w-[345px] h-full mx-auto flex flex-col gap-[13px]")
  img(src="@/assets/photo-2.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")
  div(class="w-[368px] h-[20px] bg-dark-vanilla flex justify-center mt-[8px] mb-[-3px]")
    mobile-text(text="О продукте" bold="true" class="ml-[-18px]")
  mobile-text(indent="true" text="Продукт заполняет пустующую на рынке нишу натурального, классического копчёного сыра. Отлично подходит к чаю, вину, пиву. Идеален в дальней дороге и на изысканном столе. Приятные ноты можжевелового аромата прекрасно сочетаются с классическим вкусом лучших полутвёрдых сыров.")
  img(src="@/assets/photo-4.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")
  div(class="flex flex-col gap-[8px] mt-[6px]")
    div(class="w-[368px] h-[20px] bg-dark-vanilla flex justify-center")
      mobile-text(text="Преимущества технологии копчения КОХ" class="ml-[-25px]" bold="true")
    mobile-text(indent="true" text="Дело всё в том, что при обычном копчении, а это температура 800-1000 С, древесина разлагается полностью и значительная ее часть превращается в смолы, фенольные и карбонильные соединения, бензопирен, углекислый газ и золу. Это придает продуктам специфический угольно-едкий привкус, плюс набор вредных канцерогенных соединений.")
    mobile-text(indent="true" text="У фрикционного дымогенератора, применённого в технологии КОХ, нет процесса горения, отсутствует образование вредных для здоровья соединений. Рабочая температура, дымогенератора находится в пределах 260-320 С, (температура выпечки хлеба). Этого вполне достаточно для получения чистого дыма и продуктов копчения высшего качества.")

  img(src="@/assets/photo-5.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none mt-[10px] shadow-lg")

  div(class="h-[55px]")
    div(class="w-[368px] h-[20px] bg-dark-vanilla flex items-center mt-[8px] mb-[-3px] flex flex-col")
      mobile-text(text="Партнёры" class="ml-[-24px]" bold="true" class="mb-[2px]")
      mobile-text(text="(здесь вы можете приобрести сыр)" class="ml-[-24px]")

  mobile-text(text="«Cleverfish»" class="w-[400px]" bold="true" class="mt-[-10px]")
  mobile-text(text="магазин рыбы и морепродуктов" class="w-[400px]" class="mt-[-30px] ml-[98px]")
  mobile-text(text="г. Пермь, Комсомольский пр-т, д. 49" class="mt-[-10px]")
  mobile-text(text="г. Пермь, Курья, Лесопарковый переулок 2а/3" class="mt-[-12px]")
  
  mobile-text(text="«Скажите сыр!»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="г. Пермь, ул. Сибирская, д. 46. " class="mt-[-12px]")

  mobile-text(text="«Бабушкина грядка»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="г. Пермь, ул. Газеты звезда, д.30" class="mt-[-12px]")

  mobile-text(text="«Карин»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="ресторан" class="w-[400px]" class="mt-[-30px] ml-[70px]")
  mobile-text(text="г. Пермь, б-р Гагарина д. 65, стр. а" class="mt-[-12px]")

  mobile-text(text="«VINORIO»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="винный бар – магазин" class="w-[400px]" class="mt-[-30px] ml-[86px]")
  mobile-text(text="г. Пермь, ул. Советская д. 65, стр. а" class="mt-[-12px]")

  mobile-text(text="«Партизан»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="ресторан" class="w-[400px]" class="mt-[-30px] ml-[95px]")
  mobile-text(text="г. Пермь, Комсомольский пр-т, д. 44, стр. а" class="mt-[-12px] mb-[2px]")

  mobile-text(text="«Гастрономическая лавка»" class="w-[400px]" bold="true" class="mt-[-5px]")
  mobile-text(text="г. Пермь, ул. Революции д. 22" class="mt-[-10px]")
  mobile-text(text="г. Пермь, ул. Петропавловская д. 29" class="mt-[-12px]")

  img(src="@/assets/photo-1.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none mt-[10px] shadow-lg")

  div(class="w-[368px] h-[20px] bg-dark-vanilla flex justify-center mt-[8px] mb-[-3px]")
    mobile-text(text="Документы" bold="true" class="ml-[-18px]")
  mobile-text(indent="true" text="Производитель является участником системы «Меркурий». Национальной системы цифровой маркировки «Честный знак». Деятельность осуществляется в соответствии с их требованиями. ")
  mobile-text(text="Членство в ассоциации GS1 Russia" class="mt-[-5px]")
  mobile-text(text="GLN4627148283995" class="mt-[-12px]")
  mobile-text(text="Технические условия" class="mt-[-5px]")
  mobile-text(text="ТУ 10.51.40-001-2023049113-2023" class="mt-[-12px]")
  mobile-text(text="Декларация о соответствии" class="mt-[-5px]")
  mobile-text(text="ЕАЭС N RU Д-RU.РА05.В.20450/23 " class="mt-[-12px]")

  div(class="relative mt-1 mb-[10px]")
    div(class="absolute top-[-8px] flex gap-4")
      mobile-dark-button(@click="LIBRARY.savePdf()" text="Скачать PDF")
  mobile-dark-button(@click="LIBRARY.openLink()" text="Открыть на сайте Росаккредитации" class="mt-1")

  img(src="@/assets/photo-3.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none mt-[10px] shadow-lg")

  div(class="w-[368px] h-[20px] bg-dark-vanilla flex justify-center mt-[8px] mb-[-3px]")
    mobile-text(text="Контакты" bold="true" class="ml-[-18px]")
  mobile-text(text="Адрес производства:" class="mt-[-5px]")
  mobile-text(text="г. Кунгур, ул. Голдобина 2а" class="mt-[-12px]")
  mobile-text(text="Телефон: 8 951 941 30 30 " class="mt-[-5px]")
  mobile-text(text="Почта: koh59@yandex.ru " class="mt-[-5px]")
</template>
