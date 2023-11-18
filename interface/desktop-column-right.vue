<template lang="pug">
div(class="w-[525px] h-full mx-auto flex flex-col gap-[25px]")
  img(src="@/assets/photo-2.webp" alt="Фото сыра" class="w-full object-cover rounded-[12px] select-none")

  div(class="flex flex-col gap-[8px] mt-[6px]")
    div(class="h-[26px] bg-dark-vanilla")
      desktop-text(text="Преимущества технологии копчения «КОХ»:")
    desktop-text(indent="true" text="Дело всё в том, что при обычном копчении, а это температура 800 - 1000 °C, древесина разлагается полностью и значительная ее часть превращается в смолы, фенольные и карбонильные соединения, бензопирен, углекислый газ и золу. Это придает продуктам специфический угольно-едкий привкус, плюс набор вредных канцерогенных соединений.")

    desktop-text(indent="true" text="У фрикционного дымогенератора, применённого в технологии КОХ, нет процесса горения, отсутствует образование вредных для здоровья соединений. Рабочая температура, дымогенератора находится в пределах 260 - 320 °C, (температура выпечки хлеба). Этого вполне достаточно для получения чистого дыма и продуктов копчения высшего качества.")

  div
    div(class="h-[26px] bg-dark-vanilla")
      desktop-text(text="Алтайскиe полутвердыe:")
    desktop-text(text="швейцарский, горный")
  div(class="h-[26px] bg-dark-vanilla")
    desktop-text(text="Вакуумнaя упаковка, 200-250 гр.")

  div(class="w-[368px] h-[26px] bg-dark-vanilla mt-[10px]")
    p(class="text-justify text-montserrat font-semibold text-[24px] font-semibold leading-[29px] text-chocolate-cosmos") Декларация о соответствии:
  desktop-dark-button(@click="LIBRARY.openLink()" text="Открыть на сайте Росаккредитации")
  div(class="relative mt-1")
    div(class="w-[368px] h-[26px] bg-dark-vanilla")
      desktop-text(text="Скачать")
    div(class="absolute -top-2 left-[100px] flex gap-4")
      desktop-dark-button(@click="LIBRARY.savePdf()" text=".pdf")
      desktop-dark-button(@click="LIBRARY.saveDocx()" text=".docx")
      desktop-dark-button(@click="LIBRARY.saveJpg()" text=".jpg")
</template>
