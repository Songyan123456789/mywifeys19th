const images = document.querySelectorAll(".image-container img");
const popup = document.querySelector(".popup");
const popupImage = document.querySelector(".popup-image");
const popupText = document.querySelector(".popup-text");
const closePopup = document.querySelector(".close-popup");

const imageInfo = [
  {
    src: "img/intro.jpg",
    title: "Our Memory Gallery <br> (but just a little snapshot)",
    description:
      "Happy Birthday to my most beautiful wife, my best friend, and my soulmate for life 💍💍💍❤️❤️❤️. I've compiled a list of fun moments from our time together so far, I hope you like it hehe~ can't wait to share the rest of our lifetimes together 💚💚💚🩷🩷🩷",
  },
  {
    src: "img/26-12-2022.jpg",
    title: "Boxing Day <br> (but you're the only gift I'll ever need)",
    description:
      "My first time coming back to NZ and immediately went to see you of course!! Literally so so so kaixin kaixin after not seeing you for MONTHS you don't know how much I missed you 😭 Your gifts were so cuteee too hehe~",
  },
  {
    src: "img/30-12-2022.jpg",
    title: "Newmarket Adventure <br> (very hot day but never as hot as you)",
    description:
      "Fun Newmarket day trip yayyy and you were right Corner Burger is so good!! Also loved walking around the city and relaxing with my baby at the park 😌 being with you is really just so peaceful and I can never get enough 🥰",
  },
  {
    src: "img/02-01-2023.jpg",
    title: "Movie Date <br> (but you’re the only one I’m watching)",
    description:
      "First time going to the cinema together! Puss in Boots was nice and all but I really couldn't stop looking at you oop 😚 It was also cool meeting your family and the food was really good!!",
  },
  {
    src: "img/04-01-2023.jpg",
    title: "Newmarket Revisit <br> (first dinner but I only wanna eat you)",
    description:
      "Ah, the day we had our first lil argument but that's what makes the best couple right!! Look how far we've come now babeee ❤️ We finally got to have our first dinner together too hehe (so many firsts!) 😘",
  },
  {
    src: "img/06-01-2023.jpg",
    title: "Back at the Library <br> (but I’m just trying to study you)",
    description:
      "Our classic UoA library date!! Once again of course we only use the library as a place for entertainment but it iz what it iz 🤷🏻‍♂️ BFC chicken was yummmm (not Sensational Chicken oops got confuzzled >.<)",
  },
  {
    src: "img/07-01-2023.jpg",
    title: "First Visit to 东区的家 <br> (but you are already 我的家)",
    description:
      "Ahh this was such a cute day you were soooo nervous at first but of course you know my family LOVES you (not as much as I do though no one beats me there 😤) I hope you visit your 东区的家 more often too for great fun and foooood ❤️",
  },
  {
    src: "img/09-01-2023.jpg",
    title: "Trip to Devonport <br> (but you got me tripping over you)",
    description:
      "We finally went back to the lab again, super nostalgic!! The ferry to Devonport was a bit bouncy but it was all good because we were holding each other hehe 🤝 Always love our sitting in the park and doing nothing classic 🥰",
  },
  {
    src: "img/11-01-2023.jpg",
    title: "Outside the Lab <br> (was my student but now you’re my wifey)",
    description:
      "At our classic place again~ Loved our New World special but was interrupted by people asking us to draw stuff lolol (luckily they had chocolate! 🤩)",
  },
  {
    src: "img/12-01-2023.jpg",
    title: "The Cutest Cat Beanie <br> (but you’re always the warmest)",
    description:
      "omgomg I love love LOVE the little beanie~ my baby's so talented hehe 🥺❤️ We also had dinner with the fam at 廣州燒臘世家 which was AMAZING!! I had to go back to Melbourne after though :(",
  },
  {
    src: "img/02-05-2023.jpg",
    title: "Finally Meeting Again!! <br> (but still happy as ever)",
    description:
      "My wifey couldn't eat 面食 aiyo but it's okay we can adapt!! Was so fun eating the Sumthin Shengjianbao 面皮 and feeding you the 馅 hehe you're so cuteee 🥰",
  },
  {
    src: "img/04-05-2023.jpg",
    title: "My Baby PhD?! <br> (might be Dr. but still forever my Mrs.)",
    description:
      "You look sooo much better with the trencher than I do hehe~ so happy that you joined me for the whole day I really couldn't have done it without all your support ❤️❤️❤️ Also took you to meet my friends which was fun yay!!",
  },
  {
    src: "img/05-05-2023.jpg",
    title: "Yum Cha Yummy Yay <br> (but the only bao bun I see is my baobei)",
    description:
      "The graduation Pikachu was so cute omg thank you babyyy (but obviously still not as cute as you, nothing is duh) 🥺🥺🥺 I've always loved yum cha but have never loved it as much as enjoying it with you 🥟 Also first time having you drive me around so cute I loveee 🤩",
  },
  {
    src: "img/11-05-2023.jpg",
    title: "Uni Date <br> (Kubick classic but never as classic as you)",
    description:
      "Once again we sat in 'that' Kubick spot and I fed you some and you fed me some just like how it always has been wuwuwu ❤️ Just our classic date at uni and I can't wait to do it again!!",
  },
  {
    src: "img/12-05-2023.jpg",
    title: "East Exploration <br> (but I just wanna explore you)",
    description:
      "We finally got to do our Countdown classic with a whole roast chicken and coleslaw!! I just love shopping with you (doing anything with you, in fact) 😽 Us holding the graduation Pikachu will be us holding our babies soon ❤️",
  },
  {
    src: "img/13-05-2023.jpg",
    title: "Naptime with My Wifey <br> (but we definitely ain't sleeping)",
    description:
      "Literally the most comfortable nap I've ever had gosh you're so warm and fuzzy and cosy and wuwuwu eeeeee every time you come to 东区的家 it's always so relaxing I loveee 🥰 You didn't drive that day... I wonder why 🥲",
  },
  {
    src: "img/19-07-2023.jpg",
    title:
      "Melbourne Meeting!! <br> (but now with infinitely more days to come)",
    description:
      "FINALLY REUNITED IN MELBOURNE WOOOOOO!!! It was so cold in the middle of the night but seeing you just immediately warmed my heart and lit me up, don't know how you do it but my wifey's just that amazing I guess ❤️",
  },
  {
    src: "img/20-07-2023.jpg",
    title: "Birthday with My Baby <br> (but now I get to be here for yours)",
    description:
      "We had the big chonky cake right after midnight though it was a bit too 腻 aiyo 🎂 took you back to your hotel afterwards hehe 😘 Introduced you to our Don Tojo classic later that night and also spent way too long waiting for dessert :c You really are my greatest gift 💍",
  },
  {
    src: "img/28-10-2023.jpg",
    title:
      "Happy Birthday to the Love of My Life <br> (but now I get to see you soon!!!)",
    description: "生日快乐老婆~我永远爱你爱你爱你哟 💚❤️🩷🎂🎁🥳",
  },
];

