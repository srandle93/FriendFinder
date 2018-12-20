const questionsArr = [
    "I rather spend all day outdoors than playing video games.",
    "Political views should be revealed upon introduction.",
    "I prefer winter all year long over summer all year long.",
    "I am a Vikings fan not a Packers fan!",
    "Pinapples go well on pizza.",
    "I will never eat candy corn for as long as I live!",
    "You should never, under any circumstances speed in traffic.",
    "Society needs to be more progressive.",
    "I am not a texter, just call me.",
    "If I had the funds, I would go shopping everyday."
];

const choices = []
const sel = document.getElementsById("form");
const opts = sel.options;
for(let i = 0; i < opts.length; i++){
    if (opt === true) {
    choices.push(opts[i].value);
    }
};

for(let i = 0; i < questionsArr.length; i++) {
$("#question").append(questionsArr[i]);
$(questionsArr[i]).append(".form");
};


$("#subBtn").on("click", function(event){
    event.preventDefault();
    var newFriend = {
        name: $("#userName").val().trim(),
        photo: $("#userPhoto").val().trim(),
        score: choices
    };
console.log(newFriend);
});

module.exports = questionsArr;
