// DOM - EVENTOS   REPASO

const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const likeBtnSvg = document.getElementsByClassName("likeBtnSvg")[0];
const likeBtnPath = document.getElementsByClassName("likeBtnPath")[0];

likeBtnSvg.addEventListener("click", like);

function like() {
    if (likeBtnPath.style.fill !== "white") {
        likeBtnPath.style.fill = "white";
        likeBtnPath.style.stroke = "black";
    } else {
        likeBtnPath.style.fill = "red";
        likeBtnPath.style.stroke = "none";

        likeBtnSvg.animate(
            [{
                    transform: "scale(1)",
                },
                {
                    transform: "scale(1.5)",
                },
                {
                    transform: "scale(1)",
                },
            ], {
                direction: "alternate",
                duration: 200,
                iterations: 1,
            },
        );
    }
}

const postBtn = document.getElementsByClassName("postBtn")[0];
const input = document.getElementsByClassName("commentInput")[0];
const comments = document.getElementsByClassName("comments")[0];

const comentarios = [];

for (let i = 0; i < 3; i++) {
    const newComment = document.createElement("p");
    const comentario = `<span>User${i}</span> ` + "Hola Ramiro!";
    newComment.innerHTML = comentario;
    comentarios.push(newComment);
}

comentarios.forEach((comentario) => comments.append(comentario));

postBtn.addEventListener("click", addComment);

function addComment(event) {
    event.preventDefault();

    if (input.value) {
        if (input.value.length < 50) {
            const newComment = document.createElement("p");
            newComment.innerHTML = "<span>Comment</span> " + input.value;
            comments.append(newComment);
        } else {
            alert("Por favor, escribi un comentario mas chico");
        }
    } else {
        alert("Por favor, escribi tu comentario");
    }

    input.value = "";
}