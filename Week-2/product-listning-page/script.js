const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const wrapper = document.getElementById("productsWrapper");

gridBtn.onclick = () => {
    wrapper.classList.add("grid-view");
    wrapper.classList.remove("list-view");
    gridBtn.classList.add("text-primary");
    listBtn.classList.remove("text-primary");
};

listBtn.onclick = () => {
    wrapper.classList.remove("grid-view");
    listBtn.classList.add("text-primary");
    gridBtn.classList.remove("text-primary");
};

document.querySelectorAll(".wishlist i").forEach(icon => {
    icon.addEventListener("click", () => {
        icon.classList.toggle("ri-heart-line");
        icon.classList.toggle("ri-heart-fill");
        icon.style.color = "#ef4444";
    });
});

document.getElementById("verifiedOnly").addEventListener("change", e => {
    console.log("Verified:", e.target.checked);
});
