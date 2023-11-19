<template lang="pug">
div(class="w-[340px] h-full mx-auto flex flex-col gap-[13px]")
  img(src="@/assets/photo-2.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")

  mobile-text(indent="true" text="Продукт заполняет пустующую на рынке нишу натурального, классического копчёного сыра. Отлично подходит к чаю, вину, пиву. Идеален в дальней дороге и на изысканном столе. Приятные ноты можжевелового аромата прекрасно сочетаются с классическим вкусом лучших алтайских сыров.")

  img(src="@/assets/photo-2.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none shadow-lg")

  div(class="flex flex-col gap-[8px] mt-[6px]")
    div(class="w-[368px] h-[20px] bg-dark-vanilla")
      mobile-text(text="Преимущества технологии копчения «КОХ»:")
    mobile-text(indent="true" text="Дело всё в том, что при обычном копчении, а это температура 800-1000 С, древесина разлагается полностью и значительная ее часть превращается в смолы, фенольные и карбонильные соединения, бензопирен, углекислый газ и золу. Это придает продуктам специфический угольно-едкий привкус, плюс набор вредных канцерогенных соединений.")
    mobile-text(indent="true" text="У фрикционного дымогенератора, применённого в технологии КОХ, нет процесса горения, отсутствует образование вредных для здоровья соединений. Рабочая температура, дымогенератора находится в пределах 260-320 С, (температура выпечки хлеба). Этого вполне достаточно для получения чистого дыма и продуктов копчения высшего качества.")

  div
    div(class="w-[368px] h-[20px] bg-dark-vanilla")
      mobile-text(text="Алтайскиe полутвердыe:")
    mobile-text(text="швейцарский, горный")
  div(class="w-[368px] h-[20px] bg-dark-vanilla")
    mobile-text(text="Вакуумнaя упаковка, 200-250 гр.")

  img(src="@/assets/photo-1.webp" alt="Фото прилавка с сыром" class="w-full object-cover rounded-[12px] select-none mt-[10px] shadow-lg")

  div(class="w-[368px] h-[20px] bg-dark-vanilla mt-[10px]")
    p(class="text-justify text-montserrat font-semibold text-[16px] font-semibold leading-[17px] text-chocolate-cosmos") Декларация о соответствии:
  mobile-dark-button(@click="LIBRARY.openLink()" text="Открыть на сайте Росаккредитации")
  div(class="relative mt-1")
    div(class="w-[368px] h-[20px] bg-dark-vanilla")
      mobile-text(text="Скачать")
    div(class="absolute -top-1 left-[77px] flex gap-4")
      mobile-dark-button(@click="LIBRARY.savePdf()" text=".pdf")
      mobile-dark-button(@click="LIBRARY.saveDocx()" text=".docx")
      mobile-dark-button(@click="LIBRARY.saveJpg()" text=".jpg")
</template>
