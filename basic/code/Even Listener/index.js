var value = document.querySelector(".heddingId");
value.addEventListener("mouseover",function()
{
    value.classList.add("hedding");
});
value.addEventListener("mouseout",function()
{
    value.classList.remove("hedding");
});