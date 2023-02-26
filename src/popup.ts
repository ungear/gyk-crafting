export class Popup{
  private readonly templateId = 'popup-template';

  showPopup({title, recipeRows, targetEl}: {title: string, recipeRows: HTMLElement[], targetEl: HTMLElement}){
    // remove existing popup
    const existingPopup = document.querySelector('.popup');
    if(existingPopup) existingPopup.remove();

    // generate new popup using the template and passed data
    // TODO: what if querySelector() is null
    const popupContent = (document.querySelector(`#${this.templateId}`) as any)?.content.firstElementChild.cloneNode(true);
    popupContent.querySelector('.popup__header').textContent = title;
    const popupBody = popupContent.querySelector('.popup__body');
    // TODO: replace any with type
    recipeRows.forEach((x: any) => {
      popupBody.appendChild(x);
    });
    document.body.appendChild(popupContent);
    popupContent.style.top = targetEl.offsetTop + 34 + 'px';
    popupContent.style.left = targetEl.offsetLeft + 'px';
  }

  hidePopup(){
    document.querySelector('.popup')?.remove();
  }
}