<template lang="pug">
div(class="w-[525px] h-full mx-auto flex flex-col gap-[25px]")
  img(src="@/assets/photo-2.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")

  div(class="flex flex-col gap-[26px] mt-[6px]")
    div(class="w-full h-[26px] bg-[#D5AD90] flex justify-center mt-[8px] mb-[-10px]")
      desktop-text(text="Преимущества технологии копчения «КОХ»" bold="true")
    desktop-text(indent="true" text="Дело всё в том, что при обычном копчении, а это температура 800 - 1000 °C, древесина разлагается полностью и значительная ее часть превращается в смолы, фенольные и карбонильные соединения, бензопирен, углекислый газ и золу. Это придает продуктам специфический угольно-едкий привкус, плюс набор вредных канцерогенных соединений." class="mb-[-10px]")

    desktop-text(indent="true" text="У фрикционного дымогенератора, применённого в технологии КОХ, нет процесса горения, отсутствует образование вредных для здоровья соединений. Рабочая температура, дымогенератора находится в пределах 260 - 320 °C, (температура выпечки хлеба). Этого вполне достаточно для получения чистого дыма и продуктов копчения высшего качества." class="mb-2")

    img(src="@/assets/photo-5.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")

    div(class="w-full h-[26px] bg-[#D5AD90] flex justify-center mt-[8px] mb-[-10px] mt-4")
      desktop-text(text="Документы" bold="true")
    desktop-text(indent="true" text="Производитель является участником системы «Меркурий». Национальной системы цифровой маркировки «Честный знак». Деятельность осуществляется в соответствии с их требованиями. ")
    desktop-text(text="Членство в ассоциации GS1 Russia" class="mt-[-10px]")
    desktop-text(text="GLN4627148283995" class="mt-[-22px]")
    desktop-text(text="Технические условия" class="mt-[-10px]")
    desktop-text(text="ТУ 10.51.40-001-2023049113-2023" class="mt-[-22px]")
    desktop-text(text="Декларация о соответствии" class="mt-[-10px]")
    desktop-text(text="ЕАЭС N RU Д-RU.РА05.В.20450/23 " class="mt-[-22px]")

    div(class="relative mt-1 mb-[15px]")
      div(class="absolute top-[-8px] flex gap-4")
        desktop-dark-button(@click="LIBRARY.savePdf()" text="Скачать PDF")
    desktop-dark-button(@click="LIBRARY.openLink()" text="Открыть на сайте Росаккредитации" class="mt-2 mb-8")

    img(src="@/assets/photo-3.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")
</template>
