let contentContainer = document.getElementsByClassName("contentContainer");

for(let i = 0; i<contentContainer.length; i++)
{
    contentContainer[i].addEventListener("click", showInfo);
}
function showInfo()
{
    this.classList.toggle("activo");
}