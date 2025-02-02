export class DropDownMenu {
  static toggleDropDownMenuDisplay(dropDownMenu = document) {
    dropDownMenu.classList.toggle('visible'); //visible is a class which has style property of 'display:block'
  }
}
