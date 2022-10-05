var loves = [
    "I love You",
    "أحبك",
    "আমি তোমাকে ভালবাসি",
    "我爱你",
    "Minä rakastan sinua",
    "Je t'aime",
    "Ich liebe dich",
    "Σ'αγαπώ",
    "Szeretlek",
    "Aku mencintaimu",
    "Is tú mo ghrá",
    "愛してる",
    "사랑해",
    "Kocham cię",
    "Eu te amo",
    "Я люблю тебя",
    "Te amo",
    "Nakupenda",
    "Mahal kita",
    "ฉันรักคุณ",
    "Seni seviyorum",
    "میں تم سے پیار کرتا ہوں"
]


window.onload = function() {
    //when the document is finished loading, replace everything
    //between the <a ...> </a> tags with the value of splitText
document.getElementById("sentance").innerHTML=loves[Math.floor(Math.random() * loves.length)];
}