export class Popup{
  templateId = 'popup-template';

  showPopup({title, recipeRows, targetEl}){
    // remove existing popup
    const existingPopup = document.querySelector('.popup');
    if(existingPopup) existingPopup.remove();

    // generate new popup using the template and passed data
    const popupContent = document.querySelector(`#${this.templateId}`).content.firstElementChild.cloneNode(true);
    popupContent.querySelector('.popup__header').textContent = title;
    const popupBody = popupContent.querySelector('.popup__body');
    recipeRows.forEach(x => {
      popupBody.appendChild(x);
    });
    document.body.appendChild(popupContent);
    popupContent.style.top = targetEl.offsetTop + 34 + 'px';
    popupContent.style.left = targetEl.offsetLeft + 'px';
  }
}