images.forEach((image, index) => {
  const overlay = document.createElement("div");
  overlay.classList.add("popup-overlay");
  overlay.textContent = (index + 1).toString();
  image.appendChild(overlay);

  if (imageInfo[index].src === "img/intro.jpg") {
    image.addEventListener("click", (e) => {
      e.stopPropagation();
      popupImage.src = imageInfo[index].src;
      popupText.innerHTML = `
        <h1>${"Songyan❤️Zoe"}</h1>
        <h2>${imageInfo[index].title}</h2>
        <p>${imageInfo[index].description}</p>
      `;
      popup.style.display = "block";
    });
  } else if (imageInfo[index].src === "img/28-10-2023.jpg") {
    image.addEventListener("click", (e) => {
      e.stopPropagation();
      popupImage.src = imageInfo[index].src;
      popupText.innerHTML = `
        <h1>${imageInfo[index].src.substring(4, 14)}</h1>
        <h2>${imageInfo[index].title}</h2>
        <p>${imageInfo[index].description}</p>
      `;

      let audio = document.createElement("audio");
      audio.controls = true;
      let source = document.createElement("source");
      source.src = "happy-birthday.mp3";
      source.type = "audio/mpeg";
      audio.appendChild(source);

      let pElement = popupText.querySelector("p");
      popupText.insertBefore(audio, pElement.nextSibling);
      popup.style.display = "block";
    });
  } else if (imageInfo[index].src.length === 18) {
    image.addEventListener("click", (e) => {
      e.stopPropagation();
      popupImage.src = imageInfo[index].src;
      popupText.innerHTML = `
        <h1>${imageInfo[index].src.substring(4, 14)}</h1>
        <h2>${imageInfo[index].title}</h2>
        <p>${imageInfo[index].description}</p>
      `;
      popup.style.display = "block";
    });
  }
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (
    popup.style.display === "block" &&
    !popupImage.contains(e.target) &&
    !popupText.contains(e.target)
  ) {
    popup.style.display = "none";
  }
});
